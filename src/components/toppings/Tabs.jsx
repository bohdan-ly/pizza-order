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
    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400 gap-6">
      {TOPPING_CATEGORIES.map((c, idx) => (
        <li key={c.name} onClick={() => onSelect(c.name)}>
          <a
            href="#"
            className={`inline-block px-4 py-3 lg:text-lg 2xl:text-3xl text-white bg-transparent border rounded-lg capitalize ${
              selected === c.name ? 'bg-indigo-700' : ''
            }`}
            aria-current="page"
          >
            {c.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
