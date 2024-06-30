import clsx from "clsx";
export default function ValidMessage({ className, children }) {
  return (
    <div className=" pt-4 animate-fade-down">
      <div className={clsx("p-4 rounded-md flex items-center", className)}>
        {children}
      </div>
    </div>
  );
}
