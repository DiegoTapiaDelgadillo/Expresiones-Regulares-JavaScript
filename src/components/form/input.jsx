import ValidMessage from "../validMessage";

export default function Input({
  placeholder,
  type,
  name,
  onChange,
  value,
  valid,
}) {
  return (
    <div className="pb-4">
      <label htmlFor={name} className=" text-neutral-500">
        {name}
        <input
          type={type}
          placeholder={placeholder}
          className={
            valid === "valido"
              ? "w-full border-green-500 p-2 rounded-lg border-2 text-black focus:outline-none ease-in-out duration-300"
              : valid === "invalido"
              ? "w-full border-red-500 p-2 rounded-lg border-2 text-black focus:outline-none ease-in-out duration-300"
              : "w-full p-2 rounded-lg border-2 border-black text-black focus:outline-none ease-in-out duration-300"
          }
          name={name}
          onChange={onChange}
          value={value}
        />
      </label>
      {valid === "valido" && (
        <ValidMessage
          className={"bg-green-100 border-green-500 text-green-600"}
        >
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
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p className=" pl-4">La cadena es valida</p>
        </ValidMessage>
      )}
      {valid === "invalido" && (
        <ValidMessage className={"bg-red-100 border-red-500 text-red-600"}>
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
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <p className=" pl-4">La cadena no es valida</p>
        </ValidMessage>
      )}
    </div>
  );
}
