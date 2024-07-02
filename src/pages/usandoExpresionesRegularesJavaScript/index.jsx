import { Link } from "react-router-dom";
import BoxCode from "../../components/boxCode";
import BodyText from "../../components/textStyle/bodyText";
import SubTitle from "../../components/textStyle/subTitle";
import Title from "../../components/textStyle/title";
import useScrollTop from "../../hooks/useScrollTop";

export default function UsandoREJ() {
  useScrollTop();
  return (
    <div className="container mx-auto px-4 md:px-24 py-28">
      <Title>Usando Expresiones Regulares en JavaScript</Title>
      <BodyText>
        En JavaScript, puede crear una expresión regular utilizando el
        constructor RegExp o encerrando el patrón entre barras diagonales
        /pattern/. Una vez que tenga una expresión regular, puede usar el método
        test() para verificar si una cadena coincide con el patrón.
      </BodyText>
      <BoxCode>
        <p>const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]4$/;</p>
        <p>const email = "example@example.com";</p>
        <p>console.log(emailRegex.test(email));</p>
        <p>// Salida: true</p>
      </BoxCode>
      <div className=" pt-8">
        <SubTitle>Usando el Método test() y el Objeto "new RegExp"</SubTitle>
        <BodyText>
          Para utilizar el método test(), primero debe crear un objeto de
          expresión regular. Puede hacer esto usando la sintaxis/patrón/ o
          creando un objeto newRegExp.
        </BodyText>
        <BoxCode>
          <p>// Usando el /pattern/ syntax</p>
          <p>const regex = /hello/;</p>
          <br />
          <p>// Creando un objeto new RegExp</p>
          <p>const regex = new RegExp('hello');</p>
          <br />
          <p>// Testeando el patron</p>
          <p>console.log(regex.test('Hello, world!')); // Salida: true</p>
          <p>console.log(regex.test('Goodbye, world!')); // Salida: false</p>
        </BoxCode>
        <div className="pt-8"></div>
        <BodyText>
          En el ejemplo anterior, la expresión regular /hola/ se utiliza para
          comprobar si la cadena "¡Hola, mundo!" contiene la palabra "hola". El
          método test() devuelve verdadero porque el patrón se encuentra en la
          cadena.
        </BodyText>
      </div>
      <div className=" pt-8">
        <SubTitle>Modificando el Patrón</SubTitle>
        <BodyText>
          Las expresiones regulares se pueden hacer más complejas mediante el
          uso de varios caracteres especiales y modificadores. Por ejemplo,
          puede utilizar el modificador i para que la búsqueda no distinga entre
          mayúsculas y minúsculas:
        </BodyText>
        <BoxCode>
          <p>const regex = /hello/i;</p>
          <p>console.log(regex.test('Hello, world!')); // Salida: true</p>
          <p>console.log(regex.test('Goodbye, world!')); // Salida: false</p>
        </BoxCode>
        <div className="pt-8">
          <BodyText>
            También puedes usar los anclajes ^ y $ para hacer coincidir el
            principio y el final de la cadena, respectivamente:
          </BodyText>
          <BoxCode>
            <p>const regex = /^hello$/;</p>
            <p>console.log(regex.test('hello')); // Salida: true</p>
            <p>console.log(regex.test('Hello, world!')); // Salida: false</p>
          </BoxCode>
          <div className="pt-8"></div>

          <BodyText>
            Las expresiones regulares pueden volverse bastante complejas, pero
            el método test() proporciona una manera simple y eficiente de
            verificar patrones en su código JavaScript.
          </BodyText>
        </div>
      </div>
      <div className=" py-8 w-full flex items-center justify-end">
        <Link
          className=" flex hover:text-black/50 ease-in-out duration-300"
          to={"/practicando-expresiones-regulares-javaScript"}
        >
          <p>Hora de Practicar</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
