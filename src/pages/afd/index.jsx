import BodyText from "../../components/textStyle/bodyText";
import Title from "../../components/textStyle/title";
import SubTitle from "../../components/textStyle/subTitle";
import Automata from "../../components/Automata";
import { EXAMPLES_AFDS } from "../../data/afn";

export default function Afd() {
  return (
    <div className="container mx-auto px-4 md:px-24 py-28">
      <Title>Automata Finito Determinista / Expresiones Regulares</Title>
      <br />
      <BodyText>
        Los autómatas finitos no deterministas (AFND) son un tipo de autómata
        finito en teoría de autómatas, una rama de la teoría de la computación.
        Los AFND son similares a los autómatas finitos deterministas (AFD), pero
        con la diferencia clave de que en un AFND, para un estado dado y un
        símbolo de entrada, puede haber múltiples transiciones posibles. Además,
        los AFND pueden incluir transiciones vacías (o transiciones epsilon) que
        permiten al autómata cambiar de estado sin consumir ningún símbolo de la
        entrada.
      </BodyText>
      <div className="my-8 flex flex-col gap-4">
        <SubTitle>Ejemplos de AFD</SubTitle>
        {EXAMPLES_AFDS.map((afd, idx) => (
          <Automata key={`afd-${idx}`} {...afd} />
        ))}
      </div>
      <div className="flex flex-col gap-4 pt-8">
        <SubTitle>Funcionamiento</SubTitle>
        <BodyText>
          En un AFND, en lugar de tener una única trayectoria para procesar una
          cadena de entrada, puede haber múltiples trayectorias posibles. El
          autómata acepta una cadena si al menos una de las trayectorias
          posibles lleva a un estado de aceptación después de consumir toda la
          cadena.
        </BodyText>
        <SubTitle>Relación con las Expresiones Regulares</SubTitle>
        <BodyText>
          Las expresiones regulares y los autómatas finitos (tanto deterministas
          como no deterministas) están estrechamente relacionados y son
          equivalentes en términos de poder de expresión, es decir, ambos
          describen exactamente los lenguajes regulares. La relación entre ellos
          se puede entender de la siguiente manera:
        </BodyText>
        <ul>
          <li>
            <BodyText>
              <strong className="text-black mr-1">
                De Expresiones Regulares a AFND:
              </strong>
              Para cualquier expresión regular, se puede construir un AFND que
              reconozca el mismo lenguaje. Este proceso se realiza mediante la
              construcción inductiva basada en la estructura de la expresión
              regular, utilizando operaciones básicas como la unión,
              concatenación y cierre de Kleene.
            </BodyText>
          </li>
          <li>
            <BodyText>
              <strong className="text-black mr-1">De AFND a AFD:</strong>
              Aunque los AFND son más intuitivos y más fáciles de construir a
              partir de expresiones regulares, los AFD son más fáciles de
              implementar en la práctica. Existe un algoritmo conocido como la
              construcción de subset (o construcción de powerset) que permite
              convertir un AFND en un AFD equivalente.
            </BodyText>
          </li>
          <li>
            <BodyText>
              <strong className="text-black mr-1">
                De AFD a Expresiones Regulares:
              </strong>
              También es posible convertir un AFD en una expresión regular que
              describa el mismo lenguaje, aunque este proceso puede ser más
              complejo y menos directo que las conversiones anteriores.
            </BodyText>
          </li>
        </ul>
        <BodyText>
          En resumen, los autómatas finitos no deterministas proporcionan una
          herramienta poderosa y flexible para representar lenguajes regulares y
          son fundamentales para la teoría de lenguajes formales y autómatas. La
          equivalencia entre AFND, AFD y expresiones regulares asegura que
          cualquier método utilizado para describir un lenguaje regular puede
          ser convertido a cualquiera de las otras dos formas, manteniendo
          siempre la misma capacidad de descripción del lenguaje.
        </BodyText>
      </div>
    </div>
  );
}
