import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [active, setActive] = useState();
    const [openBurger, setOpenBurger] = useState(false);
    const [sticky, setSticky] = useState(false);
    const [stickyAlt, setStickyAlt] = useState(false);

    const scrollSticky = () => {
        if ((window, scrollY > 100)) {
            setSticky(true);
        } else if ((window, scrollY > 20)) {
            setStickyAlt(true);
        } else {
            setSticky(false);
            setStickyAlt(false);
            // setOpenBurger(false)
        }
    };
    window.addEventListener("scroll", scrollSticky);

    const navLinks = [
        {
            id: "about",
            title: "About",
        },
        {
            id: "works",
            title: "Works",
        },
        {
            id: "teams",
            title: "Teams",
        },
        {
            id: "contact",
            title: "Contact",
        },
    ];

    return (
        <nav className="">
            <motion.div
                animate={{ opacity: !stickyAlt ? 1 : 0 }}
                className={`${
                    !sticky ? "fixed" : "hidden"
                } w-full h-[55px] flex  backdrop-blur-sm bg-secondary/30 shadow-xl items-center justify-between mx-auto px-20 gap-2 z-10 transition-all`}
            >
                <Link
                    to="/"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <h1 className="text-xl">DO & MI</h1>
                </Link>

                <div className="relative sm:flex hidden ">
                    <ul className="flex gap-10">
                        {navLinks.map((Link) => (
                            <li
                                key={Link.id}
                                className={`${
                                    active === Link.title
                                        ? "text-primary"
                                        : "text-white "
                                } hover:text-primary underlines font-medium cursor-pointer `}
                                onClick={() => {
                                    setActive(Link.title);
                                }}
                            >
                                <a href={`#${Link.id}`}>{Link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="lg:flex hidden">
                    <motion.button
                        className=" border-2 rounded-l-full px-2"
                        whileHover={{ opacity: 0.5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <a href="https://haquukk.github.io/isTestWeb/">
                            Get in Touch
                        </a>
                    </motion.button>
                </div>

                <div className="lg:hidden">
                    <motion.div
                        className={`${
                            openBurger ? "open" : "closed"
                        } flex fixed right-10 top-3 burger-menu z-50`}
                        onClick={() => setOpenBurger(!openBurger)}
                        whileHover={{ opacity: 0.8 }}
                        whileTap={{ scale: 0.7 }}
                    >
                        <div class="line line-1"></div>
                        <div class="line line-2"></div>
                    </motion.div>
                </div>
            </motion.div>

            <div
                className={`${openBurger ? "open" : "closed"} ${
                    sticky ? " flex fixed" : "hidden"
                } right-10 top-10 bg-[#2c4c82] rounded-full burger-menu z-40 `}
                onClick={() => setOpenBurger(!openBurger)}
            >
                <div class="line line-1"></div>
                <div class="line line-2"></div>
            </div>

            <motion.div
                animate={{ opacity: openBurger ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                className={`${
                    openBurger
                        ? "bg-secondary h-screen w-full fixed  top-0 right-0 "
                        : "hidden"
                } ${sticky ? "" : "lg:hidden"} z-30`}
            >
                <div className="flex flex-col items-center justify-center h-[100%] mx-auto p-5 gap-10 sm:text-7xl text-5xl ">
                    <Link
                        to="/"
                        onClick={() => {
                            setOpenBurger(false);
                            setActive("");
                            window.scrollTo(0, 0);
                        }}
                    >
                        <h className="">DO & MI</h>
                    </Link>

                    <ul className="flex flex-col gap-3 text-center">
                        {navLinks.map((Link) => (
                            <li
                                key={Link.id}
                                className={`${
                                    active === Link.title
                                        ? "text-primary"
                                        : "text-white "
                                } hover:text-primary underlines font-medium cursor-pointer `}
                                onClick={() => {
                                    setActive(Link.title), setOpenBurger(false);
                                }}
                            >
                                <a href={`#${Link.id}`}>{Link.title} </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </nav>
    );
};

export default Navbar;
