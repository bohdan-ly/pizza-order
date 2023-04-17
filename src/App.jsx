import { useState } from 'react';
import { UserForm } from './components/UserForm';
import { PizzaSettings } from './components/PizzaSettings';
import { OrderFooter } from './components/OrderFooter';

function App() {
  return (
    <div className="app flex w-full justify-center flex-col p-8 md:p-20 items-center md:items-start">
      <UserForm />
      <PizzaSettings />
      <OrderFooter />
    </div>
  );
}

export default App;
