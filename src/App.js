import Header from './Components/Header.js'; 
import Nav from './Components/Nav.js';       
import Footer from './Components/Footer.js'  
import Home from './Components/Home.js'     
import NewPost from './Components/NewPost.js'
import PostPage from './Components/PostPage.js'   
import About from './Components/About.js'
import Missing from './Components/Missing.js'
import Loading from './Components/Loading.js';
import { postData } from './/Data/PostData.js';
import ErrorPage from './Components/ErrorPage.js';
import UpdatePost from './Components/UpdatePost.js';
import { BrowserRouter, Link, Route, Routes, useNavigate, useOutlet} from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { format, set }  from 'date-fns'; 
import  axios  from 'axios';
import apiRequest from './Api/apiRequest.js';
import api from './Api/axiosApiRequest.js';
import { v4 as uuidv4 } from 'uuid';
import useWindowSize  from './Hooks/useWindowSizeHook.js';
import useAxiosApi from './Hooks/useAxiosApiHook.js';
import useSearch  from './Hooks/useSearchHook.js'
import { DataProvider } from './Context/DataContext.js' 


function App() {
  //format funtionunu kullaan YYYY mm dd ogren
  //PUT and PATCH farkli ..?
  //Add Is loading after not error
  //how import work
  //export and export default diff
  //updatePost nasil calisir inceleme
 
  return (
    <div className="App">
        <DataProvider>
          <Header title={'JJK POSTS'} />
          <Nav />
            <Routes>
            <Route exact path='/' element={ <Home /> }/>
            <Route exact path='/post' element={ <NewPost /> }/>
            <Route path='/post/:id' element= { <PostPage /> }/>
            <Route path='/update/:id' element = { <UpdatePost /> }/>
            <Route path='/About' element= { <About /> } />
            <Route path='*' element={ <Missing /> } />
            </Routes>
          <Footer />
        </DataProvider>
      
    </div>
  );
}

export default App;

// Link element should use child of <BrowserRoutes/> Component
// path='*' in Route componenets means if not off them called than open or route user to this pageas


//Why axios ??
//Easy to make GET POST PUT DELETE request no need to use options just using .get .put .post
//No need to use .json after fetch return response
//AxiosResponse has data propertie called data you can use direct this properti value to work
