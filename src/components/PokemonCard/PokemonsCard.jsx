import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import styled from 'styled-components';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Axios from 'axios';
import InfoIcon from '@mui/icons-material/Info';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
export default function PokemonCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const navigate = useNavigate();
  function showPokemonDetails() {
    navigate(`/detalhes/${props.name}`);
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <Card sx={{ maxWidth: 345 }} >
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <InfoIcon onClick={showPokemonDetails} />
            </IconButton>
          }
          title={capitalizeFirstLetter(props.name)}
        />
        {props.image ? <img width='100%' src={props.image} alt={props.name} /> : console.log(props.image)}
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon color='error' />
          </IconButton>

          {/* <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore> */}
        </CardActions>
      </Card>
      {/* <Card onClick={showPokemonDetails}>
        {pokemon.name}
      </Card> */}
    </>
  );
}

