export const EXAMPLES_AFDS = [
  {
    description:
      "AFD que acepta todas las cadenas que inician en a y terminan en z",
    regularExpresion: "a.*z",
    alphabet: "A-Za-z",
    steps: [
      {
        repeatChars: "a-yA-Y",
        nextStateChars: "zZ",
        jumpChars: null,
        jumpState: null,
      },
      {
        repeatChars: "zZ",
        nextStateChars: null,
        jumpChars: "a-yA-Y",
        jumpState: "0",
      },
    ],
  },
  {
    description:
      'AFD que acepta todas las cadenas que contienen la subcadena "abc"',
    alphabet: "A-Za-z",
    regularExpresion: ".*abc.*",
    steps: [
      {
        repeatChars: "b-zB-Z",
        nextStateChars: "aA",
        jumpChars: null,
        jumpState: null,
      },
      {
        repeatChars: null,
        nextStateChars: "bB",
        jumpChars: "aA | c-zC-Z",
        jumpState: "0",
      },
      {
        repeatChars: null,
        nextStateChars: "cC",
        jumpChars: "a-ZA-Z",
        jumpState: "0",
      },
    ],
  },
  {
    description:
      "AFD que acepta todas las cadenas que tienen el mismo numero de 0s y 1s y siguen esta estructura: 010101",
    alphabet: "01",
    regularExpresion: "[01]*",
    steps: [
      {
        repeatChars: null,
        nextStateChars: "0",
        jumpChars: null,
        jumpState: null,
      },
      {
        repeatChars: null,
        nextStateChars: "1",
        jumpChars: null,
        jumpState: null,
      },
      {
        repeatChars: null,
        nextStateChars: null,
        jumpChars: "0",
        jumpState: "1",
      },
    ],
  },
  {
    description:
      "AFD que acepta todas las cadenas que terminen en la subcadena 101",
    alphabet: "01",
    regularExpresion: ".*101",
    steps: [
      {
        repeatChars: "0",
        nextStateChars: "1",
        jumpChars: null,
        jumpState: null,
      },
      {
        repeatChars: "1",
        nextStateChars: "0",
        jumpChars: null,
        jumpState: null,
      },
      {
        repeatChars: null,
        nextStateChars: 1,
        jumpChars: "0",
        jumpState: "0",
      },
      {
        repeatChars: null,
        nextStateChars: null,
        jumpChars: "0,1",
        jumpState: "1,0",
      },
    ],
  },
];
