import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteQuote, getQuoteById, likeQuote } from "../../Config/firebase";
import { Card, CardContent, IconButton, Typography, CardActions,Box, useTheme, Button} from "@mui/material";
import {
  FormatQuote as QuotationMarkIcon,
  Favorite as LikedIcon,
  FavoriteBorderOutlined as UnlikeIcon,
} from "@mui/icons-material";

function QuoteDetails() {
  const params = useParams();
  const [quote, setQuote] = useState([]);
  const navigate = useNavigate();
  const theme = useTheme()
  const [heartColor, setHeartColor] = useState(true);


  const getQuoteData = () => {
    getQuoteById(params.id)
      .then((data) => {
        setQuote(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getQuoteData();
  }, []);

  const likeHandler = () => {
    likeQuote(params.id, quote.likes + 1)
      .then(() => {
        getQuoteData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteQuoteHandler = async () => {
    try {
      await deleteQuote(params.id);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(quote)

  return (
    <div className="quote-details">
      <Card
        sx={{ width: "90%", marginTop: "50px" }}
        style={{ backgroundColor: theme.palette.secondary.main }}
        className="quotes-card"
      >
        <CardContent>
          <Typography gutterBottom variant="body2" component="div">
            {quote.author?.toUpperCase()}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            <QuotationMarkIcon/>
            {quote.text}
          </Typography>
        </CardContent>
        <CardActions
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box>
            <IconButton aria-label="add to favorites" style={{ color: "red" }}
            onClick={likeHandler}
            >
              {heartColor ? <UnlikeIcon /> : <LikedIcon />}
            </IconButton>
            <Typography
              variant="body2"
              color="text.secondary"
              marginLeft="10px"
            >
              {quote.likes} likes
            </Typography>
          </Box>
        </CardActions>
      </Card>
     
    </div>
  );
}

export default QuoteDetails;