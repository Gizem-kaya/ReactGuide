import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  // We caan create multiple of states here with using useState.
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('red');
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
      console.log(res.data);
    })
    .catch(error => {
      console.log(error);
    });

  }

  const handleOnPostClick = () => {

    axios.post('http://localhost:8080/api/pieces', {"title": "black pawn"})
    .then(res=>{
      console.log(res.data);
    })
    .catch(error => {
      console.log(error);
    });

  }

  return (
    <div className="App">
      <button onClick={handleOnClick}>Get Data</button>
      <button onClick={handleOnPostClick}>Post Data</button>
      <br/>
      <button onClick={()=> setCount(count+1)}>Increment the Count</button>
      <br/>
      <b>{count}</b>
      <br/>
      <b>{message}</b>
    </div>
  );

  
}

export default App;
