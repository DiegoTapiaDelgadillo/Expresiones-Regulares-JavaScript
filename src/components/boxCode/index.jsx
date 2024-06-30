export default function BoxCode({ children }) {
  return (
    <div className=" pt-8">
      <p className=" text-neutral-500">Ejemplo:</p>
      <div className=" w-full rounded-md bg-neutral-100 p-8 text-neutral-500 text-xl">
        {children}
      </div>
    </div>
  );
}
