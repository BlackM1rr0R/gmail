import About from "./pages/about";
import Contact from "./pages/contact";
import Gallery from "./pages/gallery";
import Home from "./pages/home";
import Idiopatik from "./pages/idiopatik";
import Kifoz from "./pages/kifoz";
import NotFound from "./pages/notFound";
const routeItem = (id, title, path, component) => {
  return {
    id,
    title,
    path,
    component,
  };
};

const routes = {
  home: routeItem(1, 'home', "/", Home),
  about: routeItem(2, 'about', "/about", About),
  notFound: routeItem(3, 'notFound', "*", NotFound),
 contact:routeItem(4,"contact","/contact",Contact),
 gallery:routeItem(5,"gallery","/gallery",Gallery),
 idiopatik:routeItem(6,"idiopatik","/idiopatik",Idiopatik),
 kifoz:routeItem(7,"kifoz","/kifoz",Kifoz)
};

const routeArr = Object.values(routes);

export { routes, routeArr };
