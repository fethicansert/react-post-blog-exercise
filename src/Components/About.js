import React, { useEffect, useState } from 'react'
import axios from 'axios'
import api from '../Api/axiosApiRequest'
import useIsMounted from '../Hooks/useIsMounted';
function About() {


  useIsMounted("About");

  
  return (
    <main className='about-page'>
        <h1>About</h1>
        <p style={{marginTop: '1rem'}}>Learing React with Post App Project Nandaaaa :)</p>
    </main>
  )
}

export default About

//if fetch does not finished to get data and component unmounted we can cancel request with 
//AbortController in the fetch options after cancell we have CancelError to handle.

// const [data, setData] = useState(null);
// console.log("About Mounted");
// useEffect(() => {
  
//   const controller = new AbortController();
//   let isMounted = true;
//   const fetchAxios =  async () => {
//     try {
//       const res = await api.get('/posts',{
//         signal: controller.signal
//       });
//       console.log(isMounted);
//       if(isMounted){
//         setData(res.data);
//       }
//       if(!isMounted){
//         console.log("isNotMounted");
//       }
//       console.log(res);
//     } catch(err){
//       console.log(err);
//     } finally {

//     }
//   }

//   const cleanUp = () => {
//     isMounted = false;
//     console.log("Clean Up");
//     controller.abort();
//   }
  
//   return cleanUp;
// },[]);
