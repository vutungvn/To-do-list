import { Link, NavLink } from "react-router-dom";
// import clsx from "clsx";

const menu = [
  { path: "/", label: "Dashboard" },
  { path: "/users", label: "Users" },
  { path: "/bookings", label: "Bookings" },
  { path: "/cabins", label: "Cabins" },
  { path: "/products", label: "Products" },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-gray-300 p-5 flex flex-col">
      <h1 className="text-xl font-bold text-white mb-6">Admin</h1>
      <nav className="flex flex-col gap-2">
        {/* {menu.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        // className={({ isActive }) =>
                        //     clsx(
                        //         "px-4 py-2 rounded-lg transition",
                        //         isActive
                        //             ? "bg-blue-600 text-white"
                        //             : "hover:bg-gray-800 hover:text-white"
                        //     )
                        // }
                    >
                        {item.label}
                    </NavLink>
                ))} */}
        {menu.map((item) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-blue-600 text-white px-4 py-2 rounded-lg transition"
                : "hover:bg-gray-800 hover:text-white px-4 py-2 rounded-lg transition"
            }
            key={item.path}
            to={item.path}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
