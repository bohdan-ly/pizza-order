import React from 'react';

export const OrderFooter = () => {
  return (
    <div className="flex w-full space-x-10 mt-20 justify-end">
      <button
        type="submit"
        className="w-full max-w-[300px] text-white bg-transparent border-white hover:bg-red-800 hover:border-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm md:text-2xl px-5 py-2.5 text-center"
        onClick={() => {
          const event = new StorageEvent('storage', {});
          window.dispatchEvent(event);
        }}
      >
        Clear
      </button>
      <button
        type="submit"
        className="w-full max-w-[300px] text-sm md:text-2xl text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Complete Order
      </button>
    </div>
  );
};
