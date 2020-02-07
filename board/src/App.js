import React, {useState} from 'react';
import BoardHeader from './components/BoardHeader/BoardHeader';
import BoardField from './components/BoardField/BoardField';

function App() {
  let stikersLS = localStorage.getItem('stikers');
  stikersLS = JSON.parse(stikersLS);
  const [stikers, addStikers] = useState(stikersLS || [{ id: 1, text: 'Learn hooks' }]);
  
  const handleAddStiker = () => {
    const newStiker = {
      id: Date.now(), 
      text: '',      
    }
    addStikers([
      ...stikers,
      newStiker,
    ]);
    localStorage.setItem('stikers', JSON.stringify([...stikers, newStiker]));    
  }
  const handleDeleteStiker = (id) => {
    const newStikers = stikers.filter(stiker => stiker.id !== id); 
    addStikers(newStikers);
    localStorage.setItem('stikers', JSON.stringify(newStikers));
  }
  const handleChangeStiker = (value, id) => {
    const newStikers = stikers.map(stiker => {
      return stiker.id === id ? {...stiker, text: value } : stiker;
    });
    addStikers(newStikers);
    localStorage.setItem('stikers', JSON.stringify(newStikers));
  }

  return (
    <div style={containerStyle}>
      <BoardHeader handleAdd={handleAddStiker}/>
      <BoardField 
        stikers={stikers} 
        handleDelete={handleDeleteStiker} 
        handleChange={handleChangeStiker}
      />
    </div>
  );
}

const containerStyle = {
  maxWidth: '80%',
  margin: '0 auto',
  backgroundColor: 'lightgrey',
}

export default App;
