import Header from './Components/Header.js'; 
import Nav from './Components/Nav.js';       
import Footer from './Components/Footer.js'  
import Home from './Components/Home.js'     
import NewPost from './Components/NewPost.js'
import PostPage from './Components/PostPage.js'   
import About from './Components/About.js'
import Missing from './Components/Missing.js'
import { postData } from './/Data/PostData.js';
import { BrowserRouter, Link, Route, Routes, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format }  from 'date-fns'; 
import  axios  from 'axios';
import apiRequest from './Api/apiRequest.js';
import api from './Api/axiosApiRequest.js';
import ErrorPage from './Components/ErrorPage.js';
import { v4 as uuidv4 } from 'uuid';

function App() {
  //format funtionunu kullaan YYYY mm dd ogren
  //PUT and PATCH farkli ..?
  //const x = {name:'yusug'}
  //const y = {...x} destructure operator
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [updateTitle, setUpdateTitle] = useState('z');
  const [updateBody, setUpdateBody] = useState('z');
  const [apiError, setApiError] = useState(null);
  const navigate = useNavigate();
  

  async function sharePost(e){
    e.preventDefault();
    const id = uuidv4();
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost = {
      id,
      title: postTitle,
      datetime,
      body:postBody
    }
    //if response succ, response has data propertie that hold same value that we try to post to server(newPost);
    //we use this value to set data to posts-state
    try{
      const response = await api.post('/posts',newPost);
      setPosts(prevState => [response.data,...prevState]);
      setPostTitle('');
      setPostBody('');
      navigate('/');
    } catch(err) {
      console.log(err);
    }
  }

  async function handleDelete(id){
    try {
      const request = await api.delete(`/posts/${id}`);
      console.log(request);
      const newList = posts.filter(post => post.id !== id);
      setPosts(newList);
      navigate('/');
    } catch(err) {
      console.log(err.response.data);
    }
  }

  async function handleUpdate(id){
    const datetime = format(new Date(),'MMMM dd, yyyy pp');
    try{
      const updatedPost = {
          id,
          title: updateTitle,
          datetime, 
          body: updateBody
       }
      const request = await api.put(`/posts/${id}`,updatedPost);
      console.log(request.data);
      setPosts(posts.map(post => post.id === id ? request.data : post));
    } catch (err){
      console.log(err);
    }
  }

  
  //Neden her bi islmede direk fetct yapmimyoruz da postda da delete ve atrice serverde deelete yapiyoruz.??
  useEffect(() => {
    const asyncFetch = async () => {
      try {
        const request = await api.get('/posts');
        setPosts(request.data);
        setApiError(null);
      } catch(err) {
       if(err.response){
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.statusTexts);
        setApiError(`${err.response.status}: Page ${err.response.statusText}`);
       }else{
        setApiError(err.message);
       }
      }
    }
    (()=> asyncFetch())();
  },[]);

  //searchResults-state diye bir state daha yarattik ve search-state kullanarak posts-state filter()leyip Home Page de kullandik.
  //search-state her degistiginde useState calisip HomePage goruntusunu yeni searchResults-state ile re render yapiyor.
  //useEffect te array dependecies olarak search-state ve posts-state verdik.
  //posts-state vermemizdeki amac post ekledigimizde ve geri Home page navigate yaptigimizda useEffectin hookun tekrar calismasi
  //Ve boylelikle Homepage yeni posts-state kullanarak ayni islemi tekrar gercerklestirmesidir. 
  useEffect(() => {
    const searchedPosts = posts.filter(post => (
      post.body.toLowerCase().includes(search.toLowerCase()) || 
      post.title.toLowerCase().includes(search.toLowerCase())
    )).reverse();
    setSearchResult(searchedPosts);
  },[search,posts]);

  return (
    <div className="App">
      <Header />
      <Nav search={search} setSearch={setSearch}/>
        {
        !apiError 
        ? <Routes>
            <Route exact path='/' element={ <Home posts={ searchResults } handleDelete={ handleDelete } /> }/>
            <Route exact path='/post' element={ <NewPost 
              postBody={ postBody }
              setPostBody={ setPostBody }
              postTitle={ postTitle }
              setPostTitle={ setPostTitle }
              sharePost={ sharePost }
            /> }/>
            <Route path='/post/:id' element= { <PostPage posts={posts} handleDelete={handleDelete}/> }/>
            <Route path='/About' element= { <About /> } />
            <Route path='*' element={ <Missing /> } />
          </Routes>
        : <ErrorPage errMessage= {apiError }/>
        }
      <Footer />
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
