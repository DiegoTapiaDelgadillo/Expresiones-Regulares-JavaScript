import { useState } from "react";
import Input from "../form/input";

export default function TestForm() {
  const [regularExpression, setRegularExpression] = useState("");
  const [stringToEvaluate, setStringToEvaluate] = useState("");
  const [isValid, setIsvalid] = useState("neutro");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (regularExpression === "" || stringToEvaluate === "") {
      setIsvalid("neutro");
      return;
    }
    try {
      const regexPattern = regularExpression.replace(/^\/|\/$/g, "");
      const regex = new RegExp(regexPattern);
      const valid = regex.test(stringToEvaluate);
      if (valid) {
        setIsvalid("valido");
      } else {
        setIsvalid("invalido");
      }
    } catch (event) {
      setIsvalid("invalido");
      console.error(event.message);
    }
  };

  return (
    <div className="pt-4">
      <form onSubmit={handleSubmit}>
        <Input
          placeholder={"Ejemplo: /^[a-zA-Z0-9]+$/"}
          type={"text"}
          name={"Expresión Regular"}
          onChange={(event) => setRegularExpression(event.target.value)}
          value={regularExpression}
          valid={true}
        />
        <Input
          placeholder={"Cadena a evaluar"}
          type={"text"}
          name={"Cadena a Evaluar"}
          onChange={(event) => setStringToEvaluate(event.target.value)}
          value={stringToEvaluate}
          valid={isValid}
        />
        <button
          className={
            "bg-black p-4 w-full text-white rounded-md hover:bg-black/80 ease-in-out duration-300"
          }
        >
          Test
        </button>
      </form>
    </div>
  );
}
