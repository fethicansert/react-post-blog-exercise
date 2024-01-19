import React, { useContext, useEffect } from 'react'
import Feed from './Feed'
import useIsMounted from '../Hooks/useIsMounted';
import Loading from './Loading';
import ErrorPage from './ErrorPage';
import DataContext from '../Context/DataContext';
function Home() {
  useIsMounted("Home");
  const {searchResults, fetchError, isLoading} = useContext(DataContext);
  return (
    <main className='home-page'>
      {fetchError && <ErrorPage errMessage={fetchError}/>}
      {isLoading && <Loading />}
      {!fetchError && !isLoading && (
        searchResults.length
        ? <Feed posts={ searchResults } ></Feed>  
        : <p className='no-post-text'>No post to Display</p>
      )}
    </main>
  )
}

export default Home
