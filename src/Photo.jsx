import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Photodetails from './Photodetails';




export default function Photo() {
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
     
        getPhoto('https://665736849f970b3b36c864e7.mockapi.io/login1')
      
    }, []);
  
    function getPhoto(url){
      axios.get(url)
      .then(response => {
        setPhoto(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    }
  
    return (
      <>
        <div className=" m-9 flex flex-wrap bg-base-100  p-9 shadow-xl">
        {photo.map(photo =>(
               <div className="text-center m-2" key={photo.id} >
               <img src={photo.image}/>
                  <small>{photo.id}</small>
                  <h2>{photo.name}</h2>
                  <p>{photo.gender}</p>
                  <Link to={{ pathname: `/${photo.id}` }} className="btn btn-primary">
                        View Details
                    </Link>
                </div>
              ))}
        </div>
      </>
    )
}
