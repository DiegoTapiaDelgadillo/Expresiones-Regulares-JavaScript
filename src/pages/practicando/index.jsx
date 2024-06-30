import Title from "../../components/textStyle/title";
import BodyText from "../../components/textStyle/bodyText";
import SubTitle from "../../components/textStyle/subTitle";
import TestForm from "../../components/testForm";
import SolutionCard from "../../components/solutionCard";
import useScrollTop from "../../hooks/useScrollTop";
const DATAEJERCICIOS = [
  {
    title: "Validar una fecha en formato DD/MM/YYYY:",
    description:
      "Escriba una expresión regular para validar fechas en formato DD/MM/YYYY.",
    testCases: [
      {
        input: "31/12/2021",
        output: "true",
      },
      {
        input: "31/12/21",
        output: "false",
      },
      {
        input: "31-12-2021",
        output: "false",
      },
    ],
    solucion: String.raw`/^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/(19|20)\d\d$/`,
  },
  {
    title:
      "Validar una contraseña (mínimo 8 caracteres, al menos una letra y un número):",
    description:
      "Escriba una expresión regular para validar contraseñas con al menos 8 caracteres, una letra y un número.",
    testCases: [
      {
        input: "Password1",
        output: "true",
      },
      {
        input: "Pass1",
        output: "false",
      },
      {
        input: "password",
        output: "false",
      },
    ],
    solucion: String.raw`/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/`,
  },
  {
    title: "Validar un código postal (5 dígitos):",
    description:
      "Escriba una expresión regular para validar códigos postales de 5 dígitos.",
    testCases: [
      {
        input: "12345",
        output: "true",
      },
      {
        input: "1234",
        output: "false",
      },
      {
        input: "123456",
        output: "false",
      },
    ],
    solucion: String.raw`/^\d{5}$/`,
  },
  {
    title:
      "Validar un nombre de usuario (entre 3 y 16 caracteres, solo letras y números):",
    description:
      "Escriba una expresión regular para validar nombres de usuario con entre 3 y 16 caracteres, solo letras y números.",
    testCases: [
      {
        input: "usuario123",
        output: "true",
      },
      {
        input: "us",
        output: "false",
      },
      {
        input: "usuario_123",
        output: "false",
      },
    ],
    solucion: String.raw`/^[a-zA-Z0-9]{3,16}$/`,
  },
  {
    title: "Validar un número de tarjeta de crédito (16 dígitos):",
    description:
      "Escriba una expresión regular para validar números de tarjeta de crédito de 16 dígitos.",
    testCases: [
      {
        input: "1234567812345678",
        output: "true",
      },
      {
        input: "1234-5678-1234-5678",
        output: "false",
      },
      {
        input: "123456781234567",
        output: "false",
      },
    ],
    solucion: String.raw`/^\d{16}$/`,
  },
  {
    title: "Validar un código hexadecimal (color):",
    description:
      "Escriba una expresión regular para validar códigos de color hexadecimales (# seguido de 3 o 6 dígitos hexadecimales).",
    testCases: [
      {
        input: "#a3c113",
        output: "true",
      },
      {
        input: "#A3C",
        output: "true",
      },
      {
        input: "a3c113",
        output: "false",
      },
    ],
    solucion: String.raw`/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/`,
  },
  {
    title: "Validar un número de placa de automóvil (formato: ABC-1234):",
    description:
      "Escriba una expresión regular para validar números de placa de automóvil en el formato ABC-1234.",
    testCases: [
      {
        input: "ABC-1234",
        output: "true",
      },
      {
        input: "AB-1234",
        output: "false",
      },
      {
        input: "ABC1234",
        output: "false",
      },
    ],
    solucion: String.raw`/^[A-Z]{3}-\d{4}$/`,
  },
  {
    title: "Validar un código de producto (formato: ABC-12345-XYZ):",
    description:
      "Escriba una expresión regular para validar códigos de producto en el formato ABC-12345-XYZ.",
    testCases: [
      {
        input: "ABC-12345-XYZ",
        output: "true",
      },
      {
        input: "ABC-1234-XYZ",
        output: "false",
      },
      {
        input: "AB-12345-XYZ",
        output: "false",
      },
    ],
    solucion: String.raw`/^[A-Z]{3}-\d{5}-[A-Z]{3}$/`,
  },
];

export default function Practicando() {
  useScrollTop();
  return (
    <div className="container mx-auto px-4 md:px-24 py-28">
      <Title>Practicando Expresiones Regulares JavaScript</Title>
      <BodyText>
        Pruebe sus expresiones regulares en esta herramienta interactiva.
      </BodyText>
      <div className=" py-8">
        <SubTitle>Ejercicios</SubTitle>
      </div>
      <div className=" w-full grid grid-cols-1 text-xl gap-4">
        {DATAEJERCICIOS.map((ejercicio, index) => (
          <div key={index} className=" border p-4 border-black rounded-md">
            <p className=" font-bold">{ejercicio.title}</p>
            <p className=" text-neutral-500">{ejercicio.description}</p>
            {ejercicio.testCases.map((testCase, index) => (
              <div key={index} className=" py-2">
                <p>
                  Entrada: <span className=" font-bold">{testCase.input}</span>
                </p>
                <p>
                  Salida esperada:{" "}
                  <span className=" font-bold">{testCase.output}</span>
                </p>
              </div>
            ))}
            <TestForm />
            <div className=" py-2"></div>
            <SolutionCard solucion={ejercicio.solucion} />
          </div>
        ))}
      </div>
    </div>
  );
}
