const CustomInput = (props) => {
  const {
    type,
    placeholder,
    label,
    value,
    onChange,
    className,
    name,
    bg = "bg-[#F9F9F9]",
    color = "text-black",
  } = props;
  return (
    <div className="flex flex-col">
      {label && <label className={`${color} b-2`}>{label}</label>}

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border mt-1 border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none transition duration-200 ${className}  ${bg}`}
      />
    </div>
  );
};

export default CustomInput;
