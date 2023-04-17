import React from 'react';
import { Card } from './Card';
import { Tabs } from './Tabs';
import Slider from 'react-slick';
import { useMediaLayout } from '../../hooks/useMediaLayout';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const toppings = [
  {
    name: 'anchovies',
    group: 'meat',
  },
  {
    name: 'bacon',
    group: 'meat',
  },
  {
    name: 'chicken',
    group: 'meat',
  },
  {
    name: '"ground beef"',
    group: 'meat',
  },
  {
    name: 'ham',
    group: 'meat',
  },

  {
    name: '"mozzarella cheese"',
    group: 'cheese',
  },
  {
    name: 'classic cheese',
    group: 'cheese',
  },
  {
    name: 'American',
    group: 'cheese',
  },
  {
    name: 'Asiago',
    group: 'cheese',
  },

  {
    name: 'onions',
    group: 'vegetables',
  },
  {
    name: 'olives',
    group: 'vegetables',
  },
  {
    name: 'spinach',
    group: 'vegetables',
  },
  {
    name: 'tomatoes',
    group: 'vegetables',
  },

  {
    name: 'Classic Sausage',
    group: 'sauces',
  },
  {
    name: 'Spicy Sausage',
    group: 'sauces',
  },
  {
    name: 'Apple',
    group: 'sauces',
  },
  {
    name: 'Sweet Italian',
    group: 'sauces',
  },

  // `"mozzarella cheese"`,
  // `mushrooms`,
  // `olives`,
  // `onions`,
  // `pepperoni`,
  // `peppers`,
  // `pineapple`,
  // `salami`,
  // `sausage`,
  // `spinach`,
  // `tomatoes`,
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 3,
};

export const Toppings = () => {
  const isMobile = useMediaLayout();

  const [curCategory, setCurCategory] = React.useState('all');
  const [selectedToppings, setSelectedToppings] = useLocalStorage('toppings', []);

  const toggleTopping = (val, selected) => {
    if (selected) {
      setSelectedToppings(selectedToppings.filter((v) => v !== val));
    } else {
      setSelectedToppings([...selectedToppings, val]);
    }
  };

  return (
    <div className="2xl:pt-10 border-gray-200 dark:border-gray-700">
      <Tabs selected={curCategory} onSelect={setCurCategory} />
      <Slider {...sliderSettings} slidesToShow={isMobile ? 2 : 3} className="flex mt-8 gap-6">
        {toppings
          .filter((c) => curCategory === 'all' || c.group === curCategory)
          .map((card) => (
            <Card
              key={card.name}
              title={card.name}
              selected={selectedToppings.includes(card.name)}
              onSelect={toggleTopping}
            />
          ))}
      </Slider>
    </div>
  );
};
