import React from 'react';

interface IProps {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

const List: React.FC<IProps> = ({ people }) => {

  const renderList = (): JSX.Element[] => {
    return people.map(person => {
      const { name, url, age, note } = person;
      return (
        <li className="list">
          <div className="list-header">
            <img src={url} alt="이미지" />
            <h2>{name}</h2>
          </div>
          <p>{age}years old</p>
          <p className="list-note">{note}</p>
        </li>
      )
    })
  }

  return (
    <ul>
      {renderList()}
    </ul>
  );
};

export default List;