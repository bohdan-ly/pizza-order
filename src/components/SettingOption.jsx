import React from 'react';

export const SettingOption = ({ value, name, groupName, checked, onSelect = () => {} }) => {
  return (
    <div className="flex items-center cursor-pointer" onClick={() => onSelect(value)}>
      <input
        type="radio"
        id={name}
        value={value}
        name={groupName}
        checked={checked}
        onChange={() => {}}
        className="cursor-pointer border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor={name}
        className="whitespace-nowrap block ml-2 text-sm lg:text-lg 2xl:text-2xl font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
      >
        {name}
      </label>
    </div>
  );
};
