
import About from "./pages/about";
import Contact from "./pages/contact";

import Home from "./pages/home";
import Profile from "./pages/profile";
import Register from "./pages/register";

const routeItem = (id, title, path, component, element) => {
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
  contact: routeItem(3, "contact", "/contact", Contact),
  login: routeItem(4, "profile", "/profile", Profile),
  register: routeItem(4, "register", "/register", Register),


};

const routeArr = Object.values(routes);

export { routes, routeArr };
