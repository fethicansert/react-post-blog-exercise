import React from 'react';
import { MdErrorOutline } from "react-icons/md";

function ErrorPage({errMessage}) {
  return (
    <main className='error-page'>
        <MdErrorOutline color='red' className='error-icon' size={100}/>
        <p style={{'color':' red','textAlign':'center'}}>{errMessage}</p>
    </main>
  )
}

export default ErrorPage
