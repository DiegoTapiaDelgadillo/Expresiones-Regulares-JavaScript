import "./index.css";

export default function BurgerButton({ isOpen, onChange }) {
  return (
    <label className="burger">
      <input type="checkbox" checked={isOpen} onChange={onChange} />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
}
