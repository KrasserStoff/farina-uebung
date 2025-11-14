import { useState } from "react";
export type News = {
	id: string;
	title: string;
	order: number;
	text: string;
	href: string;
	imageSrc: string;
	imageWidth: number;
	imageHeight: number;
};

export default function NewsForm({ news }: { news: Array<News> }) {
	// State for selected News-ID
	const [selectedId, setSelectedId] = useState<string>("");
	// Sort News
	const sortedNews = [...news].sort((a, b) => a.order - b.order);
	// Find selected News
	const selectedNews = sortedNews.find((n) => n.id === selectedId);

	// Is called when the user selected something
	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedId(e.target.value);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				{/* TODO: Create a select that shows the news items and allows selecting one news item */}
				<label>Aktuelle News </label>
				<select value={selectedId} onChange={handleSelectChange}
						style={{ width: "100%", backgroundColor: "#F9F9F9", border:"transparent"}} >
					<option value="">Artist </option>
					{sortedNews.map((n) => (
						<option key={n.id} value={n.id}>
							{n.title}
						</option>
					)) }
				</select>
			</form>
			{/* TODO: Display the currently selected news item */}
			{selectedNews && (
				<div>
					<h2 style={{
						fontSize: "2rem",
						marginBottom: "0.5rem",
					}}
					>{selectedNews.title}</h2>
					<p>{selectedNews.text}</p>

					<img
						src={selectedNews.imageSrc}
						alt={selectedNews.title}
						style={{ width: "100%", height: "auto", cursor: "pointer", borderRadius: "5px", marginTop: "10px" }}
						onClick={() => window.open(selectedNews.href, "_blank")}
					/>


				</div>
			)}
		</>
	);
}
