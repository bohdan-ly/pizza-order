import classNames from 'classnames';
import React from 'react';

const TOPPING_CATEGORIES = [
  {
    name: 'all',
    icon: '',
  },
  {
    name: 'vegetables',
    icon: '',
  },
  {
    name: 'sauces',
    icon: '',
  },
  {
    name: 'cheese',
    icon: '',
  },
  {
    name: 'meat',
    icon: '',
  },
];

export const Tabs = ({ selected, onSelect = () => {} }) => {
  return (
    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 gap-6">
      {TOPPING_CATEGORIES.map((c, idx) => (
        <li key={c.name} onClick={() => onSelect(c.name)}>
          <a
            href="#"
            className={classNames(
              `inline-block px-4 py-3 hover:text-red-500 bg-transparent lg:text-lg 2xl:text-3xl border rounded-lg capitalize transition-all duration-75`,
              {
                'text-black': selected !== c.name,
                'text-red-500': selected === c.name,
              },
            )}
            aria-current="page"
          >
            {c.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
