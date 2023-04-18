import classNames from 'classnames';
import React from 'react';
import { useMediaLayout } from '../../hooks/useMediaLayout';

export const Card = ({ title, imagePath = '', selected = false, onSelect = () => {} }) => {
  const isMobile = useMediaLayout();

  return (
    <div className="px-4">
      <div
        className={classNames(
          `border rounded-lg shadow flex flex-col items-center p-4 cursor-pointer`,
          {
            'bg-yellow-200': selected,
          },
        )}
        onClick={() => onSelect(title, selected)}
      >
        <div
          className={classNames('flex', {
            'w-[200px] h-[200px]': !isMobile,
            'w-[75px] h-[75px]': isMobile,
          })}
        >
          <img className="rounded-t-lg w-full m-auto" src={imagePath} alt="product image" />
        </div>
        <div className="px-5 pb-5">
          <h5
            className={`font-semibold lg:text-lg 2xl:text-3xl tracking-tight text-black capitalize text-center truncate ${
              selected ? 'text-black' : ''
            }`}
          >
            {title}
          </h5>
        </div>
      </div>
    </div>
  );
};
