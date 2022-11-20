import React,{useState,useEffect} from 'react';

const Square = ({input,onClickHandler}) => {

  return (
    <button className='square' onClick={
      onClickHandler}>{input}</button>
  )
}

export default Square;