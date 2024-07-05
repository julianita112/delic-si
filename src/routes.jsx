import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications, Usuarios, Roles, Compras, Proveedores, Insumos, CategoriaInsumos, FichaTecnica, ProductoTerminado, Ventas, Clientes, Pedidos } from "@/pages/dashboard";
import { SignIn, SignUp, } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    title: "Configuración",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "login",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <ServerStackIcon {...icon} />,
        name: "Roles y permisos",
        path: "/roles",
        element: <Roles />,
      },
    ],
  },
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Usuarios",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notifications",
        path: "/notifications",
        element: <Notifications />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "no",
        path: "/usuarios",
        element: <Usuarios />,
      },
    ],
  },
  {
    title: "Compras",
    layout: "dashboard",
    pages: [
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "Gestión de compras",
        path: "/compras",
        element: <Compras />,
      },
      {
        icon: <ServerStackIcon {...icon} />,
        name: "Proveedores",
        path: "/proveedores",
        element: <Proveedores />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "Insumos",
        path: "/insumos",
        element: <Insumos />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "Categoria insumos",
        path: "/categoriainsumos",
        element: <CategoriaInsumos />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "Ficha Tecnica",
        path: "/fichatecnica",
        element: <FichaTecnica />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "Producto terminado",
        path: "/productoterminado",
        element: <ProductoTerminado />,
      },
    ],
  },
  {
    title: "Ventas",
    layout: "dashboard",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "Gestión de ventas",
        path: "/ventas",
        element: <Ventas />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "Clientes",
        path: "/clientes",
        element: <Clientes />,
      },
      {
        icon: <ServerStackIcon {...icon} />,
        name: "Pedidos",
        path: "/pedidos",
        element: <Pedidos />,
      },
    ],
  },
];

export default routes;
