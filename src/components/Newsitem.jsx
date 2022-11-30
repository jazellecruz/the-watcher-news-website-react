import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import dummyImg from "../assets/dummyImg.jpg"

export default function NewsItem(props) {
  
  const theme = createTheme({
    palette: {
      primary: {
        main: '#e74b6f'
      }
    },
  });

  return (
    <Card>
      <CardMedia
        component="img"
        alt="news-cover-img"
        height="190"
        image={props.newsImg ? props.newsImg : dummyImg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.newsTitle}
        </Typography>
        <Typography variant="body2" 
          color="#cacaca" 
          sx={{textOverflow : "ellipsis"}}>
          {props.newsExcerpt}
        </Typography>
      </CardContent>
      <CardActions>
        <ThemeProvider theme={theme}>
          <Button 
              variant="contained" 
              size="medium" 
              component="a" 
              target="_blank" 
              rel="noopener noreferrer"
              endIcon={<ArrowCircleRightIcon/>}
              href={props.newsUrl}
              >Read More
            </Button>
        </ThemeProvider>
      </CardActions>
    </Card>
  );
}
//.substring(0, 150) + "..."