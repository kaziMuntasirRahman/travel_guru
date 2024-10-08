const Input = ({ type, placeholder, setValue }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border-0 border-b-2 focus:border-black outline-none py-[10px] mt-5 placeholder-gray-500 placeholder:text-base placeholder:font-medium focus:placeholder:font-medium transition-all duration-500 text-black text-base font-medium"
      onChange={e => setValue(e.target.value)} />
  );
};

export default Input;