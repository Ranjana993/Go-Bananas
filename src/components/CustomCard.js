import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CustomCard = ({ title, body }) => {
  return (
    <Card sx={{ minWidth: 275, m: 2, transition: 'box-shadow 0.3s', '&:hover': { boxShadow: 6 } }} >
      <CardContent>
        <Typography sx={{ textTransform: "capitalize" }} variant="h5" component="div">{title} </Typography>
        <Typography variant="body2"> {body}</Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
