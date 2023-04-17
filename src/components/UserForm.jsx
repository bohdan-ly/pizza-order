import React from 'react';
import Input from './shared/Input';
import { useLocalStorage } from '../hooks/useLocalStorage';

// type="tel"
// pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"

export const UserForm = () => {
  const [userData, setUserData] = useLocalStorage('userData', {
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const handleChangeUserData = (key, value) => {
    setUserData({ ...userData, [key]: value });
  };

  return (
    <div className="flex justify-start">
      <form className="p-8 border rounded-lg px-6 2xl:p-16 space-y-10 2xl:space-y-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-6 2xl:gap-20">
          <Input
            name="Name"
            value={userData.name}
            onChange={(e) => handleChangeUserData('name', e.target.value)}
          />
          <Input
            name="Phone number"
            type="tel"
            value={userData.phone}
            onChange={(e) => handleChangeUserData('phone', e.target.value)}
          />
        </div>
        <Input
          name="Email"
          value={userData.email}
          onChange={(e) => handleChangeUserData('email', e.target.value)}
        />
        <Input
          name="Address"
          value={userData.address}
          onChange={(e) => handleChangeUserData('address', e.target.value)}
        />
      </form>
    </div>
  );
};
