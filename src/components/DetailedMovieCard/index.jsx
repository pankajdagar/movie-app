import styled from '@emotion/styled';
import { Box, Button, Typography, Zoom } from '@mui/material';
import React, { useEffect, useState } from 'react';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { useSelector } from 'react-redux';

const movieInfoObj = [
  { key: 'Year', displayName: 'Year' },
  { key: 'Runtime', displayName: 'Running Time' },
  { key: 'Director', displayName: 'Directed By' },
  { key: 'Language', displayName: 'Language' },
];

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 5,
  width: 111,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.background.main,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.secondary.main,
  },
}));

const ExpandingZoom = styled(Box)({ maxHeight: '0px', transition: 'max-height 0.2s ease-out', gridColumn: '1 / -1', gridColumnStart: 1 }, (props) => ({
  maxHeight: props.maxh ? '400px' : '0px',
}));

const DetailedMovieCard = ({ rowNum }) => {
  const moviesData = useSelector((state) => state.movieList);
  const { movieList, expandedCardIndex } = moviesData;
  const cardData = movieList[expandedCardIndex];
  const [expandedHeight, setExpandedHeight] = useState(false);
  useEffect(() => {
    setExpandedHeight(true);
    return () => {
      setExpandedHeight(false);
    };
  }, []);
  return (
    <ExpandingZoom maxh={expandedHeight ? 'true' : ''} sx={{ gridRowStart: rowNum + 1 }}>
      <Zoom in={true} style={{ transitionDelay: '800ms' }}>
        <Box
          sx={{
            height: { xs: 'fit-content', sm: 389 },
            backgroundColor: 'background.light',
            borderRadius: '11px',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            paddingBottom: { xs: '20px', sm: 0 },
          }}
        >
          <Box
            component="img"
            sx={{
              flexBasis: { xs: 'unset', sm: '30%' },
              height: { xs: '200px', sm: '100%' },
              borderRadius: { xs: '11px 11px 0 0', sm: '11px 0 0 11px' },
            }}
            alt={cardData.Title}
            src={cardData.Poster}
          />
          <Box
            sx={{
              flexBasis: '70%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              padding: '34px 42px 0px 35px',
            }}
          >
            <Typography variant="h2" sx={{ fontSize: '30px', lineHeight: '41px', fontWeight: 700 }}>
              {cardData.Title}
            </Typography>
            {cardData.imdbRating !== 'N/A' && (
              <Box
                sx={{
                  display: 'flex',
                  marginTop: '23px',
                  alignItems: 'center',
                }}
              >
                <BorderLinearProgress variant="determinate" value={cardData.imdbRating * 10} />
                <Typography sx={{ fontSize: '16px', lineHeight: '31px', fontWeight: 600, marginLeft: '12px' }}>{cardData.imdbRating} / 10</Typography>
              </Box>
            )}
            {movieInfoObj.map((item) => (
              <Box key={item.key} sx={{ display: 'flex' }}>
                <Typography sx={{ fontSize: '16px', lineHeight: '31px', fontWeight: 600, flexBasis: { xs: 'unset', sm: '28%' }, marginRight: { xs: '10px', sm: '0' } }}>
                  {item.displayName}:
                </Typography>
                <Typography sx={{ fontSize: '16px', lineHeight: '31px', fontWeight: 600 }}>{cardData[item.key]}</Typography>
              </Box>
            ))}
            <Typography
              sx={{
                fontSize: '14px',
                lineHeight: '18px',
                marginTop: '20px',
                marginBottom: '21px',
                color: '#FFF',
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {cardData.Plot}
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <Button
                variant="contained"
                color="secondary"
                sx={{ fontSize: '16px', lineHeight: '26px', fontWeight: 700, textTransform: 'unset', marginRight: '16px', padding: '6px 21px', width: '154px' }}
              >
                Play Movie
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ fontSize: '16px', lineHeight: '26px', fontWeight: 700, textTransform: 'unset', padding: '6px 21px', width: '154px' }}
              >
                Watch Trailer
              </Button>
            </Box>
          </Box>
        </Box>
      </Zoom>
    </ExpandingZoom>
  );
};

export default DetailedMovieCard;
