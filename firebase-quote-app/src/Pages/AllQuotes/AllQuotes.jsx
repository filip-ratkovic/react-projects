import React from "react";
import { useEffect, useState } from "react";

import "./allQuotes.css";
import Loading from "../Loading/Loading";
import QuotesCard from "../../Components/QuotesCard/QuotesCard";
import { Fab, Grid } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import Layout from "../../Containers/Layout";
import { useNavigate } from "react-router-dom";
import {getQuotes} from "../../Config/firebase"

function AllQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const navigate = useNavigate()

  useEffect(() => {
    getQuotes()
      .then((data) => {
        setQuotes(data);
        setLoading(false)
        console.log(data);

      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
      });
  }, []);

  if (loading) {
   return <Loading />;
  }
  return (
    <Layout>
      <Fab color="primary" aria-label="add"
       style={{position:"fixed", bottom:"20px", right:"20px"}}
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
