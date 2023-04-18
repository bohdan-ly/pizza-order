import classNames from 'classnames';
import React from 'react';

export const SettingOption = ({ value, label, groupName, checked, onSelect = () => {} }) => {
  return (
    <label
      htmlFor={label}
      className={classNames(
        'cursor-pointer border-gray-300 focus:ring-2 focus:ring-blue-300 flex items-center px-4 py-3 lg:text-lg 2xl:text-3xl text-black border rounded-lg capitalize ',
        {
          'bg-transparent': !checked,
          'bg-yellow-200': checked,
        },
      )}
    >
      <input
        type="radio"
        id={label}
        checked={checked}
        name={groupName}
        className="hidden"
        onChange={() => {
          if (typeof onSelect === 'function') {
            onSelect(value);
          }
        }}
      />
      <span className="check" />
      <span className="whitespace-nowrap block ml-2 text-sm lg:text-lg 2xl:text-2xl font-medium cursor-pointer">
        {label}
      </span>
    </label>
  );
};
