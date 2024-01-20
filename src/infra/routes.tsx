import { Route, Routes } from 'react-router-dom';
import Experiencies from '../pages/Experiencies';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import { path } from './path';
import { DefaultLayout } from '../shared/layouts/defaultLayout';

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
