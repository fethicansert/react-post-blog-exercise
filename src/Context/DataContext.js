import { createContext, useState, useEffect } from "react";
import useWindowSize  from '../Hooks/useWindowSizeHook.js';
import useAxiosApi from '../Hooks/useAxiosApiHook.js';
import  useSearch  from '../Hooks/useSearchHook.js'
import { format, set }  from 'date-fns'; 
import api from '../Api/axiosApiRequest.js';
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

  export const DataContext = createContext({});
  
  export const DataProvider = ({children}) => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResult] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [updateTitle, setUpdateTitle] = useState('');
    const [updateBody, setUpdateBody] = useState('');
    const { width } = useWindowSize();
    const navigate = useNavigate();
    const { data, fetchError, isLoading} = useAxiosApi('http://localhost:3500/posts');
    const searchPosts = useSearch(posts,search);  

    useEffect(()=>{
        setSearchResult(searchPosts);
      },[searchPosts]);
    
      useEffect(() => {
        setPosts(data);
      },[data]);

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
        try{
          const response = await api.post('/posts',newPost);
          setPosts(prevState => [...prevState,response.data]);
          setPostTitle('');
          setPostBody('');
          navigate('/');
        } catch(err) {
          console.log(err.message);
        }
      }

      async function handleDelete(id){
        try {
          const request = await api.delete(`/posts/${id}`);
          const newList = posts.filter(post => post.id !== id);
          console.log("Hello");
          setPosts(newList);
          navigate('/');
        } catch(err) {
          console.log(err.message);
        }
      }

      async function handleUpdate(e,id){
        e.preventDefault();
        const datetime = format(new Date(),'MMMM dd, yyyy pp');
        try{
          const updatedPost = {
              id,
              title: updateTitle,
              datetime, 
              body: updateBody
           }
          const request = await api.put(`/posts/${id}`,updatedPost);
    
          setPosts(posts.map(post => post.id === id ? request.data : post));
          setUpdateBody('');
          setUpdateTitle('');
          navigate('/');
        } catch (err){
          console.log(err);
          // setCrudError(`${err.response.status}: ${err.response.statusText}`);
        }
      }
    return (
        <DataContext.Provider value={{
            posts, width, isLoading, fetchError, postTitle, postBody, 
            searchResults, updateTitle, updateBody,search, 
            sharePost, setPostTitle, setPostBody, handleDelete, 
            setUpdateTitle, setUpdateBody, handleUpdate, setSearch
            }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;




