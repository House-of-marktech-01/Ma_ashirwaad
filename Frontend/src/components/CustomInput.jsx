const CustomInput = ({
  type,
  placeholder,
  label,
  value,
  onChange,
  className,
}) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="text-gray-900 text-[0.95rem] mb-2">{label}</label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none transition duration-200 ${className} bg-[#F9F9F9]`}
      />
    </div>
  );
};

export default CustomInput;
