import { useState } from "react";
export default function SolutionCard({ solucion }) {
  const [showSolution, setShowSolution] = useState(false);
  const handleShowSolution = () => setShowSolution(!showSolution);
  return (
    <>
      <button
        className={
          "bg-white border  p-4 w-full text-black rounded-md hover:bg-neutral-100 ease-in-out duration-300"
        }
        onClick={handleShowSolution}
      >
        {showSolution ? "Ocultar solución" : "Ver solución"}
      </button>
      {showSolution ? (
        <div className="pt-4 animate-fade-down">
          <div className=" w-full rounded-md bg-neutral-100 p-8 text-neutral-500 text-xl">
            <p className=" text-center">{solucion}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
