import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import withListLoading from './components/withListLoading';
import axios from 'axios'



function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = process.env.REACT_APP_ORDER_BACKEND;

    axios.get(apiUrl)

    .then((repos) => {
      const allRepos = repos.data;
      setAppState({ loading: false, repos: allRepos });
    })
    .catch(function(error) {
            console.log(error);
         });
  }, [setAppState]);

  return (

    <div className='App'>
      <pre>{process.env.REACT_APP_ORDER_BACKEND}</pre>
      <div className='container'>

        <h1>Quarkus Shop</h1>

        <img className='quarkusimg' src='img.png'/>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className='footer'>


        </div>
      </footer>
    </div>
  );
}
export default App;
