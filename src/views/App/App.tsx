import { Route, Routes } from 'react-router-dom';
import { NotFound, Home } from 'views';
import { TopBar } from 'components';
import { HOME_PATH, NOT_FOUND_PATH } from 'constants/routersPaths';
import { MainSection, Wrapper } from './App.styles';

export const App = () => {
  return (
    <Wrapper>
      <TopBar />
      <MainSection>
        <Routes>
          <Route path={HOME_PATH} element={<Home />} />
          <Route path={NOT_FOUND_PATH} element={<NotFound />} />
        </Routes>
      </MainSection>
    </Wrapper>
  );
};
