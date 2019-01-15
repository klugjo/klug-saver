import { ICurrency } from '../typings';

// https://gist.github.com/Fluidbyte/2973986
export const CURRENCIES: { [key: string]: ICurrency } = {
  USD: {
    symbol: '$',
    name: 'US Dollar',
    symbolNative: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'USD',
    namePlural: 'US dollars'
  },
  CAD: {
    symbol: 'CA$',
    name: 'Canadian Dollar',
    symbolNative: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'CAD',
    namePlural: 'Canadian dollars'
  },
  EUR: {
    symbol: '€',
    name: 'Euro',
    symbolNative: '€',
    decimalDigits: 2,
    rounding: 0,
    code: 'EUR',
    namePlural: 'euros'
  },
  AED: {
    symbol: 'AED',
    name: 'United Arab Emirates Dirham',
    symbolNative: 'د.إ.‏',
    decimalDigits: 2,
    rounding: 0,
    code: 'AED',
    namePlural: 'UAE dirhams'
  },
  AFN: {
    symbol: 'Af',
    name: 'Afghan Afghani',
    symbolNative: '؋',
    decimalDigits: 0,
    rounding: 0,
    code: 'AFN',
    namePlural: 'Afghan Afghanis'
  },
  ALL: {
    symbol: 'ALL',
    name: 'Albanian Lek',
    symbolNative: 'Lek',
    decimalDigits: 0,
    rounding: 0,
    code: 'ALL',
    namePlural: 'Albanian lekë'
  },
  AMD: {
    symbol: 'AMD',
    name: 'Armenian Dram',
    symbolNative: 'դր.',
    decimalDigits: 0,
    rounding: 0,
    code: 'AMD',
    namePlural: 'Armenian drams'
  },
  ANG: {
    symbol: 'ƒ',
    name: 'Netherlands Antillean guilder',
    symbolNative: 'ƒ',
    decimalDigits: 0,
    rounding: 0,
    code: 'ANG',
    namePlural: 'Netherlands Antillean guilder'
  },
  AOA: {
    symbol: 'Kz',
    name: 'Angolan Kwanza',
    symbolNative: 'Kz',
    decimalDigits: 0,
    rounding: 0,
    code: 'AOA',
    namePlural: 'Angolan Kwanzas'
  },
  ARS: {
    symbol: 'AR$',
    name: 'Argentine Peso',
    symbolNative: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'ARS',
    namePlural: 'Argentine pesos'
  },
  AUD: {
    symbol: 'AU$',
    name: 'Australian Dollar',
    symbolNative: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'AUD',
    namePlural: 'Australian dollars'
  },
  AZN: {
    symbol: 'man.',
    name: 'Azerbaijani Manat',
    symbolNative: 'ман.',
    decimalDigits: 2,
    rounding: 0,
    code: 'AZN',
    namePlural: 'Azerbaijani manats'
  },
  BAM: {
    symbol: 'KM',
    name: 'Bosnia-Herzegovina Convertible Mark',
    symbolNative: 'KM',
    decimalDigits: 2,
    rounding: 0,
    code: 'BAM',
    namePlural: 'Bosnia-Herzegovina convertible marks'
  },
  BDT: {
    symbol: 'Tk',
    name: 'Bangladeshi Taka',
    symbolNative: '৳',
    decimalDigits: 2,
    rounding: 0,
    code: 'BDT',
    namePlural: 'Bangladeshi takas'
  },
  BGN: {
    symbol: 'BGN',
    name: 'Bulgarian Lev',
    symbolNative: 'лв.',
    decimalDigits: 2,
    rounding: 0,
    code: 'BGN',
    namePlural: 'Bulgarian leva'
  },
  BHD: {
    symbol: 'BD',
    name: 'Bahraini Dinar',
    symbolNative: 'د.ب.‏',
    decimalDigits: 3,
    rounding: 0,
    code: 'BHD',
    namePlural: 'Bahraini dinars'
  },
  BIF: {
    symbol: 'FBu',
    name: 'Burundian Franc',
    symbolNative: 'FBu',
    decimalDigits: 0,
    rounding: 0,
    code: 'BIF',
    namePlural: 'Burundian francs'
  },
  BND: {
    symbol: 'BN$',
    name: 'Brunei Dollar',
    symbolNative: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'BND',
    namePlural: 'Brunei dollars'
  },
  BMD: {
    symbol: '$',
    name: 'Bermudian Dollar',
    symbolNative: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'BMD',
    namePlural: 'Bermudian Dollar'
  },
  BOB: {
    symbol: 'Bs',
    name: 'Bolivian Boliviano',
    symbolNative: 'Bs',
    decimalDigits: 2,
    rounding: 0,
    code: 'BOB',
    namePlural: 'Bolivian bolivianos'
  },
  BRL: {
    symbol: 'R$',
    name: 'Brazilian Real',
    symbolNative: 'R$',
    decimalDigits: 2,
    rounding: 0,
    code: 'BRL',
    namePlural: 'Brazilian reals'
  },
  BTN: {
    symbol: 'Nu.',
    name: 'Bhutanese Ngultrum',
    symbolNative: 'Nu.',
    decimalDigits: 2,
    rounding: 0,
    code: 'BTN',
    namePlural: 'Bhutanese Ngultrum'
  },
  BWP: {
    symbol: 'BWP',
    name: 'Botswanan Pula',
    symbolNative: 'P',
    decimalDigits: 2,
    rounding: 0,
    code: 'BWP',
    namePlural: 'Botswanan pulas'
  },
  BYR: {
    symbol: 'BYR',
    name: 'Belarusian Ruble',
    symbolNative: 'BYR',
    decimalDigits: 0,
    rounding: 0,
    code: 'BYR',
    namePlural: 'Belarusian rubles'
  },
  BZD: {
    symbol: 'BZ$',
    name: 'Belize Dollar',
    symbolNative: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'BZD',
    namePlural: 'Belize dollars'
  },
  CDF: {
    symbol: 'CDF',
    name: 'Congolese Franc',
    symbolNative: 'FrCD',
    decimalDigits: 2,
    rounding: 0,
    code: 'CDF',
    namePlural: 'Congolese francs'
  },
  CHF: {
    symbol: 'CHF',
    name: 'Swiss Franc',
    symbolNative: 'CHF',
    decimalDigits: 2,
    rounding: 0.05,
    code: 'CHF',
    namePlural: 'Swiss francs'
  },
  CLP: {
    symbol: 'CL$',
    name: 'Chilean Peso',
    symbolNative: '$',
    decimalDigits: 0,
    rounding: 0,
    code: 'CLP',
    namePlural: 'Chilean pesos'
  },
  CNY: {
    symbol: 'CN¥',
    name: 'Chinese Yuan',
    symbolNative: 'CN¥',
    decimalDigits: 2,
    rounding: 0,
    code: 'CNY',
    namePlural: 'Chinese yuan'
  },
  COP: {
    symbol: 'CO$',
    name: 'Colombian Peso',
    symbolNative: '$',
    decimalDigits: 0,
    rounding: 0,
    code: 'COP',
    namePlural: 'Colombian pesos'
  },
  CRC: {
    symbol: '₡',
    name: 'Costa Rican Colón',
    symbolNative: '₡',
    decimalDigits: 0,
    rounding: 0,
    code: 'CRC',
    namePlural: 'Costa Rican colóns'
  },
  CVE: {
    symbol: 'CV$',
    name: 'Cape Verdean Escudo',
    symbolNative: 'CV$',
    decimalDigits: 2,
    rounding: 0,
    code: 'CVE',
    namePlural: 'Cape Verdean escudos'
  },
  CZK: {
    symbol: 'Kč',
    name: 'Czech Republic Koruna',
    symbolNative: 'Kč',
    decimalDigits: 2,
    rounding: 0,
    code: 'CZK',
    namePlural: 'Czech Republic korunas'
  },
  DJF: {
    symbol: 'Fdj',
    name: 'Djiboutian Franc',
    symbolNative: 'Fdj',
    decimalDigits: 0,
    rounding: 0,
    code: 'DJF',
    namePlural: 'Djiboutian francs'
  },
  DKK: {
    symbol: 'Dkr',
    name: 'Danish Krone',
    symbolNative: 'kr',
    decimalDigits: 2,
    rounding: 0,
    code: 'DKK',
    namePlural: 'Danish kroner'
  },
  DOP: {
    symbol: 'RD$',
    name: 'Dominican Peso',
    symbolNative: 'RD$',
    decimalDigits: 2,
    rounding: 0,
    code: 'DOP',
    namePlural: 'Dominican pesos'
  },
  DZD: {
    symbol: 'DA',
    name: 'Algerian Dinar',
    symbolNative: 'د.ج.‏',
    decimalDigits: 2,
    rounding: 0,
    code: 'DZD',
    namePlural: 'Algerian dinars'
  },
  EEK: {
    symbol: 'Ekr',
    name: 'Estonian Kroon',
    symbolNative: 'kr',
    decimalDigits: 2,
    rounding: 0,
    code: 'EEK',
    namePlural: 'Estonian kroons'
  },
  EGP: {
    symbol: 'EGP',
    name: 'Egyptian Pound',
    symbolNative: 'ج.م.‏',
    decimalDigits: 2,
    rounding: 0,
    code: 'EGP',
    namePlural: 'Egyptian pounds'
  },
  ERN: {
    symbol: 'Nfk',
    name: 'Eritrean Nakfa',
    symbolNative: 'Nfk',
    decimalDigits: 2,
    rounding: 0,
    code: 'ERN',
    namePlural: 'Eritrean nakfas'
  },
  ETB: {
    symbol: 'Br',
    name: 'Ethiopian Birr',
    symbolNative: 'Br',
    decimalDigits: 2,
    rounding: 0,
    code: 'ETB',
    namePlural: 'Ethiopian birrs'
  },
  FKP: {
    symbol: '£',
    name: 'Falkland Island Pound',
    symbolNative: '£',
    decimalDigits: 2,
    rounding: 0,
    code: 'FKP',
    namePlural: 'Falkland Island Pounds'
  },
  GBP: {
    symbol: '£',
    name: 'British Pound Sterling',
    symbolNative: '£',
    decimalDigits: 2,
    rounding: 0,
    code: 'GBP',
    namePlural: 'British pounds sterling'
  },
  GEL: {
    symbol: 'GEL',
    name: 'Georgian Lari',
    symbolNative: 'GEL',
    decimalDigits: 2,
    rounding: 0,
    code: 'GEL',
    namePlural: 'Georgian laris'
  },
  GHS: {
    symbol: 'GH₵',
    name: 'Ghanaian Cedi',
    symbolNative: 'GH₵',
    decimalDigits: 2,
    rounding: 0,
    code: 'GHS',
    namePlural: 'Ghanaian cedis'
  },
  GIP: {
    symbol: '£',
    name: 'Gibraltar Pound',
    symbolNative: '£',
    decimalDigits: 2,
    rounding: 0,
    code: 'GHS',
    namePlural: 'Gibraltar pound'
  },
  GNF: {
    symbol: 'FG',
    name: 'Guinean Franc',
    symbolNative: 'FG',
    decimalDigits: 0,
    rounding: 0,
    code: 'GNF',
    namePlural: 'Guinean francs'
  },
  GTQ: {
    symbol: 'GTQ',
    name: 'Guatemalan Quetzal',
    symbolNative: 'Q',
    decimalDigits: 2,
    rounding: 0,
    code: 'GTQ',
    namePlural: 'Guatemalan quetzals'
  },
  HKD: {
    symbol: 'HK$',
    name: 'Hong Kong Dollar',
    symbolNative: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'HKD',
    namePlural: 'Hong Kong dollars'
  },
  HNL: {
    symbol: 'HNL',
    name: 'Honduran Lempira',
    symbolNative: 'L',
    decimalDigits: 2,
    rounding: 0,
    code: 'HNL',
    namePlural: 'Honduran lempiras'
  },
  HRK: {
    symbol: 'kn',
    name: 'Croatian Kuna',
    symbolNative: 'kn',
    decimalDigits: 2,
    rounding: 0,
    code: 'HRK',
    namePlural: 'Croatian kunas'
  },
  HUF: {
    symbol: 'Ft',
    name: 'Hungarian Forint',
    symbolNative: 'Ft',
    decimalDigits: 0,
    rounding: 0,
    code: 'HUF',
    namePlural: 'Hungarian forints'
  },
  IDR: {
    symbol: 'Rp',
    name: 'Indonesian Rupiah',
    symbolNative: 'Rp',
    decimalDigits: 0,
    rounding: 0,
    code: 'IDR',
    namePlural: 'Indonesian rupiahs'
  },
  ILS: {
    symbol: '₪',
    name: 'Israeli New Sheqel',
    symbolNative: '₪',
    decimalDigits: 2,
    rounding: 0,
    code: 'ILS',
    namePlural: 'Israeli new sheqels'
  },
  INR: {
    symbol: '₹',
    name: 'Indian Rupee',
    symbolNative: 'টকা',
    decimalDigits: 2,
    rounding: 0,
    code: 'INR',
    namePlural: 'Indian rupees'
  },
  IQD: {
    symbol: 'IQD',
    name: 'Iraqi Dinar',
    symbolNative: 'د.ع.‏',
    decimalDigits: 0,
    rounding: 0,
    code: 'IQD',
    namePlural: 'Iraqi dinars'
  },
  IRR: {
    symbol: 'IRR',
    name: 'Iranian Rial',
    symbolNative: '﷼',
    decimalDigits: 0,
    rounding: 0,
    code: 'IRR',
    namePlural: 'Iranian rials'
  },
  ISK: {
    symbol: 'Ikr',
    name: 'Icelandic Króna',
    symbolNative: 'kr',
    decimalDigits: 0,
    rounding: 0,
    code: 'ISK',
    namePlural: 'Icelandic krónur'
  },
  JMD: {
    symbol: 'J$',
    name: 'Jamaican Dollar',
    symbolNative: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'JMD',
    namePlural: 'Jamaican dollars'
  },
  JOD: {
    symbol: 'JD',
    name: 'Jordanian Dinar',
    symbolNative: 'د.أ.‏',
    decimalDigits: 3,
    rounding: 0,
    code: 'JOD',
    namePlural: 'Jordanian dinars'
  },
  JPY: {
    symbol: '¥',
    name: 'Japanese Yen',
    symbolNative: '￥',
    decimalDigits: 0,
    rounding: 0,
    code: 'JPY',
    namePlural: 'Japanese yen'
  },
  KES: {
    symbol: 'с',
    name: 'Kyrgyzstani som',
    symbolNative: 'с',
    decimalDigits: 2,
    rounding: 0,
    code: 'KES',
    namePlural: 'Kyrgyzstani som'
  },
  KGS: {
    symbol: 'Ksh',
    name: 'Kyrgyzstani Som',
    symbolNative: 'Ksh',
    decimalDigits: 2,
    rounding: 0,
    code: 'KES',
    namePlural: 'Kenyan shillings'
  },
  KHR: {
    symbol: 'KHR',
    name: 'Cambodian Riel',
    symbolNative: '៛',
    decimalDigits: 2,
    rounding: 0,
    code: 'KHR',
    namePlural: 'Cambodian riels'
  },
  KMF: {
    symbol: 'CF',
    name: 'Comorian Franc',
    symbolNative: 'FC',
    decimalDigits: 0,
    rounding: 0,
    code: 'KMF',
    namePlural: 'Comorian francs'
  },
  KRW: {
    symbol: '₩',
    name: 'South Korean Won',
    symbolNative: '₩',
    decimalDigits: 0,
    rounding: 0,
    code: 'KRW',
    namePlural: 'South Korean won'
  },
  KWD: {
    symbol: 'KD',
    name: 'Kuwaiti Dinar',
    symbolNative: 'د.ك.‏',
    decimalDigits: 3,
    rounding: 0,
    code: 'KWD',
    namePlural: 'Kuwaiti dinars'
  },
  KYD: {
    symbol: '$',
    name: 'Cayman Islands dollar',
    symbolNative: '$‏',
    decimalDigits: 2,
    rounding: 0,
    code: 'KYD',
    namePlural: 'Cayman Islands dollarS'
  },
  KZT: {
    symbol: 'KZT',
    name: 'Kazakhstani Tenge',
    symbolNative: 'тңг.',
    decimalDigits: 2,
    rounding: 0,
    code: 'KZT',
    namePlural: 'Kazakhstani tenges'
  },
  LAK: {
    symbol: '₭',
    name: 'Lao kip',
    symbolNative: '₭‏',
    decimalDigits: 0,
    rounding: 0,
    code: 'LAK',
    namePlural: 'Lao kip'
  },
  LBP: {
    symbol: 'LB£',
    name: 'Lebanese Pound',
    symbolNative: 'ل.ل.‏',
    decimalDigits: 0,
    rounding: 0,
    code: 'LBP',
    namePlural: 'Lebanese pounds'
  },
  LKR: {
    symbol: 'SLRs',
    name: 'Sri Lankan Rupee',
    symbolNative: 'SL Re',
    decimalDigits: 2,
    rounding: 0,
    code: 'LKR',
    namePlural: 'Sri Lankan rupees'
  },
  LRD: {
    symbol: '$',
    name: 'Liberian Dollar',
    symbolNative: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'LRD',
    namePlural: 'Liberian Dollars'
  },
  LTL: {
    symbol: 'Lt',
    name: 'Lithuanian Litas',
    symbolNative: 'Lt',
    decimalDigits: 2,
    rounding: 0,
    code: 'LTL',
    namePlural: 'Lithuanian litai'
  },
  LVL: {
    symbol: 'Ls',
    name: 'Latvian Lats',
    symbolNative: 'Ls',
    decimalDigits: 2,
    rounding: 0,
    code: 'LVL',
    namePlural: 'Latvian lati'
  },
  LYD: {
    symbol: 'LD',
    name: 'Libyan Dinar',
    symbolNative: 'د.ل.‏',
    decimalDigits: 3,
    rounding: 0,
    code: 'LYD',
    namePlural: 'Libyan dinars'
  },
  MAD: {
    symbol: 'MAD',
    name: 'Moroccan Dirham',
    symbolNative: 'د.م.‏',
    decimalDigits: 2,
    rounding: 0,
    code: 'MAD',
    namePlural: 'Moroccan dirhams'
  },
  MDL: {
    symbol: 'MDL',
    name: 'Moldovan Leu',
    symbolNative: 'MDL',
    decimalDigits: 2,
    rounding: 0,
    code: 'MDL',
    namePlural: 'Moldovan lei'
  },
  MGA: {
    symbol: 'MGA',
    name: 'Malagasy Ariary',
    symbolNative: 'MGA',
    decimalDigits: 0,
    rounding: 0,
    code: 'MGA',
    namePlural: 'Malagasy Ariaries'
  },
  MKD: {
    symbol: 'MKD',
    name: 'Macedonian Denar',
    symbolNative: 'MKD',
    decimalDigits: 2,
    rounding: 0,
    code: 'MKD',
    namePlural: 'Macedonian denari'
  },
  MMK: {
    symbol: 'MMK',
    name: 'Myanma Kyat',
    symbolNative: 'K',
    decimalDigits: 0,
    rounding: 0,
    code: 'MMK',
    namePlural: 'Myanma kyats'
  },
  MOP: {
    symbol: 'MOP$',
    name: 'Macanese Pataca',
    symbolNative: 'MOP$',
    decimalDigits: 2,
    rounding: 0,
    code: 'MOP',
    namePlural: 'Macanese patacas'
  },
  MUR: {
    symbol: 'MURs',
    name: 'Mauritian Rupee',
    symbolNative: 'MURs',
    decimalDigits: 0,
    rounding: 0,
    code: 'MUR',
    namePlural: 'Mauritian rupees'
  },
  MWK: {
    symbol: 'MK',
    name: 'Malawian Kwacha',
    symbolNative: 'MK',
    decimalDigits: 2,
    rounding: 0,
    code: 'MWK',
    namePlural: 'Malawian Kwacha'
  },
  MXN: {
    symbol: 'MX$',
    name: 'Mexican Peso',
    symbolNative: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'MXN',
    namePlural: 'Mexican pesos'
  },
  MYR: {
    symbol: 'RM',
    name: 'Malaysian Ringgit',
    symbolNative: 'RM',
    decimalDigits: 2,
    rounding: 0,
    code: 'MYR',
    namePlural: 'Malaysian ringgits'
  },
  MZN: {
    symbol: 'MTn',
    name: 'Mozambican Metical',
    symbolNative: 'MTn',
    decimalDigits: 2,
    rounding: 0,
    code: 'MZN',
    namePlural: 'Mozambican meticals'
  },
  NAD: {
    symbol: 'N$',
    name: 'Namibian Dollar',
    symbolNative: 'N$',
    decimalDigits: 2,
    rounding: 0,
    code: 'NAD',
    namePlural: 'Namibian dollars'
  },
  NGN: {
    symbol: '₦',
    name: 'Nigerian Naira',
    symbolNative: '₦',
    decimalDigits: 2,
    rounding: 0,
    code: 'NGN',
    namePlural: 'Nigerian nairas'
  },
  NIO: {
    symbol: 'C$',
    name: 'Nicaraguan Córdoba',
    symbolNative: 'C$',
    decimalDigits: 2,
    rounding: 0,
    code: 'NIO',
    namePlural: 'Nicaraguan córdobas'
  },
  NOK: {
    symbol: 'Nkr',
    name: 'Norwegian Krone',
    symbolNative: 'kr',
    decimalDigits: 2,
    rounding: 0,
    code: 'NOK',
    namePlural: 'Norwegian kroner'
  },
  NPR: {
    symbol: 'NPRs',
    name: 'Nepalese Rupee',
    symbolNative: 'नेरू',
    decimalDigits: 2,
    rounding: 0,
    code: 'NPR',
    namePlural: 'Nepalese rupees'
  },
  NZD: {
    symbol: 'NZ$',
    name: 'New Zealand Dollar',
    symbolNative: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'NZD',
    namePlural: 'New Zealand dollars'
  },
  OMR: {
    symbol: 'OMR',
    name: 'Omani Rial',
    symbolNative: 'ر.ع.‏',
    decimalDigits: 3,
    rounding: 0,
    code: 'OMR',
    namePlural: 'Omani rials'
  },
  PAB: {
    symbol: 'B/.',
    name: 'Panamanian Balboa',
    symbolNative: 'B/.',
    decimalDigits: 2,
    rounding: 0,
    code: 'PAB',
    namePlural: 'Panamanian balboas'
  },
  PEN: {
    symbol: 'S/.',
    name: 'Peruvian Nuevo Sol',
    symbolNative: 'S/.',
    decimalDigits: 2,
    rounding: 0,
    code: 'PEN',
    namePlural: 'Peruvian nuevos soles'
  },
  PHP: {
    symbol: '₱',
    name: 'Philippine Peso',
    symbolNative: '₱',
    decimalDigits: 2,
    rounding: 0,
    code: 'PHP',
    namePlural: 'Philippine pesos'
  },
  PKR: {
    symbol: 'PKRs',
    name: 'Pakistani Rupee',
    symbolNative: '₨',
    decimalDigits: 0,
    rounding: 0,
    code: 'PKR',
    namePlural: 'Pakistani rupees'
  },
  PLN: {
    symbol: 'zł',
    name: 'Polish Zloty',
    symbolNative: 'zł',
    decimalDigits: 2,
    rounding: 0,
    code: 'PLN',
    namePlural: 'Polish zlotys'
  },
  PYG: {
    symbol: '₲',
    name: 'Paraguayan Guarani',
    symbolNative: '₲',
    decimalDigits: 0,
    rounding: 0,
    code: 'PYG',
    namePlural: 'Paraguayan guaranis'
  },
  QAR: {
    symbol: 'QR',
    name: 'Qatari Rial',
    symbolNative: 'ر.ق.‏',
    decimalDigits: 2,
    rounding: 0,
    code: 'QAR',
    namePlural: 'Qatari rials'
  },
  RON: {
    symbol: 'RON',
    name: 'Romanian Leu',
    symbolNative: 'RON',
    decimalDigits: 2,
    rounding: 0,
    code: 'RON',
    namePlural: 'Romanian lei'
  },
  RSD: {
    symbol: 'din.',
    name: 'Serbian Dinar',
    symbolNative: 'дин.',
    decimalDigits: 0,
    rounding: 0,
    code: 'RSD',
    namePlural: 'Serbian dinars'
  },
  RUB: {
    symbol: 'RUB',
    name: 'Russian Ruble',
    symbolNative: 'руб.',
    decimalDigits: 2,
    rounding: 0,
    code: 'RUB',
    namePlural: 'Russian rubles'
  },
  RWF: {
    symbol: 'RWF',
    name: 'Rwandan Franc',
    symbolNative: 'FR',
    decimalDigits: 0,
    rounding: 0,
    code: 'RWF',
    namePlural: 'Rwandan francs'
  },
  SAR: {
    symbol: 'SR',
    name: 'Saudi Riyal',
    symbolNative: 'ر.س.‏',
    decimalDigits: 2,
    rounding: 0,
    code: 'SAR',
    namePlural: 'Saudi riyals'
  },
  SBD: {
    symbol: '$',
    name: 'Solomon Islander Dollar',
    symbolNative: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'SBD',
    namePlural: 'Solomon Islander Dollars'
  },
  SDG: {
    symbol: 'SDG',
    name: 'Sudanese Pound',
    symbolNative: 'SDG',
    decimalDigits: 2,
    rounding: 0,
    code: 'SDG',
    namePlural: 'Sudanese pounds'
  },
  SEK: {
    symbol: 'Skr',
    name: 'Swedish Krona',
    symbolNative: 'kr',
    decimalDigits: 2,
    rounding: 0,
    code: 'SEK',
    namePlural: 'Swedish kronor'
  },
  SGD: {
    symbol: 'S$',
    name: 'Singapore Dollar',
    symbolNative: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'SGD',
    namePlural: 'Singapore dollars'
  },
  SLL: {
    symbol: 'Le',
    name: 'Sierra Leonean Leone',
    symbolNative: 'Le',
    decimalDigits: 2,
    rounding: 0,
    code: 'SLL',
    namePlural: 'Sierra Leonean Leone'
  },
  SOS: {
    symbol: 'Ssh',
    name: 'Somali Shilling',
    symbolNative: 'Ssh',
    decimalDigits: 0,
    rounding: 0,
    code: 'SOS',
    namePlural: 'Somali shillings'
  },
  SSP: {
    symbol: '£',
    name: 'South Sudanese pound',
    symbolNative: '£',
    decimalDigits: 2,
    rounding: 0,
    code: 'SSP',
    namePlural: 'South Sudanese pound'
  },
  STD: {
    symbol: 'Db',
    name: 'Sao Tomean Dobra',
    symbolNative: 'Db',
    decimalDigits: 0,
    rounding: 0,
    code: 'STD',
    namePlural: 'Sao Tomean Dobra'
  },
  STN: {
    symbol: 'Db',
    name: 'Sao Tomean Dobra',
    symbolNative: 'Db',
    decimalDigits: 0,
    rounding: 0,
    code: 'STN',
    namePlural: 'Sao Tomean Dobra'
  },
  SYP: {
    symbol: 'SY£',
    name: 'Syrian Pound',
    symbolNative: 'ل.س.‏',
    decimalDigits: 0,
    rounding: 0,
    code: 'SYP',
    namePlural: 'Syrian pounds'
  },
  SZL: {
    symbol: 'L',
    name: 'Swazi Lilangeni',
    symbolNative: 'L‏',
    decimalDigits: 0,
    rounding: 0,
    code: 'SZL',
    namePlural: 'Swazi Lilangeni'
  },
  THB: {
    symbol: '฿',
    name: 'Thai Baht',
    symbolNative: '฿',
    decimalDigits: 2,
    rounding: 0,
    code: 'THB',
    namePlural: 'Thai baht'
  },
  TJS: {
    symbol: 'ЅМ',
    name: 'Tajikistani Somoni',
    symbolNative: 'ЅМ',
    decimalDigits: 2,
    rounding: 0,
    code: 'THB',
    namePlural: 'Tajikistani Somoni'
  },
  TND: {
    symbol: 'DT',
    name: 'Tunisian Dinar',
    symbolNative: 'د.ت.‏',
    decimalDigits: 3,
    rounding: 0,
    code: 'TND',
    namePlural: 'Tunisian dinars'
  },
  TOP: {
    symbol: 'T$',
    name: 'Tongan Paʻanga',
    symbolNative: 'T$',
    decimalDigits: 2,
    rounding: 0,
    code: 'TOP',
    namePlural: 'Tongan paʻanga'
  },
  TRY: {
    symbol: 'TL',
    name: 'Turkish Lira',
    symbolNative: 'TL',
    decimalDigits: 2,
    rounding: 0,
    code: 'TRY',
    namePlural: 'Turkish Lira'
  },
  TTD: {
    symbol: 'TT$',
    name: 'Trinidad and Tobago Dollar',
    symbolNative: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'TTD',
    namePlural: 'Trinidad and Tobago dollars'
  },
  TWD: {
    symbol: 'NT$',
    name: 'New Taiwan Dollar',
    symbolNative: 'NT$',
    decimalDigits: 2,
    rounding: 0,
    code: 'TWD',
    namePlural: 'New Taiwan dollars'
  },
  TZS: {
    symbol: 'TSh',
    name: 'Tanzanian Shilling',
    symbolNative: 'TSh',
    decimalDigits: 0,
    rounding: 0,
    code: 'TZS',
    namePlural: 'Tanzanian shillings'
  },
  UAH: {
    symbol: '₴',
    name: 'Ukrainian Hryvnia',
    symbolNative: '₴',
    decimalDigits: 2,
    rounding: 0,
    code: 'UAH',
    namePlural: 'Ukrainian hryvnias'
  },
  UGX: {
    symbol: 'USh',
    name: 'Ugandan Shilling',
    symbolNative: 'USh',
    decimalDigits: 0,
    rounding: 0,
    code: 'UGX',
    namePlural: 'Ugandan shillings'
  },
  UYU: {
    symbol: '$U',
    name: 'Uruguayan Peso',
    symbolNative: '$',
    decimalDigits: 2,
    rounding: 0,
    code: 'UYU',
    namePlural: 'Uruguayan pesos'
  },
  UZS: {
    symbol: 'UZS',
    name: 'Uzbekistan Som',
    symbolNative: 'UZS',
    decimalDigits: 0,
    rounding: 0,
    code: 'UZS',
    namePlural: 'Uzbekistan som'
  },
  VEF: {
    symbol: 'Bs.F.',
    name: 'Venezuelan Bolívar',
    symbolNative: 'Bs.F.',
    decimalDigits: 2,
    rounding: 0,
    code: 'VEF',
    namePlural: 'Venezuelan bolívars'
  },
  VND: {
    symbol: '₫',
    name: 'Vietnamese Dong',
    symbolNative: '₫',
    decimalDigits: 0,
    rounding: 0,
    code: 'VND',
    namePlural: 'Vietnamese dong'
  },
  VUV: {
    symbol: 'Vt',
    name: 'Ni-Vanuatu Vatu',
    symbolNative: 'Vt',
    decimalDigits: 0,
    rounding: 0,
    code: 'VUV',
    namePlural: 'Ni-Vanuatu Vatu'
  },
  XAF: {
    symbol: 'FCFA',
    name: 'CFA Franc BEAC',
    symbolNative: 'FCFA',
    decimalDigits: 0,
    rounding: 0,
    code: 'XAF',
    namePlural: 'CFA francs BEAC'
  },
  XCD: {
    symbol: '$',
    name: 'East Caribbean Dollar',
    symbolNative: '$',
    decimalDigits: 0,
    rounding: 0,
    code: 'XCD',
    namePlural: 'East Caribbean Dollars'
  },
  XOF: {
    symbol: 'CFA',
    name: 'CFA Franc BCEAO',
    symbolNative: 'CFA',
    decimalDigits: 0,
    rounding: 0,
    code: 'XOF',
    namePlural: 'CFA francs BCEAO'
  },
  XPF: {
    symbol: 'Fr',
    name: 'CFP franc',
    symbolNative: 'Fr',
    decimalDigits: 0,
    rounding: 0,
    code: 'XPF',
    namePlural: 'CFP franc'
  },
  YER: {
    symbol: 'YR',
    name: 'Yemeni Rial',
    symbolNative: 'ر.ي.‏',
    decimalDigits: 0,
    rounding: 0,
    code: 'YER',
    namePlural: 'Yemeni rials'
  },
  ZAR: {
    symbol: 'R',
    name: 'South African Rand',
    symbolNative: 'R',
    decimalDigits: 2,
    rounding: 0,
    code: 'ZAR',
    namePlural: 'South African rand'
  },
  ZMK: {
    symbol: 'ZK',
    name: 'Zambian Kwacha',
    symbolNative: 'ZK',
    decimalDigits: 0,
    rounding: 0,
    code: 'ZMK',
    namePlural: 'Zambian kwachas'
  }
};