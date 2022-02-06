import axios from 'axios';
import React, {useState } from 'react';
import {Form,Button,Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import FormContainer from "../components/FormContainer";


function Url() {
    const [url, setUrl] = useState('')
    const [shorturl, setShortUrl] = useState('')
    const [copySuccess, setCopySuccess] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault()
     const shorturl =  await axios.post(`/api`,url)
     setShortUrl(shorturl.data.short)
    }

    const copyToClipBoard = async copyMe => {
      try {
        await navigator.clipboard.writeText(copyMe);
        setCopySuccess('Copied!');
      } catch (err) {
        setCopySuccess('Failed to copy!');
      }
    };

  return (
    <FormContainer>

      {/* url */}
    <Form onSubmit={submitHandler}>
    <Row  >
    <Col className="d-grid gap-2" xs={12} md={10}>
         <Form.Group  controlId='url'>
        <Form.Control
            type='url'
            placeholder='url'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            ></Form.Control>
             {/* button  */}
         </Form.Group>
    </Col>
    <Col className="d-grid gap-2" xs={12} md={2}>
    <Button   size="lg" type='submit'  >Short URL</Button>
    </Col>
    <Col className="d-grid gap-2" xs={12} md={2} >

      your short URL : <Link to ={`/${shorturl}`}> {shorturl}   </Link>

    </Col>

<Button onClick={() => copyToClipBoard(` ${shorturl}`)}>
     Click here to copy url
     {copySuccess}

     </Button>

  </Row>

    

    </Form>
   
</FormContainer>
  )
}

export default Url;
