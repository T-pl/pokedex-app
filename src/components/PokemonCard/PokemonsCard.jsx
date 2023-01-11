import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';



export default function PokemonCard(props) {

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

        </CardActions>
      </Card>
    </>
  );
}

