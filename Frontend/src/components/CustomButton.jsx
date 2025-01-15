const CustomButton = ({
    type = "outlined", 
    textCase = "uppercase", 
    text,
    onClick,
    className,
    textColor = "text-[#9A3131]", 
    bgColor = "#9A3131",
    borderColor = "border-blue-500", 
  }) => {
    
    const buttonStyles =
      type === "outlined"
        ? `${borderColor} border-[1px] ${textColor} bg-transparent hover:${bgColor} hover:${textColor.replace("text-", "text-white")}`
        : `${bgColor} ${textColor} hover:${bgColor.replace("bg-", "bg-opacity-80")} hover:${textColor.replace("text-", "text-white")}`;
  
    
    const textTransform =
      textCase === "capitalize" ? "capitalize" : "uppercase";
  
    return (
      <button
        onClick={onClick}
        className={`px-6 py-[0.4rem] rounded-md text-sm  transition duration-200 ${buttonStyles} ${textTransform} ${className}`}
      >
        {text}
      </button>
    );
  };
  
  export default CustomButton;
  