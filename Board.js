import React ,{useState,useEffect}  from 'react';
import Square from './Square'

const Board = ({setStatus}) => {
const [turn,setTurn] = useState('X')
const [isReset,setIsReset] = useState(false)
const [squares,setSquares] = useState(['','','','','','','','',''])
const buttonsArray = []

useEffect(() => {
  setStatus(`Next player : ${turn}`)
},[turn])
useEffect(()=>{ checkGameFinished()},[squares])
// Checks for the win condition in rows
        const checkRow = () => {
         
            let ans = false;
            for (let i = 0; i < 9; i += 3) {
                ans |= (squares[i] === squares[i + 1] && 
                squares[i] === squares[i + 2] && 
                squares[i] !== '')
            }
            return ans;
        }
        // Checks for the win condition in cols
        const checkCol = () => {
            let ans = false;
            for (let i = 0; i < 3; i++) {
                ans |= (squares[i] === squares[i + 3] && 
                squares[i] === squares[i + 6] && 
                squares[i] !== '')
            }
            return ans;
        }
        // Checks for the win condition in diagonals
        const checkDiagonal = () => {
            return ((squares[0] === squares[4] && 
            squares[0] === squares[8] && squares[0] !== '') || 
            (squares[2] === squares[4] && squares[2] === squares[6] && 
            squares[2] !== ''));
        }
  
        // Checks if at all a win condition is present
        const checkWin = () => {
            return (checkRow() || checkCol() || checkDiagonal());
        }
  
        // Checks for a tie
        const checkTie = () => {
            let count = 0;
            squares.forEach((cell) => {
                if (cell !== '') {
                    count++;
                }
            })
            return count === 9;
        }
const checkGameFinished = () => {
        // Setting the winner in case of a win
        if (checkWin()) {
            setStatus(turn === 'X' ? "Player O Wins!" : 
            "Player X Wins!");
        } else if (checkTie()) {
  
            // Setting the winner to tie in case of a tie
            setStatus("It's a Tie!");
        }
}
const buttons = () => {
  for (let index = 0; index < 9; index++) {
    buttonsArray[index] = <Square className='square' key={index} onClickHandler={()=>clickHandler(index)} input={squares[index]}/> 
  }
  return buttonsArray
}
const clickHandler = (index) => {
  if(isReset)
    setIsReset(false)

  const tempSquares = [...squares]
  tempSquares[index] = turn;
  setSquares([...tempSquares])
  setTurn(prevState => prevState === 'X' ? setTurn('O') : setTurn('X'))  
}  
  return (
  <>
    <div className='board'>
    {buttons()}
    </div>
    <button onClick={()=>{
      setSquares(['','','','','','','','','']);
      setTurn('X')}}>RESET</button>
  </>
  )
}

export default Board;