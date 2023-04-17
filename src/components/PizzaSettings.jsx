import React from 'react';
import { SettingOption } from './SettingOption';
import { Toppings } from './toppings';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const SIZES = [
  {
    name: 'Standard size',
    value: 'standard',
  },
  {
    name: 'Large',
    value: 'large',
  },
  {
    name: 'ExtraLarge',
    value: 'extra-large',
  },
  {
    name: 'XXLarge',
    value: 'xxl',
  },
];

export const DOUGHS = [
  {
    name: 'Thick crust',
    value: 'thick',
  },
  {
    name: 'Thin',
    value: 'thin',
  },
];

export const CRUST = [
  {
    name: 'Philadelphia',
    value: 'philadelphia',
  },
  {
    name: 'Hot-Dog Crust',
    value: 'hot-dog',
  },
];

export const PizzaSettings = () => {
  const [settings, setSettings] = useLocalStorage('settings', {
    size: null,
    dough: null,
    crust: null,
  });

  const handleChangeSettings = (key, value) => {
    setSettings({ ...settings, [key]: value });
  };

  return (
    <div className="flex flex-col space-y-8 mt-8 w-full">
      <div className="flex flex-col">
        <h5 className="lg:text-lg 2xl:text-2xl">Size</h5>
        <fieldset className="w-full md:w-1/2 flex flex-wrap gap-6">
          {SIZES.map((option) => (
            <SettingOption
              {...option}
              key={option.value}
              groupName={'size'}
              checked={settings.size === option.value}
              onSelect={(val) => handleChangeSettings('size', val)}
            />
          ))}
          <legend className="sr-only">Size</legend>
        </fieldset>
      </div>
      <div className="flex flex-col">
        <h5 className="lg:text-lg 2xl:text-2xl">Dough</h5>
        <fieldset className="w-full md:w-1/2 flex flex-wrap gap-6">
          {DOUGHS.map((option) => (
            <SettingOption
              {...option}
              key={option.value}
              groupName={'dough'}
              checked={settings.dough === option.value}
              onSelect={(val) => {
                if (settings.dough === val) {
                  return handleChangeSettings('dough', null);
                }
                handleChangeSettings('dough', val);
              }}
            />
          ))}
          <legend className="sr-only">Dough</legend>
        </fieldset>
      </div>
      <div className="flex flex-col">
        <h5 className="lg:text-lg 2xl:text-2xl">Crust</h5>
        <fieldset className="w-full md:w-1/2 flex flex-wrap gap-6">
          {CRUST.map((option) => (
            <SettingOption
              {...option}
              key={option.value}
              groupName={'crust'}
              checked={settings.crust === option.value}
              onSelect={(val) => {
                if (settings.dough === val) {
                  return handleChangeSettings('crust', null);
                }
                handleChangeSettings('crust', val);
              }}
            />
          ))}
          <legend className="sr-only">Crust</legend>
        </fieldset>
      </div>
      <Toppings />
    </div>
  );
};
