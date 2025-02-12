export default function RadioButton({
  icon,
  title,
  description,
  value,
  selected,
  onChange,
}) {
  return (
    <label
      className={`flex items-center w-full p-4 border rounded-lg cursor-pointer transition-all ${
        selected === value
          ? "border-white bg-gray-600 bg-opacity-10"
          : "border-gray-600 border-opacity-20"
      }`}
      onClick={() => onChange(value)}
    >
      <input
        type="radio"
        name="accountType"
        value={value}
        checked={selected === value}
        onChange={() => onChange(value)}
        className="hidden"
      />
      <div className="mr-4 text-primary">{icon}</div>
      <div className="flex flex-col">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </label>
  );
}
