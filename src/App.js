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

    axios

    .get(apiUrl, {
                        headers: {
                          "Cache-Control": "no-cache",
                          "Access-Control-Allow-Origin": "*",
                        },)


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
      <div className='container' class="container">

        <h1>Panda Store</h1>

        <div class="subtitle">
        <p><i>Powered by Red Hat OpenShift</i></p>
        <img src="openshift-logo.png" alt="OpenShift Logo"></img>
        </div>

        <h2>How many pandas have been ordered today?</h2>

      
        <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
        </div>

    </div>
    </div>
  );
}
export default App;
