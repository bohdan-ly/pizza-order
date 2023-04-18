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
    imagePath: './src/assets/meet.png',
  },
  {
    name: 'bacon',
    group: 'meat',
    imagePath: './src/assets/meet.png',
  },
  {
    name: 'chicken',
    group: 'meat',
    imagePath: './src/assets/meet.png',
  },
  {
    name: '"ground beef"',
    group: 'meat',
    imagePath: './src/assets/meet.png',
  },
  {
    name: 'ham',
    group: 'meat',
    imagePath: './src/assets/meet.png',
  },

  {
    name: '"mozzarella cheese"',
    group: 'cheese',
    imagePath: './src/assets/cheese.png',
  },
  {
    name: 'classic cheese',
    group: 'cheese',
    imagePath: './src/assets/cheese.png',
  },
  {
    name: 'American',
    group: 'cheese',
    imagePath: './src/assets/cheese.png',
  },
  {
    name: 'Asiago',
    group: 'cheese',
    imagePath: './src/assets/cheese.png',
  },

  {
    name: 'onions',
    group: 'vegetables',
    imagePath: './src/assets/vegetables.png',
  },
  {
    name: 'olives',
    group: 'vegetables',
    imagePath: './src/assets/vegetables.png',
  },
  {
    name: 'spinach',
    group: 'vegetables',
    imagePath: './src/assets/vegetables.png',
  },
  {
    name: 'tomatoes',
    group: 'vegetables',
    imagePath: './src/assets/vegetables.png',
  },

  {
    name: 'Classic Sausage',
    group: 'sauces',
    imagePath: './src/assets/sauce.png',
  },
  {
    name: 'Spicy Sausage',
    group: 'sauces',
    imagePath: './src/assets/sauce.png',
  },
  {
    name: 'Apple',
    group: 'sauces',
    imagePath: './src/assets/sauce.png',
  },
  {
    name: 'Sweet Italian',
    group: 'sauces',
    imagePath: './src/assets/sauce.png',
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
              imagePath={card.imagePath}
              selected={selectedToppings.includes(card.name)}
              onSelect={toggleTopping}
            />
          ))}
      </Slider>
    </div>
  );
};
