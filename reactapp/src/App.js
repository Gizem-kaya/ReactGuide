import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';

function App() {

  // We can create multiple of states here with using useState.
  const [count, setCount] = useState(0);
  const [listOfItems, setListOfItems] = useState([]);
  const [message, setMessage] = useState('No not yet.');

  // useEffect is invoked everytime it is rendered.
  useEffect(()=>{
    if(count > 5){
      setMessage('Yee you are above 5.');
    }
  })

  const handleOnClick = () => {

    axios.get('http://localhost:8080/api/pieces')
    .then(res=>{
      setListOfItems(res.data);
      console.log(res.data);
    })
    .catch(error => {
      console.log(error);
    });

  }

  const handleOnPostClick = () => {

    axios.post('http://localhost:8080/api/pieces', {'id': 5, 'name': 'black pawn'})
    .then(res=>{
      console.log(res.data);
    })
    .catch(error => {
      console.log(error);
    });

  }

  return (
    <div className="App">
      <Button variant="contained" onClick={handleOnClick}>Get Data</Button>
      <Button variant="outlined" onClick={handleOnPostClick}>Post Data</Button>
      <br/>
      <Button onClick={()=> setCount(count+1)}>Increment the Count</Button>
      <br/>
      <b>{count}</b>
      <br/>
      <b>{message}</b>
      <br/>
      <ul> {listOfItems.map(element=><li>id: {element.id}, name: {element.name}</li>)}</ul>
    
    </div>
  );

  
}

export default App;
