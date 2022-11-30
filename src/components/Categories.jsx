import { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, Outlet } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material';

export default function CenteredTabs() {
  const currentTab = () => {
    let path = window.location.pathname;
    if (path === "/") return 0;
    else if (path === "/tech") return 1;
    else if (path === "/business") return 2;
    else if (path === "/politics") return 3;
    else if (path === "/science") return 4;
    else if (path === "/sports") return 5;
    else if (path === "/entertainment") return 6;
};

  const [value, setValue] = useState(currentTab);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth])

  const theme = createTheme({
    palette: {
        primary: {
            main: "#e74b6f",
        }
    },
    components: {
      MuiTabs: {
        defaultProps: {
          allowScrollButtonsMobile: true,
        },
      },
    },
  });
  
  return (
    <>
      <ThemeProvider theme={theme}>
          <Tabs value={value} 
            onChange={handleChange} 
            variant={windowWidth > 700 ? "standard" :  "scrollable"} 
            centered={windowWidth > 700}
            >
            <Tab label="General" to="" component={Link} />
            <Tab label="Tech" to="tech" component={Link} />
            <Tab label="Business" to="business" component={Link} />
            <Tab label="Politics" to="politics" component={Link} />
            <Tab label="Science" to="science" component={Link} />
            <Tab label="Sport" to="sports" component={Link} />
            <Tab label="Entertainment" to="entertainment" component={Link} />
          </Tabs>
      </ThemeProvider>
      <Outlet />
    </>
  );
}