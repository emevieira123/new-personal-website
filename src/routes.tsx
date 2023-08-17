import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './shared/layouts/DefaultLayout';
import { Sections } from './shared/components/Sections';

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Sections />} />
      </Route>
    </Routes>
  )
}
