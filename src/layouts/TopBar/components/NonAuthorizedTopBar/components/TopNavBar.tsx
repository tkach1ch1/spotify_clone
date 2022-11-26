import { topNavBarCategoriesArray } from 'src/layouts/TopBar/assets/assets';
import { StyledLink, TopNavBarLi, TopNavBarUl } from 'src/layouts/TopBar/style';
import { nanoid } from 'nanoid';

export const TopNavBar = () => {
  return (
    <TopNavBarUl>
      {topNavBarCategoriesArray.map((elem) => (
        <TopNavBarLi key={nanoid()}>
          <StyledLink to={elem.link} target='_blank'>
            {elem.name}
          </StyledLink>
        </TopNavBarLi>
      ))}
    </TopNavBarUl>
  );
};
