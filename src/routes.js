

import AllMessage from "./components/allmessage";
import About from "./pages/about";
import Contact from "./pages/contact";

import Home from "./pages/home";
import ComposeMessage from "./pages/newMessage";
import Profile from "./pages/profile";
import Register from "./pages/register";
import SentMessages from "./pages/sentmessages";
import Starred from "./pages/starred";

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
  register: routeItem(5, "register", "/register", Register),
  starred: routeItem(6, "starred", "/starred", Starred),
  sent: routeItem(7, "sent", "/sent", SentMessages),
  newMessage: routeItem(8, "newMessage", "/newMessage", ComposeMessage),


};

const routeArr = Object.values(routes);

export { routes, routeArr };
