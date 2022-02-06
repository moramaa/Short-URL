import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'

function  FullUrlScreen()  {
    const [url, setUrl] = useState('')

     const {shortUrl} = useParams()
  

    
useEffect(()=>{
    const fetchUrls = async () =>{
        const data = await axios.get(`/api/${shortUrl}`)
        console.log (data)
        console.log (Object.values(data)[0])
        setUrl(Object.values(data)[0])
    }
    fetchUrls() 
},[])

    
  return <div> 
      
      The address you are looking for is :
      <Link to ={`/${url}`}> {url}   </Link>

      </div>
}


export default FullUrlScreen;
