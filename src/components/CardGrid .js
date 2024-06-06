import React, { useContext, useState } from 'react';
import Grid from '@mui/material/Grid';
import CustomCard from './CustomCard';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SearchContext } from './SearchContext';

const CardGrid = ({ data }) => {
  const { searchTerm } = useContext(SearchContext);
  const [page, setPage] = useState(1);
  const cardsPerPage = 6;

  const handlePageChange = (event, value) => {
    setPage(value);
  };


  // filtering data through search input 
  const filteredData = data.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||   
    card.body.toLowerCase().includes(searchTerm.toLowerCase())
  ); 

  //  pagination 
  const indexOfLastCard = page * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredData.slice(indexOfFirstCard, indexOfLastCard);
  // console.log(filteredData);

  return (
    <>
      {filteredData.length === 0 ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Typography variant="h4">Nothing matched your search</Typography>
        </Box>
      ) : (
        <>
          <Grid container spacing={2} sx={{ padding: 2 }}>
            {currentCards.map((card, index) => (
              <Grid item xs={12} sm={6} md={4} lg={6} key={index}>
                <CustomCard title={card.title.split(' ').length > 3 ? card.title.split(' ').slice(0, 3).join(' ') + '...' : card.title} body={card.body} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 , mb:5 }}>
            <Pagination
              count={Math.ceil(filteredData.length / cardsPerPage)}
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        </>
      )}
    </>
  );
};

export default CardGrid;
