import React from 'react';

export const Card = ({ title, image, selected = false, onSelect = () => {} }) => {
  return (
    <div className="px-4">
      <div
        className={`border rounded-lg shadow flex flex-col items-center p-4 cursor-pointer ${
          selected ? 'bg-white' : ''
        }`}
        onClick={() => onSelect(title, selected)}
      >
        <img
          className="p-8 rounded-t-lg w-3/4"
          src="https://dominos.ua/_next/image?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2Fpepp-302x302.webp&w=320&q=75"
          alt="product image"
        />
        <div className="px-5 pb-5">
          <h5
            className={`font-semibold lg:text-lg 2xl:text-3xl tracking-tight text-white capitalize text-center truncate ${
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
