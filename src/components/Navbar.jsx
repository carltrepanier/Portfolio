/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

export default function Navbar() {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);
	const [showScrollButton, setShowScrollButton] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScroll = () => {
		const position = window.scrollY;
		setScrollPosition(position);

		if (position > 0) {
			setShowScrollButton(true);
		} else {
			setShowScrollButton(false);
		}
	};

	return (
		<>
			<nav
				className={`${
					styles.paddingX
				} w-full flex items-center py-5 fixed top-0 z-20 bg-primary ${
					scrollPosition > 0 ? "bg-primary bg-opacity-90" : "bg-transparent"
				}`}
			>
				<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
					<Link
						to="/"
						className="flex items-center gap-2"
						onClick={() => {
							setActive("");
							window.scrollTo(0, 0);
						}}
					>
						<img
							src="/logo.png"
							alt="logo"
							className="w-9 h-9 object-contain"
						/>
						<p className="text-white text-[18px] font-bold cursor-pointer">
							Carl Trépanier
							<span className="sm:block hidden text-secondary">
								| Développeur web
							</span>
						</p>
					</Link>

					<ul className="list-none hidden sm:flex flex-row gap-10">
						{navLinks.map((link) => (
							<li
								key={link.id}
								className={`${
									active === link.title ? "text-white" : "text-secondary"
								} hover:text-white text-[18px] font-medium cursor-pointer`}
								onClick={() => setActive(link.title)}
							>
								<a href={`#${link.id}`}>{link.title}</a>
							</li>
						))}
					</ul>

					<div className="sm:hidden flex flex-1 justify-end items-center">
						<img
							src={toggle ? close : menu}
							alt="menu"
							className="w-[28px] h[28px] object-contain cursor-pointer"
							onClick={() => setToggle(!toggle)}
						/>
						<div
							className={`${
								toggle ? "flex" : "hidden"
							} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
						>
							<ul className="list-none flex justify-end items-start flex-col gap-4">
								{navLinks.map((link) => (
									<li
										key={link.id}
										className={`${
											active === link.title ? "text-white" : "text-secondary"
										} font-poppins font-medium cursor-pointer text-[16px]`}
										onClick={() => {
											setToggle(!toggle);
											setActive(link.title);
										}}
									>
										<a href={`#${link.id}`}>{link.title}</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</nav>

			{showScrollButton && (
				<button
					className="fixed text-2xl bottom-8 right-8 bg-[#915eff] text-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer transition-opacity duration-300 opacity-80 hover:opacity-100 z-30"
					onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				>
					↑
				</button>
			)}
		</>
	);
}
