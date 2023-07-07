import React from 'react'
import {useEffect, useState} from 'react'

import "./allQuotes.css"
import Loading from '../Loading/Loading';
import QuotesCard from '../QuotesCard/QuotesCard';
import { Box } from '@mui/material';

function AllQuotes() {
const [quotes, setQuotes] = useState([]);
const [loading, setLoading] = useState(true)







useEffect(() => {
  fetch("https://js-course-server.onrender.com/quotes/get-all-quotes")
    .then((res) => res.json())
    .then((data) => {
      setQuotes(data);
      setLoading(false)
    })
    .catch((error) => {
      console.log(error);
    });
}, []);


if(loading) {
  <Loading/>
}
  return (
    <div>
       
      <Box className = "quote-card-box" >
     
      {quotes.map((quote, index) => {
      return  <QuotesCard quote={quote} key={index}/>
      })}
      </Box>
    </div>
  )
}

export default AllQuotes