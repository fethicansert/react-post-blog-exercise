import React from 'react'
import { ThreeCircles } from 'react-loader-spinner';

function Loading() {
  return (
    <main className='loading-page'>
    <ThreeCircles
        visible={true}
        height="120"
        width="120"
        innerCircleColor='#f7c83b'
        middleCircleColor='#2b257e'
        outerCircleColor='#564a94'
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
    />
    </main>
  )
}

export default Loading
