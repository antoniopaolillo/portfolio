import { AboutMePage, HomePage, ProjectsPage, ResumePage } from 'components';
import { Redirect, Route, Switch } from 'react-router-dom';
import { HOME_PATH, ABOUT_ME_PATH, PROJECTS_PATH, RESUME_PATH } from './paths';
function AppRouter() {
  return (
    <Switch>
      <Route path={HOME_PATH}>
        <HomePage />
      </Route>

      <Route path={ABOUT_ME_PATH}>
        <AboutMePage />
      </Route>

      <Route path={PROJECTS_PATH}>
        <ProjectsPage />
      </Route>

      <Route path={RESUME_PATH}>
        <ResumePage />
      </Route>

      <Redirect to={HOME_PATH} />
    </Switch>
  );
}

export default AppRouter;
