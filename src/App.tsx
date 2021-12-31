import React, { useState } from 'react';
import './App.css';

interface People {
    name: string,
    age: number,
    url: string,
    note?: string
}

function App() {
  const [people, setPeople] = useState<People[]>([]);

  return (
    <div className="App">
     <h1>People Invited to my Party</h1>
    </div>
  );
}

export default App;
