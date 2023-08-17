import { Outlet } from "react-router-dom";
import { Menu } from "../../components/menu";

export function DefaultLayout() {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  )
}
