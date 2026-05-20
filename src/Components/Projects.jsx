import { PROJECTS } from "../Data";

const CARD_GRADIENTS = [
	"linear-gradient(135deg, #a855f7, #ec4899)",
	"linear-gradient(135deg, #6366f1, #a855f7)",
	"linear-gradient(135deg, #ec4899, #f97316)",
	"linear-gradient(135deg, #06b6d4, #6366f1)",
];

const CARD_GLOWS = [
	"rgba(168, 85, 247, 0.25)",
	"rgba(99, 102, 241, 0.25)",
	"rgba(236, 72, 153, 0.25)",
	"rgba(6, 182, 212, 0.25)",
];

// const STATUSES = ["Live", "In Progress", "Completed", "Live"];

const Projects = () => {
	const handleMouseMove = (e, card) => {
		const rect = card.getBoundingClientRect();
		const x = ((e.clientX - rect.left) / rect.width) * 100;
		const y = ((e.clientY - rect.top) / rect.height) * 100;
		card.style.setProperty("--mx", `${x}%`);
		card.style.setProperty("--my", `${y}%`);
	};

	return (
		<section id="projects" className="section">
			<h2 className="section-title animate">
				Projects<span className="dot">.</span>
			</h2>

			<div className="projects__grid">
				{PROJECTS.map((item, i) => (
					<a
						key={i}
						href={item.link}
						target="_blank"
						rel="noopener noreferrer"
						className="projects__link-wrapper"
            style={{ textDecoration: "none" }}>
						<div
							key={i}
							className={`projects__card animate ${i === 0 ? "projects__card--featured" : ""}`}
							style={{
								animationDelay: `${i * 0.1}s`,
								"--glow-color": CARD_GLOWS[i % CARD_GLOWS.length],
							}}
							onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}>
							<div
								className="projects__card-border"
								style={{
									background: CARD_GRADIENTS[i % CARD_GRADIENTS.length],
								}}
							/>
							<span className="projects__watermark">0{i + 1}</span>

							<div className="projects__card-top">
								<span
									className="projects__status"
									style={{
										"--status-color": CARD_GLOWS[i % CARD_GLOWS.length],
									}}>
									<span
										className="projects__status-dot"
										style={{
											background: CARD_GRADIENTS[i % CARD_GRADIENTS.length],
										}}
									/>
                  {item.status}
								</span>
								<span className="projects__arrow">↗</span>
							</div>

							<h3 className="projects__title">{item.title}</h3>
							<p className="projects__desc">{item.desc}</p>

							<div className="projects__footer">
								<div className="projects__tags">
									{item.tags.map((tag) => (
										<span
											key={tag}
											className="projects__tag"
											style={{
												"--tag-gradient":
													CARD_GRADIENTS[i % CARD_GRADIENTS.length],
											}}>
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>
					</a>
				))}
			</div>
		</section>
	);
};

export default Projects;
