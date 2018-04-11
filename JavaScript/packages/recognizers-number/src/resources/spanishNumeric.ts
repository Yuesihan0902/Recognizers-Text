// ------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
// ------------------------------------------------------------------------------

import { BaseNumbers } from "./baseNumbers";
export namespace SpanishNumeric {
	export const LangMarker = 'Spa';
	export const HundredsNumberIntegerRegex = `(cuatrocient[ao]s|trescient[ao]s|seiscient[ao]s|setecient[ao]s|ochocient[ao]s|novecient[ao]s|doscient[ao]s|quinient[ao]s|(?<!por\\s+)(cien(to)?))`;
	export const RoundNumberIntegerRegex = `(mil millones|mil|millones|mill[oó]n|billones|bill[oó]n|trillones|trill[oó]n|cuatrillones|cuatrill[oó]n|quintillones|quintill[oó]n|sextillones|sextill[oó]n|septillones|septill[oó]n)`;
	export const ZeroToNineIntegerRegex = `(cuatro|cinco|siete|nueve|cero|tres|seis|ocho|dos|un[ao]?)`;
	export const TenToNineteenIntegerRegex = `(diecisiete|diecinueve|diecis[eé]is|dieciocho|catorce|quince|trece|diez|once|doce)`;
	export const TwentiesIntegerRegex = `(veinticuatro|veinticinco|veintisiete|veintinueve|veintitr[eé]s|veintis[eé]is|veintiocho|veintid[oó]s|ventiun[ao]|veinti[uú]n[oa]?|veinte)`;
	export const TensNumberIntegerRegex = `(cincuenta|cuarenta|treinta|sesenta|setenta|ochenta|noventa)`;
	export const NegativeNumberTermsRegex = `^[.]`;
	export const NegativeNumberSignRegex = `^(${NegativeNumberTermsRegex}\\s+).*`;
	export const DigitsNumberRegex = `\\d|\\d{1,3}(\\.\\d{3})`;
	export const BelowHundredsRegex = `((${TenToNineteenIntegerRegex}|${TwentiesIntegerRegex}|(${TensNumberIntegerRegex}(\\s+y\\s+${ZeroToNineIntegerRegex})?))|${ZeroToNineIntegerRegex})`;
	export const BelowThousandsRegex = `(${HundredsNumberIntegerRegex}(\\s+${BelowHundredsRegex})?|${BelowHundredsRegex})`;
	export const SupportThousandsRegex = `((${BelowThousandsRegex}|${BelowHundredsRegex})\\s+${RoundNumberIntegerRegex}(\\s+${RoundNumberIntegerRegex})?)`;
	export const SeparaIntRegex = `(${SupportThousandsRegex}(\\s+${SupportThousandsRegex})*(\\s+${BelowThousandsRegex})?|${BelowThousandsRegex})`;
	export const AllIntRegex = `(${SeparaIntRegex}|mil(\\s+${BelowThousandsRegex})?)`;
	export const PlaceHolderPureNumber = `\\b`;
	export const PlaceHolderDefault = `\\D|\\b`;
	export const NumbersWithPlaceHolder = (placeholder: string) => { return `(((?<!\\d+\\s*)-\\s*)|(?<=\\b))\\d+(?!(,\\d+[a-zA-Z]))(?=${placeholder})`; }
	export const NumbersWithSuffix = `(((?<=\\W|^)-\\s*)|(?<=\\b))\\d+\\s*(k|M|T|G)(?=\\b)`;
	export const RoundNumberIntegerRegexWithLocks = `(?<=\\b)(${DigitsNumberRegex})+\\s+${RoundNumberIntegerRegex}(?=\\b)`;
	export const NumbersWithDozenSuffix = `(((?<=\\W|^)-\\s*)|(?<=\\b))\\d+\\s+docenas?(?=\\b)`;
	export const AllIntRegexWithLocks = `((?<=\\b)${AllIntRegex}(?=\\b))`;
	export const AllIntRegexWithDozenSuffixLocks = `(?<=\\b)(((media\\s+)?\\s+docena)|(${AllIntRegex}\\s+(y|con)\\s+)?(${AllIntRegex}\\s+docenas?))(?=\\b)`;
	export const SimpleRoundOrdinalRegex = `(mil[eé]simo|millon[eé]sim[oa]|billon[eé]sim[oa]|trillon[eé]sim[oa]|cuatrillon[eé]sim[oa]|quintillon[eé]sim[oa]|sextillon[eé]sim[oa]|septillon[eé]sim[oa])`;
	export const OneToNineOrdinalRegex = `(primer[oa]|segund[oa]|tercer[oa]|cuart[oa]|quint[oa]|sext[oa]|s[eé]ptim[oa]|octav[oa]|noven[oa])`;
	export const TensOrdinalRegex = `(nonag[eé]sim[oa]|octog[eé]sim[oa]|septuag[eé]sim[oa]|sexag[eé]sim[oa]|quincuag[eé]sim[oa]|cuadrag[eé]sim[oa]|trig[eé]sim[oa]|vig[eé]sim[oa]|d[eé]cim[oa])`;
	export const HundredOrdinalRegex = `(cent[eé]sim[oa]|ducent[eé]sim[oa]|tricent[eé]sim[oa]|cuadringent[eé]sim[oa]|quingent[eé]sim[oa]|sexcent[eé]sim[oa]|septingent[eé]sim[oa]|octingent[eé]sim[oa]|noningent[eé]sim[oa])`;
	export const SpecialUnderHundredOrdinalRegex = `(und[eé]cim[oa]|duod[eé]cimo|decimoctav[oa])`;
	export const UnderHundredOrdinalRegex = `(((${TensOrdinalRegex}(\\s)?)?${OneToNineOrdinalRegex})|${TensOrdinalRegex}|${SpecialUnderHundredOrdinalRegex})`;
	export const UnderThousandOrdinalRegex = `(((${HundredOrdinalRegex}(\\s)?)?${UnderHundredOrdinalRegex})|${HundredOrdinalRegex})`;
	export const OverThousandOrdinalRegex = `((${AllIntRegex})([eé]sim[oa]))`;
	export const ComplexOrdinalRegex = `((${OverThousandOrdinalRegex}(\\s)?)?${UnderThousandOrdinalRegex}|${OverThousandOrdinalRegex})`;
	export const SufixRoundOrdinalRegex = `((${AllIntRegex})(${SimpleRoundOrdinalRegex}))`;
	export const ComplexRoundOrdinalRegex = `(((${SufixRoundOrdinalRegex}(\\s)?)?${ComplexOrdinalRegex})|${SufixRoundOrdinalRegex})`;
	export const AllOrdinalRegex = `${ComplexOrdinalRegex}|${SimpleRoundOrdinalRegex}|${ComplexRoundOrdinalRegex}`;
	export const OrdinalSuffixRegex = `(?<=\\b)(\\d*(1r[oa]|2d[oa]|3r[oa]|4t[oa]|5t[oa]|6t[oa]|7m[oa]|8v[oa]|9n[oa]|0m[oa]|11[vm][oa]|12[vm][oa]))(?=\\b)`;
	export const OrdinalNounRegex = `(?<=\\b)${AllOrdinalRegex}(?=\\b)`;
	export const SpecialFractionInteger = `(((${AllIntRegex})i?(${ZeroToNineIntegerRegex})|(${AllIntRegex}))a?v[oa]s?)`;
	export const FractionNotationRegex = `(((?<=\\W|^)-\\s*)|(?<=\\b))\\d+[/]\\d+(?=(\\b[^/]|$))`;
	export const FractionNotationWithSpacesRegex = `(((?<=\\W|^)-\\s*)|(?<=\\b))\\d+\\s+\\d+[/]\\d+(?=(\\b[^/]|$))`;
	export const FractionNounRegex = `(?<=\\b)(${AllIntRegex}\\s+((y|con)\\s+)?)?(${AllIntRegex})(\\s+((y|con)\\s)?)(((${AllOrdinalRegex})s?|(${SpecialFractionInteger})|(${SufixRoundOrdinalRegex})s?)|medi[oa]s?|tercios?)(?=\\b)`;
	export const FractionNounWithArticleRegex = `(?<=\\b)(${AllIntRegex}\\s+(y\\s+)?)?(un|un[oa])(\\s+)((${AllOrdinalRegex})|(${SufixRoundOrdinalRegex})|(y\\s+)?medi[oa]s?)(?=\\b)`;
	export const FractionPrepositionRegex = `(?<=\\b)(?<numerator>(${AllIntRegex})|((?<!\\.)\\d+))\\s+sobre\\s+(?<denominator>(${AllIntRegex})|((\\d+)(?!\\.)))(?=\\b)`;
	export const AllPointRegex = `((\\s+${ZeroToNineIntegerRegex})+|(\\s+${AllIntRegex}))`;
	export const AllFloatRegex = `${AllIntRegex}(\\s+(coma|con))${AllPointRegex}`;
	export const DoubleDecimalPointRegex = (placeholder: string) => { return `(((?<!\\d+\\s*)-\\s*)|((?<=\\b)(?<!\\d+,)))\\d+,\\d+(?!(,\\d+))(?=${placeholder})`; }
	export const DoubleWithoutIntegralRegex = (placeholder: string) => { return `(?<=\\s|^)(?<!(\\d+)),\\d+(?!(,\\d+))(?=${placeholder})`; }
	export const DoubleWithMultiplierRegex = `(((?<!\\d+\\s*)-\\s*)|((?<=\\b)(?<!\\d+\\,)))\\d+,\\d+\\s*(K|k|M|G|T)(?=\\b)`;
	export const DoubleWithRoundNumber = `(((?<!\\d+\\s*)-\\s*)|((?<=\\b)(?<!\\d+\\,)))\\d+,\\d+\\s+${RoundNumberIntegerRegex}(?=\\b)`;
	export const DoubleAllFloatRegex = `((?<=\\b)${AllFloatRegex}(?=\\b))`;
	export const DoubleExponentialNotationRegex = `(((?<!\\d+\\s*)-\\s*)|((?<=\\b)(?<!\\d+,)))(\\d+(,\\d+)?)e([+-]*[1-9]\\d*)(?=\\b)`;
	export const DoubleCaretExponentialNotationRegex = `(((?<!\\d+\\s*)-\\s*)|((?<=\\b)(?<!\\d+,)))(\\d+(,\\d+)?)\\^([+-]*[1-9]\\d*)(?=\\b)`;
	export const NumberWithPrefixPercentage = `(${BaseNumbers.NumberReplaceToken})(\\s*)(%(?!${BaseNumbers.NumberReplaceToken})|(por ciento|por cien)\\b)`;
	export const CurrencyRegex = `(((?<=\\W|^)-\\s*)|(?<=\\b))\\d+\\s*(B|b|m|t|g)(?=\\b)`;
	export const DecimalSeparatorChar = ',';
	export const FractionMarkerToken = 'sobre';
	export const NonDecimalSeparatorChar = '.';
	export const HalfADozenText = 'seis';
	export const WordSeparatorToken = 'y';
	export const WrittenDecimalSeparatorTexts = [ 'coma','con' ];
	export const WrittenGroupSeparatorTexts = [ 'punto' ];
	export const WrittenIntegerSeparatorTexts = [ 'y' ];
	export const WrittenFractionSeparatorTexts = [ 'con' ];
	export const HalfADozenRegex = `media\\s+docena`;
	export const DigitalNumberRegex = `((?<=\\b)(mil|millones|mill[oó]n|billones|bill[oó]n|trillones|trill[oó]n|docenas?)(?=\\b))|((?<=(\\d|\\b))(k|t|m|g)(?=\\b))`;
	export const CardinalNumberMap: ReadonlyMap<string, number> = new Map<string, number>([["cero", 0],["un", 1],["una", 1],["uno", 1],["dos", 2],["tres", 3],["cuatro", 4],["cinco", 5],["seis", 6],["siete", 7],["ocho", 8],["nueve", 9],["diez", 10],["once", 11],["doce", 12],["docena", 12],["docenas", 12],["trece", 13],["catorce", 14],["quince", 15],["dieciseis", 16],["dieciséis", 16],["diecisiete", 17],["dieciocho", 18],["diecinueve", 19],["veinte", 20],["ventiuna", 21],["ventiuno", 21],["veintiun", 21],["veintiún", 21],["veintiuno", 21],["veintiuna", 21],["veintidos", 22],["veintidós", 22],["veintitres", 23],["veintitrés", 23],["veinticuatro", 24],["veinticinco", 25],["veintiseis", 26],["veintiséis", 26],["veintisiete", 27],["veintiocho", 28],["veintinueve", 29],["treinta", 30],["cuarenta", 40],["cincuenta", 50],["sesenta", 60],["setenta", 70],["ochenta", 80],["noventa", 90],["cien", 100],["ciento", 100],["doscientas", 200],["doscientos", 200],["trescientas", 300],["trescientos", 300],["cuatrocientas", 400],["cuatrocientos", 400],["quinientas", 500],["quinientos", 500],["seiscientas", 600],["seiscientos", 600],["setecientas", 700],["setecientos", 700],["ochocientas", 800],["ochocientos", 800],["novecientas", 900],["novecientos", 900],["mil", 1000],["millon", 1000000],["millón", 1000000],["millones", 1000000],["billon", 1000000000000],["billón", 1000000000000],["billones", 1000000000000],["trillon", 1000000000000000000],["trillón", 1000000000000000000],["trillones", 1000000000000000000]]);
	export const SimpleOrdinalNumberMap: ReadonlyMap<string, number> = new Map<string, number>([["primero", 1],["primera", 1],["primer", 1],["segundo", 2],["segunda", 2],["medio", 2],["media", 2],["tercero", 3],["tercera", 3],["tercer", 3],["tercio", 3],["cuarto", 4],["cuarta", 4],["quinto", 5],["quinta", 5],["sexto", 6],["sexta", 6],["septimo", 7],["septima", 7],["octavo", 8],["octava", 8],["noveno", 9],["novena", 9],["decimo", 10],["decima", 10],["undecimo", 11],["undecima", 11],["duodecimo", 12],["duodecima", 12],["decimotercero", 13],["decimotercera", 13],["decimocuarto", 14],["decimocuarta", 14],["decimoquinto", 15],["decimoquinta", 15],["decimosexto", 16],["decimosexta", 16],["decimoseptimo", 17],["decimoseptima", 17],["decimoctavo", 18],["decimoctava", 18],["decimonoveno", 19],["decimonovena", 19],["vigesimo", 20],["vigesima", 20],["trigesimo", 30],["trigesima", 30],["cuadragesimo", 40],["cuadragesima", 40],["quincuagesimo", 50],["quincuagesima", 50],["sexagesimo", 60],["sexagesima", 60],["septuagesimo", 70],["septuagesima", 70],["octogesimo", 80],["octogesima", 80],["nonagesimo", 90],["nonagesima", 90],["centesimo", 100],["centesima", 100],["ducentesimo", 200],["ducentesima", 200],["tricentesimo", 300],["tricentesima", 300],["cuadringentesimo", 400],["cuadringentesima", 400],["quingentesimo", 500],["quingentesima", 500],["sexcentesimo", 600],["sexcentesima", 600],["septingentesimo", 700],["septingentesima", 700],["octingentesimo", 800],["octingentesima", 800],["noningentesimo", 900],["noningentesima", 900],["milesimo", 1000],["milesima", 1000],["millonesimo", 1000000],["millonesima", 1000000],["billonesimo", 1000000000000],["billonesima", 1000000000000]]);
	export const PrefixCardinalDictionary: ReadonlyMap<string, number> = new Map<string, number>([["dos", 2],["tres", 3],["cuatro", 4],["cinco", 5],["seis", 6],["siete", 7],["ocho", 8],["nueve", 9],["diez", 10],["once", 11],["doce", 12],["trece", 13],["catorce", 14],["quince", 15],["dieciseis", 16],["dieciséis", 16],["diecisiete", 17],["dieciocho", 18],["diecinueve", 19],["veinte", 20],["ventiuna", 21],["veintiun", 21],["veintiún", 21],["veintidos", 22],["veintitres", 23],["veinticuatro", 24],["veinticinco", 25],["veintiseis", 26],["veintisiete", 27],["veintiocho", 28],["veintinueve", 29],["treinta", 30],["cuarenta", 40],["cincuenta", 50],["sesenta", 60],["setenta", 70],["ochenta", 80],["noventa", 90],["cien", 100],["doscientos", 200],["trescientos", 300],["cuatrocientos", 400],["quinientos", 500],["seiscientos", 600],["setecientos", 700],["ochocientos", 800],["novecientos", 900]]);
	export const SufixOrdinalDictionary: ReadonlyMap<string, number> = new Map<string, number>([["milesimo", 1000],["millonesimo", 1000000],["billonesimo", 1000000000000]]);
	export const RoundNumberMap: ReadonlyMap<string, number> = new Map<string, number>([["mil", 1000],["milesimo", 1000],["millon", 1000000],["millón", 1000000],["millones", 1000000],["millonesimo", 1000000],["billon", 1000000000000],["billón", 1000000000000],["billones", 1000000000000],["billonesimo", 1000000000000],["trillon", 1000000000000000000],["trillón", 1000000000000000000],["trillones", 1000000000000000000],["trillonesimo", 1000000000000000000],["docena", 12],["docenas", 12],["k", 1000],["m", 1000000],["g", 1000000000],["t", 1000000000000]]);
}
