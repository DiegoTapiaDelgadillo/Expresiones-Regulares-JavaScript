import clsx from "clsx";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { PiArrowULeftDownLight } from "react-icons/pi";
import useToggle from "../../hooks/useToggle";

export default function Automata({
  steps,
  description,
  regularExpresion,
  alphabet,
}) {
  const { state: hideAfd, toggle: toggleShow, willChange } = useToggle(true);

  return (
    <div className="flex flex-col gap-8 items-center w-full h-fit relative p-8 shadow-md rounded-md border border-solid border-gray-100">
      {hideAfd ? (
        <div
          className={clsx(
            "absolute transition-opacity text-center animate-fade-in inset-0 w-full flex flex-col gap-4 h-full bg-black items-center z-40 justify-center",
            {
              "animate-fade-out": willChange,
            }
          )}
        >
          <span className="text-white">{description}</span>
          <span className="font-semibold text-white">
            Expresion Regular: {`/${regularExpresion}/`} <br />
            {`Alfabeto: [${alphabet}]`}
          </span>
          <button
            className="w-fit px-4 py-2 bg-gray-200 rounded-md"
            onClick={toggleShow}
          >
            Mostrar AFD
          </button>
        </div>
      ) : null}
      <span className="font-semibold text-center">
        Expresion Regular: {`/${regularExpresion}/`} <br />
        {`Alfabeto: [${alphabet}]`}
      </span>
      <div className="flex transition-opacity w-full flex-wrap gap-4 justify-center items-start">
        {steps.map(
          ({ repeatChars, nextStateChars, jumpChars, jumpState }, idx) => {
            const isLastState = idx === steps.length - 1;
            return (
              <div
                key={`q-${idx}`}
                className={clsx("w-fit flex items-end gap-4 h-fit relative", {
                  "pr-7": !isLastState,
                  "pl-7": idx === 0,
                })}
              >
                {idx === 0 ? (
                  <div className="absolute bottom-3 left-0 flex flex-col">
                    <FaArrowRightLong />
                  </div>
                ) : null}

                <div className="flex flex-col gap-1 items-center">
                  <span className="text-sm">{repeatChars ?? "ε"}</span>
                  <PiArrowULeftDownLight className="text-3xl" />
                  <span
                    className={clsx(
                      "flex p-3 rounded-full items-center justify-center shadow-sm bg-gray-200 aspect-square",
                      {
                        "shadow-lg border-2 border-solid border-blue-400":
                          isLastState,
                      }
                    )}
                  >
                    {`q${idx}`}
                  </span>
                  {jumpChars ? (
                    <div className="flex flex-col gap-1 items-center">
                      <span className="text-sm">{jumpChars}</span>
                      <div className="flex gap-1 items-center">
                        <FaArrowLeftLong />

                        <span className="text-sm">
                          {jumpState
                            .split(",")
                            .map((state) => `q${state}`)
                            .join(", ")}
                        </span>
                      </div>
                    </div>
                  ) : null}
                </div>
                {!isLastState ? (
                  <div
                    className={clsx(
                      "absolute right-0 flex flex-col",
                      jumpChars ? "bottom-[60px]" : "bottom-3"
                    )}
                  >
                    <span className="text-sm">{nextStateChars}</span>
                    <FaArrowRightLong />
                  </div>
                ) : null}
              </div>
            );
          }
        )}
      </div>
      <button
        className="w-fit px-4 py-2 bg-gray-200 rounded-md"
        onClick={toggleShow}
      >
        Ocultar AFD
      </button>
    </div>
  );
}
