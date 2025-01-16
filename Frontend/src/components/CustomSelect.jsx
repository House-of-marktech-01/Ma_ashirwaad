const CustomSelect = (props) => {
  const { options, value, onChange, className, label,name } = props
  return (
    <div className="flex flex-col">
      {label && <label className="text-gray-900 text-[0.95rem] mb-2">{label}</label>}
      <select
        value={value}
        name={name}
        onChange={onChange}
        className={`border bg-[#F9F9F9] border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none transition duration-200 ${className}`}
      >
        {options.map((option, index) => (
          <option  key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
