import { IRouteItem } from "app/config/@interfaces/route.interface";
import BookList from "app/pages/booklist";
import Dashboard from "app/pages/dashboard";

const userRoutes: IRouteItem[] = [
  {
    text: "Search",
    url: "/search",
    component: Dashboard,
  },
  {
    text: "Booklist",
    url: "/list",
    component: BookList,
  },
];
export default userRoutes;
