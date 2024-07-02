export const REGEX_SYMBOLS = [
  {
    symbol: ".",
    description: "Coincide con cualquier carácter excepto el salto de línea",
  },
  {
    symbol: "\\d",
    description: "Coincide con cualquier dígito (0-9)",
  },
  {
    symbol: "\\w",
    description:
      "Coincide con cualquier carácter de palabra (a-z, A-Z, 0-9, _)",
  },
  {
    symbol: "\\s",
    description:
      "Coincide con cualquier carácter de espacio en blanco (espacio, tabulación, salto de línea, etc.)",
  },
  {
    symbol: "^",
    description: "Coincide con el inicio de una cadena",
  },
  {
    symbol: "$",
    description: "Coincide con el final de una cadena",
  },
  {
    symbol: "*",
    description:
      "Coincide con cero o más ocurrencias del carácter o grupo anterior",
  },
  {
    symbol: "+",
    description:
      "Coincide con una o más ocurrencias del carácter o grupo anterior",
  },
  {
    symbol: "?",
    description:
      "Coincide con cero o una ocurrencia del carácter o grupo anterior",
  },
  {
    symbol: "[ ]",
    description: "Coincide con cualquier carácter dentro de los corchetes",
  },
  {
    symbol: "( )",
    description: "Agrupa múltiples caracteres juntos",
  },
];
