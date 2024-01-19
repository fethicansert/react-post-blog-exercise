import { useEffect, useState } from "react";

function useSearch(posts, search){
    const [searchDataz, setSearchDataz] = useState([]);
    useEffect(()=>{
        const searchedPosts = posts.filter(post => (
            post.body.toLowerCase().includes(search.toLowerCase()) || 
            post.title.toLowerCase().includes(search.toLowerCase())
          )).reverse();
        setSearchDataz(searchedPosts);
    },[posts,search])

    return searchDataz;
}

export default useSearch;