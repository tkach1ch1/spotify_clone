import { navBarCategoriesArray } from '../assets/assets';
import {
  HideTextBox,
  StyledNavBarLi,
  StyledNavBarLink,
  StyledNavBarUl,
} from '../style';
import { Box } from '@mui/system';
import { theme } from 'src/assets/theme';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';

export const NavBarCategories = () => {
  const [newActiveLink, setNewActiveLink] = useState('');

  let location = useLocation();

  // Takes page pathname to compare it with a NavLink and to change categrorie image on active image when user on the page
  useEffect(() => {
    setNewActiveLink(location.pathname);
  }, [location]);

  let activeStyle = {
    color: theme.palette.primary.main,
  };

  return (
    <StyledNavBarUl>
      {navBarCategoriesArray.map((elem) => (
        <StyledNavBarLi key={nanoid()}>
          <StyledNavBarLink
            to={elem.link}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {newActiveLink === elem.link ? (
              <elem.imageActive sx={{ width: '28px', height: '28px' }} />
            ) : (
              <elem.image sx={{ width: '28px', height: '28px' }} />
            )}
            <HideTextBox>{elem.name} </HideTextBox>
          </StyledNavBarLink>
        </StyledNavBarLi>
      ))}
    </StyledNavBarUl>
  );
};
