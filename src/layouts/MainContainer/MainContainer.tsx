import { ReactNode } from 'react';
import { TopContainer } from './style';


interface MainContainerProps {
  children: ReactNode;
}

export const MainContainer = ({ children }: MainContainerProps) => {
    return (
        <TopContainer>{children}</TopContainer>
    )
};
