import React, { useState } from 'react';
import './App.css';
import List from './components/List';

interface IStates {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IStates["people"]>([
    {
      name: "SpongeBob",
      url: "https://e7.pngegg.com/pngimages/258/854/png-clipart-spongebob-spongebob-thumbnail.png",
      age: 12,
      note: "smile"
    },
    {
      name: "SpongeBob",
      url: "https://e7.pngegg.com/pngimages/258/854/png-clipart-spongebob-spongebob-thumbnail.png",
      age: 12,
      note: "smile"
    }
  ]);

  return (
    <div className="wrapper">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
