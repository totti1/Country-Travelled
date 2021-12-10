import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CardActionArea, CardActions, IconButton } from '@mui/material';

 const ImageIconCard = props => {
  return (
    <Card sx={{ minWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.cardImg}
          alt={props.imgAlt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.countryName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>Population: {props.population}</p>
            <p>Capital: {props.capital}</p>
            <p>Currency: {props.currency}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="add to favorites">
            <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ImageIconCard