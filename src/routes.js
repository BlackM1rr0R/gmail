
import About from "./pages/about";
import Contact from "./pages/contact";

import Home from "./pages/home";

const routeItem = (id, title, path, component,element) => {
  return {
    id,
    title,
    path,
    component,
    element
  };
};

const routes = {
  home: routeItem(1, 'home', "/", Home),
  about: routeItem(2, 'about', "/about", About),

 contact:routeItem(4,"contact","/contact",Contact),


};

const routeArr = Object.values(routes);

export { routes, routeArr };
