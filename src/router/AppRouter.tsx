import { AboutMePage, HomePage, ProjectsPage, ResumePage } from '../components';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import { HOME_PATH, ABOUT_ME_PATH, PROJECTS_PATH, RESUME_PATH } from './paths';

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={HOME_PATH}>
          <HomePage />
        </Route>

        <Route exact path={ABOUT_ME_PATH}>
          <AboutMePage />
        </Route>

        <Route exact path={PROJECTS_PATH}>
          <ProjectsPage />
        </Route>

        <Route exact path={RESUME_PATH}>
          <ResumePage />
        </Route>

        <Redirect to={HOME_PATH} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
