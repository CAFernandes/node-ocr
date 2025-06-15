export class Lib {
  // TEXT AND NUMBERS
  public static readonly onlyletters: RegExp = /[a-zA-Z\u00C0-\u00FF\s]+/g;
  public static readonly text: RegExp = /[\D]+/g;
  public static readonly alpha: RegExp = /[a-zA-Z\s]+/g;
  public static readonly acsii: RegExp = /[\u0000-\u007F]+/g;
  public static readonly alphalower: RegExp = /[a-z]+/g;
  public static readonly alphaupper: RegExp = /[A-Z]+/g;
  public static readonly alphanumeric: RegExp = /[a-zA-Z0-9]+/g;
  public static readonly numeric: RegExp = /[0-9]+/g;
  public static readonly numeric_not_equals: RegExp = /(?!\b(\d)\1+\b)^[0-9]{0,}/g;
  public static readonly integer: RegExp = /[-+]?[0-9]+/g;
  public static readonly float: RegExp = /[-+]?[0-9]*\.?[0-9]+/g;
  public static readonly hexadecimal: RegExp = /[0-9a-fA-F]+/g;

  // DATES AND TIMES
  public static readonly bddate: RegExp = /[0-9]{4}-[0-9]{2}-[0-9]{2}/g;
  public static readonly brdate: RegExp = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/g;
  public static readonly datetimeiso: RegExp = /[0-9]{4}\-[0-9]{2}\-[0-9]{2} [0-9]{2}\:[0-9]{2}\:[0-9]{2}/g;
  public static readonly dateiso: RegExp = /[0-9]{4}\-[0-9]{2}\-[0-9]{2}/g;
  public static readonly timeiso: RegExp = /[0-9]{2}\:[0-9]{2}\:[0-9]{2}/g;
  public static readonly time: RegExp = /[0-9]{2}\:[0-9]{2}\:[0-9]{2}/g;
  public static readonly datetime: RegExp = /[0-9]{2}\/[0-9]{2}\/[0-9]{4} [0-9]{2}\:[0-9]{2}\:[0-9]{2}/g;

  // EMOJIS
  public static readonly emoji: RegExp = /[\u{1F600}-\u{1F64F}]+/u;
  public static readonly emojiandtext: RegExp = /[\u{1F600}-\u{1F64F}a-zA-Z0-9 ;:!\n\t\r_()[\]{}\/\\#@$%&*+-,.]+/ug;

  // DOCUMENTS
  public static readonly rg: RegExp = /[0-9]{2}\.[0-9]{3}\.[0-9]{3}\-[0-9]{1}/g;
  public static readonly cnh: RegExp = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g;
  public static readonly cpf: RegExp = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g;
  public static readonly pis: RegExp = /[0-9]{3}\.[0-9]{5}\.[0-9]{2}\-[0-9]{1}/g;
  public static readonly titulo: RegExp = /[0-9]{10}\-[0-9]{2}/g;
  public static readonly email: RegExp = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g;
  public static readonly cnpj: RegExp = /[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}\-[0-9]{2}/g;
  public static readonly cep: RegExp = /[0-9]{5}\-[0-9]{3}/g;
  public static readonly phone: RegExp = /(?:^\([0]?[1-9]{2}\)|^[0]?[1-9]{2}[\.-\s]?)[9]?[1-9]\d{3}[\.-\s]?\d{4}/g;
  public static readonly cellphone: RegExp = /\([0-9]{2}\) [0-9]{5}\-[0-9]{4}/g;
  public static readonly ddd: RegExp = /(?:[14689][1-9]|2[12478]|3[1-578]|5[1345]|7[134579])/g;
  public static readonly state: RegExp = /\s?(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)\s?/g;
  public static readonly months: RegExp = /(0?[1-9]|1[012])/g;

  public static readonly monthsname: RegExp = /(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/ig;
  public static readonly days: RegExp = /((0?[1-9])|((1|2)[0-9])|30|31)/g;
  public static readonly creditcard: RegExp = /([0-9]{4}\-){3}[0-9]{4}/g;
  public static readonly creditcardjcb: RegExp = /(?:2131|1800|35\d{3})\d{11}/g;

  public static readonly creditcardelo: RegExp = /((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/g;
  public static readonly creditcardvisa: RegExp = /4[0-9]{12}(?:[0-9]{3})?/g;
  public static readonly creditcardamex: RegExp = /3[47][0-9]{13}/g;
  public static readonly creditcardaura: RegExp = /5078\d{2}(?:\d{2})?\d{11}/g;
  public static readonly creditcardhiper: RegExp = /637095\d{10}/g;
  public static readonly creditcarddiners: RegExp = /3(?:0[0-5]|[68][0-9])[0-9]{11}/g;
  public static readonly creditcarddiscover: RegExp = /6(?:011|5[0-9]{2})[0-9]{12}/g;
  public static readonly creditcardhipercard: RegExp = /(606282\d{10}(\d{3})?)|(3841\d{15})/g;
  public static readonly creditcardmastercard: RegExp = /5[1-5][0-9]{14}/g;

  // INTERNET
  public static readonly ip: RegExp = /([0-9]{1,3}\.){3}[0-9]{1,3}/g;
  public static readonly ipv4: RegExp = /([0-9]{1,3}\.){3}[0-9]{1,3}/g;
  public static readonly ipv6: RegExp = /([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}/g;
  public static readonly url: RegExp = /(http|ftp|https):\/{2}([\w+?\.\w+])+([a-zA-Z0-9\~\!\@\#\$\%\^\&\*\(\)_\-\=\+\\\/\?\.\:\;\'\,]*)?/g;

  // MISCELLANEOUS
  public static readonly hexcolor: RegExp = /#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/g;
  public static readonly slug: RegExp = /[a-z0-9]+(?:-[a-z0-9]+)*/g;

  public static readonly FILTER = [
    'rg',
    'cnh',
    'cpf',
    'pis',
    'titulo',
    'email',
    'cnpj',
    'cep',
    'phone',
    'cellphone',
    'creditcard',
    'creditcardjcb',
    'creditcardelo',
    'creditcardvisa',
    'creditcardamex',
    'creditcardaura',
    'creditcardhiper',
    'creditcarddiners',
    'creditcarddiscover',
    'creditcardhipercard',
    'creditcardmastercard',
    'url',
  ]
}
