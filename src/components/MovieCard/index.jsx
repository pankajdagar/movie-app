import { Box, Typography } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const IconGroupWrap = styled.div`
  display: flex;
  margin-bottom: 4px;
`;

const MovieCard = ({ data, index, onCardClick }) => {
  const { Title, Poster } = data;

  return (
    <Box
      sx={{
        width: { xs: 'unset', sm: 178 },
        height: { xs: 300, sm: 278 },
        backgroundColor: 'background.light',
        borderRadius: '11px',
        padding: '10px',
      }}
      onClick={() => onCardClick(index)}
    >
      <Box
        component="img"
        sx={{
          width: { xs: '100%', sm: 157 },
          height: { xs: 200, sm: 188 },
          borderRadius: '6px',
        }}
        alt="The house from the offer."
        src={Poster}
      />
      <Typography variant="h4" sx={{ margin: '10px 0', lineHeight: '20px', maxWidth: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {Title}
      </Typography>
      <IconGroupWrap>
        <PlayCircleFilledWhiteOutlinedIcon />
        <AddCircleOutlineOutlinedIcon sx={{ marginLeft: '16px' }} />
      </IconGroupWrap>
    </Box>
  );
};

export default MovieCard;
