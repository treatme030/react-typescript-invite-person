import React, { useState } from 'react';
import { IState as Props } from '../App';

interface IProps {
  people: Props["people"],
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {

  const [input, setInput] = useState({
    name: "",
    age: "",
    url: "",
    note: ""
  })

  const { name, age, url, note } = input;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    })
  }

  const handleClick = (): void => {
    if([name, age, url].includes("")){
      return;
    }
    setPeople([
      ...people,
      {
        name: name,
        age: parseInt(age),
        url: url,
        note: note
      }
    ])
    setInput({
      name: "",
      age: "",
      url: "",
      note: ""
    })
  }

  return (
    <div className="list-form">
      <input 
      type="text" 
      placeholder="Name"
      name="name"
      value={name}
      onChange={handleChange}
      />
      <input 
      type="number" 
      placeholder="Age"
      name="age"
      value={age}
      onChange={handleChange}
      />
      <input 
      type="text" 
      placeholder="Image url"
      name="url"
      value={url}
      onChange={handleChange}
      />
      <textarea
      placeholder="Notes"
      name="note"
      value={note}
      onChange={handleChange}
      />
      <button onClick={handleClick}>Add to List</button>
    </div>
  );
};

export default AddToList;