import React from 'react';

import logo from './logo.svg';
import './App.css';
import Fruit from './Fruit';

function App() {
  return (
    <div>
      <Fruit name="WaterMelon" state="Arkansas"/>
      <Fruit name="Connecticut" state="Asian Pears" />
      <Fruit name="Oranges" state="Florida" />                                      />
      <Fruit name="peaches" state="Georgia" />
    </div>
  );
}

export default App;
