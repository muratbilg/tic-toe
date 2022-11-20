import React,{useState} from 'react';
import './static/style/main.css';
import Board from './Board'
import Status from './Status'
const App = () => {
const [status,setStatus] = useState('Next player: X')

    return (
      <div className='container'>
        <Board setStatus={setStatus}/>
        <div>
        <Status status={status}/>
        </div>
      </div>
    )
}

export default App