import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function ErrorPage() {

  const theme = createTheme({ 
      palette: {
      primary: {
        main: "#95cbff",
      }
    },
  });

  return(
    <div className="error-content-container">
      <div className="error-header-container">
        <h1 className="error-num">404</h1>
        <h1 className="error-text">ERROR</h1>
        <h4 className="error-sub-text">Uh Oh! It seems we have an error here...</h4>
      </div>
      <p className="error-description">
        Sorry! We can't find the page you are looking for. Do you want to go back to our main page?
      </p>
      <ThemeProvider theme={theme}>
        <Button variant="text" 
          component={ Link }
          to="/"
          startIcon={<ArrowBackIcon />}  >
          Go Back to Main Page
          </Button>
      </ThemeProvider>
     
    </div>
  );
}