import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Table } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const DataScreen = () => {
const [urls, setUrls] = useState([])

useEffect(()=>{
    const fetchUrls = async () =>{
        const {data} = await axios.get('/api')
        setUrls(data)
    }
    fetchUrls() 
},[])


  const rendereddata = urls.map(url => {
    return <>     
          <tr>
            <td>   {url.full}   </td>
            <td>  <Link to ={`/${url.short}`}> {url.short}   </Link></td>
            <td>{url.clicks}</td>
          </tr>
          </>
  })
  return <div>
     <Table striped bordered hover>
   <thead>
     <tr>
       <th>Full URL</th>
      <th>Short URL</th>
          <th>Clicks</th>
     </tr>
   </thead>
   <tbody> 
    {rendereddata}
   </tbody>
</Table>
    
    </div>
}

export default DataScreen;
