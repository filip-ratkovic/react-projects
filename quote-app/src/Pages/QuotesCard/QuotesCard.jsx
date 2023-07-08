import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import { Grid, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { quoteSlice } from "../../Store/quoteSlice";
import "./quotesCard.css";

function QuotesCard(props) {
  const [heartColor, setHeartColor] = useState("#fff")
  const [quote, setQuote] = useState(props.quote)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const theme = useTheme();
  const themeState = useSelector((state) => state.theme);
  const token = localStorage.getItem("authToken");
  // console.log(quote)

 
  const likeHandler = (data) => {
    fetch("https://js-course-server.onrender.com/quotes/like/" + data, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const goToDetails = () => {
      navigate(`/quote/${quote._id}`)
  }

  const addToFavorites = () => {
    if(token) {
      dispatch(quoteSlice.actions.setFavorite(quote));
      likeHandler(quote._id)
      setHeartColor("#e60023")
    }else {
      navigate("/signup")
    }
    
  };

  return (
    <Grid item xs={12} md={6} lg={3}>
    <Card
      sx={{ width: "90%", marginTop: "50px" }}
    
      style={{ backgroundColor: theme.palette.secondary.main}}
      className="quotes-card"
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {quote.quoteAuthor.toUpperCase()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <FormatQuoteIcon/>
          {quote.quoteText}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Likes: {quote.likes}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites" style={{ color: heartColor }}
         onClick={addToFavorites} >
          <FavoriteIcon />
        </IconButton>
        <Button size="small" onClick={goToDetails}>Learn More</Button>
      </CardActions>
    </Card>
  
    </Grid>
      );
}

export default QuotesCard;
