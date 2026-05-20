import { useState, useEffect, useRef } from "react";
import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import Ticker from "../Components/Ticker";
// import About from "../Components/About";
import Experience from "../Components/Experience";
// import Formation from "../Components/Formation";
import Contact from "../Components/Contact";
import Projects from "../Components/Projects";
const Home = () => {
	const [active, setActive] = useState("About");
	function Cursor() {
		const dotRef = useRef(null);
		const glowRef = useRef(null);

		useEffect(() => {
			if (window.innerWidth <= 768) return;
			const move = (e) => {
				if (dotRef.current) {
					dotRef.current.style.left = e.clientX + "px";
					dotRef.current.style.top = e.clientY + "px";
				}
				if (glowRef.current) {
					glowRef.current.style.left = e.clientX + "px";
					glowRef.current.style.top = e.clientY + "px";
				}
			};
			window.addEventListener("mousemove", move);
			return () => window.removeEventListener("mousemove", move);
		}, []);
		if (window.innerWidth <= 768) return null;
		return (
			<>
				<div
					ref={dotRef}
					className="cursor cursor__dot"
					style={{ position: "fixed" }}
				/>
				<div ref={glowRef} className="cursor__glow" />
			</>
		);
	}
	//   function BgBlobs() {
	//   return (
	//     <div className="bg-blobs">
	//       <div className="bg-blobs__blob bg-blobs__blob--1" />
	//       <div className="bg-blobs__blob bg-blobs__blob--2" />
	//       <div className="bg-blobs__blob bg-blobs__blob--3" />
	//     </div>
	//   );
	// }
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("in-view");
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.5 },
		);

		document.querySelectorAll(".animate").forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);

	return (
		<>
			<Cursor />
			{/* <BgBlobs /> */}
			<Nav active={active} setActive={setActive} />
			<Hero />
			<Ticker />
			{/* <About /> */}
			<Experience />
			{/* <Formation /> */}
			<Projects />
			<Contact />
		</>
	);
};
export default Home;
