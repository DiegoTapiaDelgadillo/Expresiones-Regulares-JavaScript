import BodyText from "../../components/textStyle/bodyText";
import Title from "../../components/textStyle/title";
import SubTitle from "../../components/textStyle/subTitle";
import TestForm from "../../components/testForm";
import RegularExpressionText from "../../components/regularExpressionsText";
import useScrollTop from "../../hooks/useScrollTop";
import { REGEX_SYMBOLS } from "../../data/regex";

export default function Home() {
  useScrollTop();
  return (
    <div className="container mx-auto px-4 md:px-24 py-28">
      <Title>Expresiones Regulares JavaScript Test</Title>
      <BodyText>
        Las expresiones regulares son patrones poderosos que se utilizan para
        hacer coincidir, buscar y manipular texto. En JavaScript, las
        expresiones regulares son una característica incorporada que le permite
        realizar tareas complejas de procesamiento de texto con facilidad. Se
        utilizan comúnmente para tareas como validación de formularios,
        extracción de datos y manipulación de cadenas.
      </BodyText>
      <div className=" pt-8">
        <SubTitle>Sintaxis y Patrones de Expresiones Regulares</SubTitle>
        <BodyText>
          Las expresiones regulares se componen de una combinación de caracteres
          literales y metacaracteres especiales que definen el patrón de
          búsqueda. Algunos metacaracteres comunes y sus significados incluyen:
        </BodyText>
      </div>
      <div className=" pt-8">
        <ul className=" list-disc text-base">
          {REGEX_SYMBOLS.map(({ symbol, description }) => (
            <li className="text-neutral-500" key={symbol.symbol}>
              <code className="font-bold text-xl text-black">{symbol}</code> -{" "}
              {description}
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-8">
        <SubTitle>Patrones de Expresión Regular Comunes</SubTitle>
        <BodyText>
          Las expresiones regulares se pueden utilizar para hacer coincidir una
          amplia variedad de patrones, desde coincidencias de texto simples
          hasta patrones complejos. Aquí hay algunos ejemplos comunes:
        </BodyText>
      </div>
      <div className=" pt-8">
        <SubTitle>Validar Correo Eléctronico</SubTitle>
        <RegularExpressionText
          regexText={"/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$/"}
        />
        <BodyText>Ejemplo: ejemplo@dominio.com</BodyText>
      </div>
      <div className=" pt-8">
        <SubTitle>Validar Numero Télefonico</SubTitle>
        <RegularExpressionText regexText={"/^[0-9]{10}$/"} />
        <BodyText>Ejemplo: 1234567890</BodyText>
      </div>
      <div className=" pt-8">
        <SubTitle>Validar Numero URL</SubTitle>
        <RegularExpressionText
          regexText={"/^(https?://)?([da-z.-]+).([a-z.]{2,6})([/w .-]*)*/?$/"}
        />
        <BodyText>Ejemplo: http://google.com</BodyText>
      </div>
      <div className=" pt-8">
        <SubTitle>Validar Dirección IP</SubTitle>
        <RegularExpressionText
          regexText={
            "/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/"
          }
        />
        <BodyText>Ejemplo: 192.168.1.1</BodyText>
      </div>
      <div className=" pt-8">
        <BodyText>
          Prueba las expresiones regulares anteriores en el siguinete campo de
          texto.
        </BodyText>
      </div>
      <div className="pt-8">
        <SubTitle>Test Expresión Regular JavaScript</SubTitle>
        <BodyText>
          Escribe una expresión regular en JavaScript en el siguinete campo de
          texto y valida si las cadenas son validas.
        </BodyText>
        <TestForm />
      </div>
    </div>
  );
}
