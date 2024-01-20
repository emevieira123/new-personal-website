import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { DefaultLayout } from '../shared/layouts/defaultLayout';
import Projects from '../pages/Projects';
import Experiencies from '../pages/Experiencies';
import { path } from './path';
import Skills from '../pages/Skills';

export function MainRoutes() {
  return (
    <Routes>
      <Route path={path.HOME} element={<DefaultLayout />}>
        <Route path={path.HOME} element={<Home />} />
        <Route path={path.PROJECTS} element={<Projects />} />
        <Route path={path.EXPERIENCIES} element={<Experiencies />} />
        <Route path={path.SKILLS} element={<Skills />} />
      </Route>
    </Routes>
  )
}
