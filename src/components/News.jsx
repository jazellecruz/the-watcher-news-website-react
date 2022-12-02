import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import NewsItem from "./Newsitem";
import ErrorMessage from "./ErrorMessage"
import Loading from "./Loading";

export default function News({ category }) {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [newsItems, setNewsItems] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  const observer = useRef();
  
  const lastItemRef = useCallback(node => { 
    if (loading) return 
    if (observer.curent) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNum(prevPageNum => prevPageNum + 1); 
      }
    }, {threshold: 1})
    if (node) observer.current.observe(node);
    
  }, [loading, hasMore]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    // setTimeout is used to show the loading animation and for a more smoother re-rendering
    // setTimemout can be removed if you want
    setTimeout(() => {
      axios({
        method: "get",
        // Use jsonplacholder as a test api first since the the news api has limited calls
        url: "https://jsonplaceholder.typicode.com/posts", 
        params: {
          _page: pageNum,
        },
      })
      .then(res => {
        setNewsItems(prevVal => {
          
          /* Visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set 
           for the Set method */
          return [...new Set([...prevVal, ...res.data])]
        })
        console.log(newsItems)
        setHasMore(newsItems.length < 100)
        setLoading(false);
      })
      .catch(err => {
        setError(true);
        setLoading(false);
        console.log(err);
      })
    }, 2000)
  }, [pageNum, category]);  /* NOTE: IGNORE THE ESLINT WARNING! 
  Adding the newsItems as a dependency will result 
  in calling the API in an infinite loop. */  

  /** When user changes the category, remove the items from the 
  previous category and reset the pageNum to 1 */
  useEffect(() => {
    setNewsItems([]);
    setPageNum(1);
  }, [category])

  return (
      <Container>
         <Grid container spacing={3} rowSpacing={3}>
          {newsItems.map((item, index) => {
                if (newsItems.length === index + 1) {
                return (
                <Grid item xs={12} sm={6} md={4} 
                  display="flex" 
                  justifyContent="center" 
                  ref={lastItemRef}> 
                  <NewsItem                  
                    newsTitle={item.title} 
                    newsUrl={item.url} 
                    newsImg={item.image}
                    newsExcerpt={item.body}/>
                  </Grid> 
                  );
                } else {
                  return (
                  <Grid item xs={12} sm={6} md={4} 
                    display="flex" 
                    justifyContent="center" >
                  <NewsItem                  
                    newsTitle={item.title} 
                    newsUrl={item.url} 
                    newsImg={null}
                    newsExcerpt={item.body}/>
                  </Grid> 
                  );
                }
              })
            }   
          <Grid item xs={12} display="flex" justifyContent="center" >
            {error && <ErrorMessage />}
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center" >
            {loading && <Loading />}
          </Grid>
        </Grid>
      </Container>
  );
}

// newscatcher api: https://api.newscatcherapi.com/v2/latest_headlines?