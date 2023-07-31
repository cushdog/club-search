import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Contemplative from '../images/contemplative.jpg';

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={Contemplative} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ paddingBottom: '10px' }}>
            {props.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">Tags:</Typography>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {props.tags.map((item, index) => (
              <Typography key={index} variant="body2" color="text.secondary">
                <p className="btn btn-primary" style={{ cursor: 'default' }}>{item}</p>
              </Typography>
            ))}
          </div>

        </CardContent>
      </CardActionArea>
    </Card>
  );
}