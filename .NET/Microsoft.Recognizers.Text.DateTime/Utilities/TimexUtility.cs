﻿using System.Collections.Generic;
using System.Collections.Immutable;
using System.Globalization;
using System.Text;
using DateObject = System.DateTime;

namespace Microsoft.Recognizers.Text.DateTime
{
    public class TimexUtility
    {
        private static readonly Calendar Cal = DateTimeFormatInfo.InvariantInfo.Calendar;

        private static readonly HashSet<char> NumberComponents = new HashSet<char>()
        {
            '0','1','2','3','4','5','6','7','8','9','.'
        };

        private static readonly Dictionary<DatePeriodTimexType, string> DatePeriodTimexTypeToTimexSuffix = new Dictionary<DatePeriodTimexType, string>()
        {
            {DatePeriodTimexType.ByDay, Constants.TimexDay },
            {DatePeriodTimexType.ByWeek, Constants.TimexWeek },
            {DatePeriodTimexType.ByMonth, Constants.TimexMonth },
            {DatePeriodTimexType.ByYear, Constants.TimexYear }
        };

        public static string GenerateCompoundDurationTimex(Dictionary<string, string> unitToTimexComponents, IImmutableDictionary<string, long> unitValueMap)
        {
            var unitList = new List<string>(unitToTimexComponents.Keys);
            unitList.Sort((x, y) => (unitValueMap[x] < unitValueMap[y] ? 1 : -1));
            var isTimeDurationAlreadyExist = false;
            var timexBuilder = new StringBuilder(Constants.GeneralPeriodPrefix);

            for (int i = 0; i < unitList.Count; i++)
            {
                var timexComponent = unitToTimexComponents[unitList[i]];

                // The Time Duration component occurs first time, 
                if (!isTimeDurationAlreadyExist && IsTimeDurationTimex(timexComponent))
                {
                    timexBuilder.Append($"{Constants.TimeTimexPrefix}{GetDurationTimexWithoutPrefix(timexComponent)}");
                    isTimeDurationAlreadyExist = true;
                }
                else
                {
                    timexBuilder.Append($"{GetDurationTimexWithoutPrefix(timexComponent)}");
                }
            }

            return timexBuilder.ToString();
        }

        private static bool IsTimeDurationTimex(string timex)
        {
            return timex.StartsWith($"{Constants.GeneralPeriodPrefix}{Constants.TimeTimexPrefix}");
        }

        private static string GetDurationTimexWithoutPrefix(string timex)
        {
            // Remove "PT" prefix for TimeDuration, Remove "P" prefix for DateDuration
            return timex.Substring(IsTimeDurationTimex(timex) ? 2 : 1);
        }

        public static string GenerateDatePeriodTimex(DateObject begin, DateObject end, DatePeriodTimexType timexType, DateObject alternativeBegin = default(DateObject), DateObject alternativeEnd = default(DateObject))
        {
            var equalDurationLength = ((end - begin) == (alternativeEnd - alternativeBegin));

            if (alternativeBegin.IsDefaultValue() || alternativeEnd.IsDefaultValue())
            {
                equalDurationLength = true;
            }

            var unitCount = "XX";

            if (equalDurationLength)
            {
                switch (timexType)
                {
                    case DatePeriodTimexType.ByDay:
                        unitCount = (end - begin).TotalDays.ToString(CultureInfo.InvariantCulture);
                        break;
                    case DatePeriodTimexType.ByWeek:
                        unitCount = ((end - begin).TotalDays / 7).ToString(CultureInfo.InvariantCulture);
                        break;
                    case DatePeriodTimexType.ByMonth:
                        unitCount = (((end.Year - begin.Year) * 12) + (end.Month - begin.Month)).ToString();
                        break;
                    default:
                        unitCount = ((end.Year - begin.Year) + (end.Month - begin.Month) / 12.0).ToString(CultureInfo.InvariantCulture);
                        break;
                }
            }

            var datePeriodTimex = $"P{unitCount}{DatePeriodTimexTypeToTimexSuffix[timexType]}";

            return $"({FormatUtil.LuisDate(begin, alternativeBegin)},{FormatUtil.LuisDate(end, alternativeEnd)},{datePeriodTimex})";
        }

        public static string GenerateWeekTimex(DateObject monday = default(DateObject))
        {
            if (monday.IsDefaultValue())
            {
                return $"{Constants.TimexFuzzyYear}{Constants.DateTimexConnector}{Constants.TimexFuzzyWeek}";
            }
            else
            {
                return FormatUtil.ToIsoWeekTimex(monday);
            }
        }

