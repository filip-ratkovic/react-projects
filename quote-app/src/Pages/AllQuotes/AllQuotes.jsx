import React from "react";
import { useEffect, useState } from "react";

import "./allQuotes.css";
import Loading from "../Loading/Loading";
import QuotesCard from "../QuotesCard/QuotesCard";
import { Fab, Grid } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import Layout from "../../Containers/Layout";
import { useNavigate } from "react-router-dom";

function AllQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const navigate = useNavigate()

  useEffect(() => {
    fetch("https://js-course-server.onrender.com/quotes/get-all-quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
   return <Loading />;
  }
  return (
    <Layout style={{position:"relative"}}>
      <Fab color="primary" aria-label="add"
       style={{position:"absolute", bottom:"20px", right:"20px"}}
       onClick={()=> navigate("/add")}
       >
        <AddIcon />
      </Fab>

      <Grid container spacing={2}>
        {quotes.map((quote, index) => {
          return <QuotesCard quote={quote} key={index} />;
        })}
      </Grid>
    </Layout>
  );
}

export default AllQuotes;
