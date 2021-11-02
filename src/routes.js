/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";

const dashboardRoutes = [

  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
    
  },

  {
    path: "/dashboard",
    name: "Reccomendations",
    icon: "nc-icon nc-notification-70",
    component: Dashboard,
    layout: "/admin",
    
  },
  
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
    
  },
 
  {
    path: "/table",
    name: "Saved Segments",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Customer insights",
    icon: "nc-icon nc-paper-2",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Loyalty Analytics",
    icon: "nc-icon nc-chart-bar-32",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Lifetime Value",
    icon: "nc-icon nc-money-coins",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Product Insights",
    icon: "nc-icon nc-tag-content",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Repeat Purchase",
    icon: "nc-icon nc-bag",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Product Journey",
    icon: "nc-icon nc-cart-simple",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "categ Analytics",
    icon: "nc-icon nc-bullet-list-67",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "CRM",
    icon: "nc-icon nc-badge",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Settings",
    icon: "nc-icon nc-settings-gear-64",
    component: Notifications,
    layout: "/admin",
  },
];

export default dashboardRoutes;
