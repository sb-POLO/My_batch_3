import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import sourav from '../assets/sourav.png';
import sameera from '../assets/sameera.png';
import prachi from '../assets/prachi.png';

function About() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [image, setImage] = useState("");

    useEffect(() => {
        searchParams.get('user') === "sourav" ? setImage(sourav) : searchParams.get("user") === "sameera" ? setImage(sameera) : searchParams.get('user') === "prachi" ? setImage(prachi) : setImage(null);
    }, [searchParams])

    // console.log(searchParams.get('color'));
    return (
        <>
            <div className='components'>About</div>

            <button onClick={() => setSearchParams({ user: "sameera" })}>Sameera</button>
            <button onClick={() => setSearchParams({ user: "sourav" })}>Sourav</button>
            <button onClick={() => setSearchParams({ user: "prachi" })}>Prachi</button>
            <br></br>
            <br></br>
            <img src={image}></img>
        </>
    )
}

export default About