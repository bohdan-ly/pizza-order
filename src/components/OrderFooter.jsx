import React from 'react';
import { SIZES } from './PizzaSettings';

export const OrderFooter = () => {
  const [order, setOrder] = React.useState({
    order_details: {},
    user_details: {},
  });

  React.useEffect(() => {
    window.updateSum = () => {
      const toppings = JSON.parse(localStorage.getItem('toppings'));
      const settings = JSON.parse(localStorage.getItem('settings'));
      const userData = JSON.parse(localStorage.getItem('userData'));

      setOrder({
        order_details: {
          toppings,
          ...settings,
        },
        user_details: {
          ...userData,
        },
      });
    };
  }, []);

  const makeOrder = async () => {
    fetch(`http://${window.location.hostname}:8080/orders`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });
  };

  const calcSum = () => {
    let sum = 0;
    const toppings = order.order_details.toppings;
    const settings = order.order_details;

    if (toppings) {
      toppings.forEach((t) => (sum += 2));
    }

    if (settings) {
      switch (settings.size) {
        case SIZES[0].value:
          sum += 10;
          break;
        case SIZES[1].value:
          sum += 20;
          break;
        case SIZES[2].value:
          sum += 30;
          break;
        case SIZES[3].value:
          sum += 40;
          break;
      }

      if (settings.crust) {
        sum += 5;
      }

      if (settings.dough) {
        sum += 5;
      }
    }

    return sum;
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mt-20 w-full">
      <h5 className="text-4xl mr-auto">Total: {calcSum()}$</h5>
      <div className="flex space-x-10">
        <button
          type="submit"
          className="w-full max-w-[300px] text-black bg-transparent border-black hover:bg-red-800 hover:border-red-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm md:text-2xl px-5 py-2.5 text-center"
          onClick={() => {
            const event = new StorageEvent('storage', {});
            window.dispatchEvent(event);
          }}
        >
          Clear
        </button>
        <button
          type="submit"
          className="w-full whitespace-nowrap max-w-[300px] text-sm md:text-2xl text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={() => {
            const event = new StorageEvent('storage', {});
            window.dispatchEvent(event);
            makeOrder();
          }}
        >
          Complete Order
        </button>
      </div>
    </div>
  );
};
