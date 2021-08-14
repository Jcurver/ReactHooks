import React, {useRef,useEffect, useState}from "react";
import ReactDOM from "react-dom";
import useAxios from "./useAxios";


export default function App() {
  const {loading, data, error, refetch} = useAxios({
    url:"https://cors-anywhere.herokuapp.com/https://yts.mx/api/v2/list_movies.json" 
  });
  console.log(`Loading: ${loading}\nError: ${error}\ndata: ${JSON.stringify(data)}`);

  return (
    <div className="App" >
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loding" }</h2>

      <button onClick={refetch}>Refetch</button>
    </div>
  );
};
