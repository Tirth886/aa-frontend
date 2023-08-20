import { IBlogs, IHeader } from "./types/"

export const BLOGFAKKER: IBlogs = [
    {
        id: 0,
        title: 'Post Title 1',
        meta: {
            title: "",
            description: "",
            image: "",
        },
        image: 'https://picsum.photos/seed/picsum/200/300',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 1,
        title: 'Post Title 2',
        meta: {
            title: "",
            description: "",
            image: "",
        },
        image: 'https://picsum.photos/seed/picsum/200/300',
        description: 'Nullam ut scelerisque elit, non tincidunt lectus.',
    },
    {
        id: 2,
        title: 'Post Title 3',
        meta: {
            title: "",
            description: "",
            image: "",
        },
        image: 'https://picsum.photos/seed/picsum/200/300',
        description: 'Vivamus vel ultrices lorem. Sed nec fringilla velit.',
    },
]

export const HEADERFAKKER: IHeader = [
    {
        id: 0,
        isSubMenu: false,
        menu: "Home",
        redirection: "/",
        subMenu: []
    },
    {
        id: 0,
        isSubMenu: true,
        menu: "About Us",
        redirection: "/about-us",
        subMenu: [
            {
                id: 0,
                isSubMenu: false,
                menu: "Opportunities",
                redirection: "/about-us",
                subMenu: []
            },
            {
                id: 0,
                isSubMenu: false,
                menu: "Services",
                redirection: "/about-us",
                subMenu: []
            },
            {
                id: 0,
                isSubMenu: false,
                menu: "Partners",
                redirection: "/about-us",
                subMenu: []
            },
        ]
    },
    {
        id: 0,
        isSubMenu: false,
        menu: "Blogs",
        redirection: "/blogs",
        subMenu: []
    },
    {
        id: 0,
        isSubMenu: false,
        menu: "Exhibitors",
        redirection: "/exhibitors",
        subMenu: [
        ]
    },
    {
        id: 0,
        isSubMenu: false,
        menu: "Visitors",
        redirection: "/visitors",
        subMenu: []
    },
    {
        id: 0,
        isSubMenu: false,
        menu: "Media",
        redirection: "/media",
        subMenu: []
    },
]