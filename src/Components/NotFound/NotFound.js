import React from 'react'
import { useRouteError } from 'react-router-dom'
import emoji from './sad.jpg'


const NotFound = () => {
    const error = useRouteError()
    console.log(error);
  return (
    <>
      <div className='flex flex-col min-h-[700px] justify-center items-center'>
        <img src={emoji} alt="" />
        <h1 className='text-4xl'>Ops! An Error Ocurred!</h1>
      </div>
    </>
  )
}

export default NotFound;

