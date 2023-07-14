import React, { useState} from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {
  Favorite as LikedIcon,
  FavoriteBorderOutlined as UnlikeIcon,
} from "@mui/icons-material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Box, Grid, useTheme } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import "./quotesCard.css";
import { deleteQuote, getQuotes, likeQuote, updateQuoteData } from "../../Config/firebase";

function QuotesCard(props) {
  const [heartColor, setHeartColor] = useState(false);
  const [quote, setQuote] = useState(props.quote);
  const navigate = useNavigate();
  const theme = useTheme();


  const goToDetails = () => {
    navigate(`/quote/${quote.id}`);
  };

  // const likeHandler = () => {
  //   likeQuote(quote.id, quote.likes + 1)
  //   getQuotes()
  //     .then((data) => {
  //       setHeartColor(false)
  //       updateQuoteData(data.id, data)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

 return (
    <Grid
      item
      xs={12}
      md={6}
      lg={4}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Card
        sx={{ width: "90%", marginTop: "50px" }}
        style={{ backgroundColor: theme.palette.secondary.main }}
        className="quotes-card"
      >
        <CardContent>
          <Typography gutterBottom variant="body2" component="div">
            {quote.author.toUpperCase()}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            <FormatQuoteIcon />
            {quote.text}
          </Typography>
        </CardContent>
        <CardActions
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box>
            <IconButton aria-label="add to favorites" style={{ color: "red" }}
            // onClick={likeHandler}
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
            <Button size="small" onClick={goToDetails}>
              Learn More
            </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default QuotesCard;
