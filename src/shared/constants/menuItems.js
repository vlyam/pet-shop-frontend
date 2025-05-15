import { nanoid } from "nanoid";

const menuItems = [
    {
        id: nanoid(),
        href: "/",
        text: "Main Page"
    },
    {
        id: nanoid(),
        href: "/categories",
        text: "Categories"
    },
    {
        id: nanoid(),
        href: "/all-products",
        text: "All products"
    },
    {
        id: nanoid(),
        href: "/all-sales",
        text: "All sales"
    },
];

export default menuItems;