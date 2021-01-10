
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 140,
  },
});

const InfoCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardMedia
          className={classes.media}
          image="https://image.kkday.com/v2/image/get/w_481%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/product_103488/20201217060059_U7ZzY/jpg"
          title="Contemplative Reptile"
        />
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          主分類
        </Typography>
        <Typography variant="h5" component="h2">
          影片名稱
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          簡短描述
        </Typography>
        <Typography variant="body2" component="p">
          <Chip variant="outlined" label="標籤1" />
          <Chip variant="outlined" label="標籤2" />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default InfoCard;