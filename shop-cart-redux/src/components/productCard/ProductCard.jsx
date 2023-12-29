import * as React from 'react';
import {Button, Card, CardMedia, CardContent, CardActions, Typography} from '@mui/material/';
import AddIcon from '@mui/icons-material/Add';

export default function ProductCard (props) {
    const {product} = props
  return (
    <Card sx={{ maxWidth: "100%", minWidth: 345 }}>
      <CardContent>
        <Typography variant="h5" color="text.primary">
        {product.name}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="254"
        image={product.img}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6" color="gold" >
           {product.price.toFixed(2)} $
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="outlined" color='secondary'>
        <Typography variant="body2" color="text.secondary" >
           Add to cart
        </Typography>
          <AddIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
