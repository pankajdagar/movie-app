import { styled } from '@mui/material/styles';
import Search from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useRef } from 'react';

const StyledSearch = styled('div')((props) => ({
  position: 'relative',
  transition: props.theme.transitions.create('width'),
  '.MuiInputBase-root': {
    width: '100%',
    '& svg': {
      visibility: 'hidden',
      opacity: 0,
      transition: 'visibility 0s, opacity 0.5s linear',
    },
    '&:focus-within': {
      '& svg': {
        visibility: 'visible',
        opacity: 1,
      },
    },
  },
  '&:focus': {
    backgroundColor: props.theme.palette.background.dark,
  },
  marginLeft: 0,
  width: '100%',
  [props.theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
  [props.theme.breakpoints.down('sm')]: {
    display: !props.isAppBar ? 'none' : '',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    color: '#FFF',
    fontWeight: 600,
    borderRadius: '8px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 0,
      '&:focus': {
        width: '567px',
        backgroundColor: theme.palette.background.dark,
      },
    },
  },
}));

const CloseIconWrapper = styled(SearchIconWrapper)(() => ({
  right: 0,
}));
const SearchBox = ({ onInputChange, isAppBar = false }) => {
  const inputRef = useRef(null);
  return (
    <StyledSearch isAppBar={isAppBar}>
      <SearchIconWrapper>
        <Search color="primary" />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Title, Movies, Keywords"
        ref={inputRef}
        inputProps={{ 'aria-label': 'search' }}
        endAdornment={
          <CloseIconWrapper >
            <CloseIcon color="primary" onClick={() => console.log(inputRef.current.value)}/>
          </CloseIconWrapper>
        }
        onChange={onInputChange}
      />
    </StyledSearch>
  );
};

export default SearchBox;
