import React, { useState } from 'react';
import axios from 'axios';
const Home = () => {
    const [data,setdata]= useState([]);
    const result = axios.get("https://swapi.dev/api/people/1/").then(a => setdata(a));
    console.log(data);
    return(
        <div>
            <h1>Salut, tu es a l'accueil de l'app.</h1>
        </div>
    );
};
export default Home;