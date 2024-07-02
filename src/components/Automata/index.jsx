import clsx from "clsx";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiArrowULeftDownLight } from "react-icons/pi";
import useToggle from "../../hooks/useToggle";

export default function Automata() {
  const { state: hideAfd, toggle: toggleShow, willChange } = useToggle(false);
  console.log("Automata ~ willChange:", willChange);

  return (
    <div className="flex flex-col gap-8 items-center w-full h-fit relative p-8 shadow-md rounded-md border border-solid border-gray-100">
      {hideAfd ? (
        <div
          className={clsx(
            "absolute transition-opacity animate-fade-in inset-0 w-full flex h-full bg-black items-center z-40 justify-center",
            {
              "animate-fade-out": willChange,
            }
          )}
        >
          <button
            className="w-fit px-4 py-2 bg-gray-200 rounded-md"
            onClick={toggleShow}
          >
            Mostrar AFD
          </button>
        </div>
      ) : null}
      <div className="flex transition-opacity w-full flex-wrap gap-4 justify-center">
        {Array.from({ length: 10 }).map((_, idx) => (
          <div
            key={`q-${idx}`}
            className={clsx("w-fit flex items-end gap-4 h-fit relative", {
              "pr-7": idx < 9,
            })}
          >
            <div className="flex flex-col gap-1 items-center">
              <span className="text-sm">a, b,c </span>
              <PiArrowULeftDownLight className="text-3xl" />
              <span className="flex p-3 rounded-full items-center justify-center shadow-sm bg-gray-200 aspect-square">
                {`q${idx}`}
              </span>
            </div>

            {idx < 9 ? (
              <FaArrowRightLong className="absolute bottom-3 right-0" />
            ) : null}
          </div>
        ))}
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
