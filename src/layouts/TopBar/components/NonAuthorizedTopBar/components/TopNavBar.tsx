import { topNavBarCategoriesArray } from 'src/layouts/TopBar/assets/assets';
import { StyledLink, TopNavBarLi, TopNavBarUl } from 'src/layouts/TopBar/style';

export const TopNavBar = () => {
  return (
    <TopNavBarUl>
      {topNavBarCategoriesArray.map((elem) => (
        <TopNavBarLi key={Math.floor(Math.random() * 10000)}>
          <StyledLink to={elem.link} target='_blank'>
            {elem.name}
          </StyledLink>
        </TopNavBarLi>
      ))}
    </TopNavBarUl>
  );
};
