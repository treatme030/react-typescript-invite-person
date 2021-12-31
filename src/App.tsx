import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
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
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
