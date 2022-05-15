import * as Icons from 'react-icons/fa';

export const navItems = [
  {
    id:1,
    title: 'Inicio',
    path: './',
    navName: 'nav-item',
    sideName: 'sidebar-item',
    icon: <Icons.FaHome />,
  },
  {
    id: 2,
    title: "Sobre Nosotros",
    path: "./about",
    navName: "nav-item",
    sideName: "sidebar-item",
    icon: <Icons.FaBriefcase />,
  },
  {
    id: 3,
    title: "Contacto",
    path: "./contactus",
    navName: "nav-item",
    sideName: "sidebar-item",
    icon: <Icons.FaPhone />,
  },
];