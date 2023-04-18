import React from 'react';

const Input = ({
  className = '',
  name = 'Field',
  type = 'text',
  required = true,
  value = null,
  onChange = () => {},
}) => {
  const id = `floating_${name.replace(' ', '_')}`;
  return (
    <div className={`relative z-0 w-full group ${className}`}>
      <input
        type={type}
        name={id}
        id={id}
        className="block py-2.5 2xl:py-4 px-0 w-full text-sm lg:text-lg 2xl:text-3xl  bg-transparent border-0 border-b-2 border-slate-600 appearance-none dark:text-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=""
        required={required}
        value={value}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className="peer-focus:font-medium absolute text-sm lg:text-lg 2xl:text-3xl text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {name}
      </label>
    </div>
  );
};

export default Input;