        public static string GenerateWeekendTimex(DateObject date = default(DateObject))
        {
            if (date.IsDefaultValue())
            {
                return $"{Constants.TimexFuzzyYear}{Constants.DateTimexConnector}{Constants.TimexFuzzyWeek}{Constants.DateTimexConnector}{Constants.TimexWeekend}";
            }
            else
            {
                return $"{FormatUtil.ToIsoWeekTimex(date)}{Constants.DateTimexConnector}{Constants.TimexWeekend}";
            }
        }

        public static string GenerateMonthTimex(DateObject date = default(DateObject))
        {
            if (date.IsDefaultValue())
            {
                return $"{Constants.TimexFuzzyYear}{Constants.DateTimexConnector}{Constants.TimexFuzzyMonth}";
            }
            else
            {
                return $"{date.Year:D4}{Constants.DateTimexConnector}{date.Month:D2}";
            }
        }

        public static string GenerateYearTimex(DateObject date = default(DateObject))
        {
            return date.IsDefaultValue() ? Constants.TimexFuzzyYear : $"{date.Year:D4}";
        }

        public static string GenerateDurationTimex(double number, string unitStr, bool isLessThanDay)
        {
            if (!Constants.TimexBusinessDay.Equals(unitStr))
            {
                if (Constants.DECADE_UNIT.Equals(unitStr))
                {
                    number = number * 10;
                    unitStr = Constants.TimexYear;
                }
                else
                {
                    unitStr = unitStr.Substring(0, 1);
                }
            }

            return Constants.GeneralPeriodPrefix + 
                   (isLessThanDay ? Constants.TimeTimexPrefix : string.Empty) + 
                   number.ToString(CultureInfo.InvariantCulture) + unitStr;
        }

        public static DatePeriodTimexType GetDatePeriodTimexType(string durationTimex)
        {
            DatePeriodTimexType result;

            var minimumUnit = durationTimex.Substring(durationTimex.Length - 1);

            switch (minimumUnit)
            {
                case Constants.TimexYear:
                    result = DatePeriodTimexType.ByYear;
                    break;
                case Constants.TimexMonth:
                    result = DatePeriodTimexType.ByMonth;
                    break;
                case Constants.TimexWeek:
                    result = DatePeriodTimexType.ByWeek;
                    break;
                default:
                    result = DatePeriodTimexType.ByDay;
                    break;
            }

            return result;
        }

        public static DateObject OffsetDateObject(DateObject date, int offset, DatePeriodTimexType timexType)
        {
            DateObject result;

            switch (timexType)
            {
                case DatePeriodTimexType.ByYear:
                    result = date.AddYears(offset);
                    break;
                case DatePeriodTimexType.ByMonth:
                    result = date.AddMonths(offset);
                    break;
                case DatePeriodTimexType.ByWeek:
                    result = date.AddDays(7 * offset);
                    break;
                case DatePeriodTimexType.ByDay:
                    result = date.AddDays(offset);
                    break;
                default:
                    result = date;
                    break;
            }

            return result;
        }

        public static TimeOfDayResolutionResult ParseTimeOfDay(string tod)
        {
            var result = new TimeOfDayResolutionResult();
            switch (tod)
            {
                case Constants.Morning:
                    result.Timex = Constants.Morning;
                    result.BeginHour = 8;
                    result.EndHour = 12;
                    break;
                case Constants.Afternoon:
                    result.Timex = Constants.Afternoon;
                    result.BeginHour = 12;
                    result.EndHour = 16;
                    break;
                case Constants.Evening:
                    result.Timex = Constants.Evening;
                    result.BeginHour = 16;
                    result.EndHour = 20;
                    break;
                case Constants.Daytime:
                    result.Timex = Constants.Daytime;
                    result.BeginHour = 8;
                    result.EndHour = 18;
                    break;
                case Constants.BusinessHour:
                    result.Timex = Constants.BusinessHour;
                    result.BeginHour = 8;
                    result.EndHour = 18;
                    break;
                case Constants.Night:
                    result.Timex = Constants.Night;
                    result.BeginHour = 20;
                    result.EndHour = 23;
                    result.EndMin = 59;
                    break;
               default:
                    break;
            }
         
            return result;
        }
    }
}
