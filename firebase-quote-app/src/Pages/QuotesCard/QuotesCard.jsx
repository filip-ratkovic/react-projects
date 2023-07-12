import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {Favorite as LikedIcon, FavoriteBorderOutlined as UnlikeIcon} from "@mui/icons-material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import { Box, Grid, useTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { quoteSlice } from "../../Store/quoteSlice";
import "./quotesCard.css";

function QuotesCard(props) {
  const [heartColor, setHeartColor] = useState(true);
  const [quote, setQuote] = useState(props.quote);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
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
    navigate(`/quote/${quote._id}`);
  };

  const addToFavorites = () => {
    if (token) {
      dispatch(quoteSlice.actions.setFavorite(quote));
      likeHandler(quote._id);
      setHeartColor(false);
    } else {
      navigate("/signup");
    }
  };

  return (
    <Grid item xs={12} md={6} lg={4} style={{display:"flex", justifyContent: "center"}}>
      <Card
        sx={{ width: "90%", marginTop: "50px" }}
        style={{ backgroundColor: theme.palette.secondary.main }}
        className="quotes-card"
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {quote.author.toUpperCase()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <FormatQuoteIcon />
            {quote.text}
          </Typography>
        </CardContent>
        <CardActions style={{display: 'flex', justifyContent: 'space-between'}}>
          <Box>
          <IconButton
            aria-label="add to favorites"
            style={{ color: "red"}}
            onClick={addToFavorites}
          >
           {heartColor ? <UnlikeIcon/> : <LikedIcon/>}
          </IconButton>
          <Typography variant="body2" color="text.secondary" marginLeft="10px" >
              {quote.likes} likes
            </Typography>
          </Box>
          
          <Link style={{underline: "none"}}>
          <Button size="small" onClick={goToDetails}>
            Learn More
          </Button></Link>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default QuotesCard;
