
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';



export default function Photodetails() {
    const { id } = useParams();

    const [photo, setPhoto] = useState([]);



    useEffect(() => {
     
        getPhoto(`https://665736849f970b3b36c864e7.mockapi.io/login1`)
      
    }, []);
  
    function getPhoto(url){
      axios.get(url)
      .then(response => {
        setPhoto(response.data[id-1]);
        console.log(response.data[id-1]);
      })
      .catch(error => {
        console.error(error);
      });
    }
  

  return (
    <>
    <div className="min-h-screen mx-56 my-20 p-28 shadow-xl">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <img src={photo.image} className="rounded-lg w-full sm:w-64"/>
            <div>
            <h2 className="text-3xl font-bold mb-8">{photo.id}</h2>
            <p className="text-xl font-bold">{photo.name}</p>
            <p className="text-gray-600 mb-4">{photo.gender}</p>
            <p className="text-gray-600 mb-4">{photo.status}</p>
            <p className="text-gray-600 mb-4">{photo.hair}</p>
            <p className="text-gray-600 mb-4">{photo.origin}</p>
            <p className="text-gray-600 mb-4">{photo.species}</p>
            </div>
        </div>
        </div>
</>
  );
}