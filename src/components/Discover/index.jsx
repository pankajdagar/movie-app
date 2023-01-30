import styled from '@emotion/styled';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { Box, CircularProgress, Modal, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import SearchBox from '../SearchBox';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MovieCard from '../MovieCard';
import { getMovieList } from '../../networkHandlers/movieListHandlers';
import { useDispatch, useSelector } from 'react-redux';
import { debounce, getRowFromGrid } from '../../utils';
import DetailedMovieCard from '../DetailedMovieCard';
import { appendMovieList } from '../../redux/actions/moviesListActions';
import isMobile from 'is-mobile';

const RightSectionWrap = styled.div`
  display: flex;
  margin-left: auto;
`;

const MovieListWrap = styled(Box)`
  display: grid;
  padding: 24px;
  min-height: 100%;
  gap: 26px;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fit, 178px);
  justify-content: space-between;
`;

const Discover = () => {
  const moviesData = useSelector((state) => state.movieList);
  const [rowNum, setRowNum] = useState(0);
  const { loading, movieList, expandedCardIndex } = moviesData;
  const dispatch = useDispatch();
  const discoverRef = useRef(null);
  useEffect(() => {
    async function getMoviesList() {
      dispatch(getMovieList());
    }
    getMoviesList();
  }, [dispatch]);

  const searchHandler = (e) => {
    dispatch(getMovieList(e.target.value));
  };

  const handleCardClick = (index) => {
    const rowNum = getRowFromGrid(index, discoverRef.current);
    setRowNum(rowNum);
    dispatch(appendMovieList(index));
  };

  const debouncedSearch = debounce(searchHandler, 400);
  return (
    <>
      <Toolbar
        sx={{
          display: { xs: 'none', sm: 'flex' },
        }}
      >
        <SearchBox onInputChange={debouncedSearch} />
        <RightSectionWrap>
          <LightModeOutlinedIcon sx={{ height: '22px', width: '22px' }} />
          <MoreVertIcon sx={{ marginLeft: '20px', height: '23px' }} />
        </RightSectionWrap>
      </Toolbar>
      <MovieListWrap ref={discoverRef} sx={{ marginTop: { xs: '56px', sm: '0' }, gridTemplateColumns: { xs: 'repeat(auto-fit,100%)', sm: 'repeat(auto-fit, 178px)' } }}>
        {loading ? (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <CircularProgress />
          </Box>
        ) : movieList.length ? (
          movieList.map((movieData, index) => (
            <React.Fragment key={index}>
              <MovieCard data={movieData} index={index} onCardClick={handleCardClick} />
              {!isMobile() && expandedCardIndex === index ? <DetailedMovieCard rowNum={rowNum} /> : ''}
            </React.Fragment>
          ))
        ) : (
          <Typography sx={{ fontSize: '21px', lineHeight: '44px', color: '#FFF', gridColumn: '1 / -1' }}>No results found for your search.</Typography>
        )}
      </MovieListWrap>
      {/* Modal Only For Mobile View */}
      {isMobile() && (
        <Modal open={typeof expandedCardIndex === 'number'} onClose={() => dispatch(appendMovieList(null))} aria-labelledby="detailed-movie-card" sx={{ padding: '40px' }}>
          <DetailedMovieCard rowNum={rowNum} />
        </Modal>
      )}
    </>
  );
};

export default Discover;
