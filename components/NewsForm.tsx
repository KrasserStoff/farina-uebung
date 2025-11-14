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
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				{/* TODO: Create a select that shows the news items and allows selecting one news item */}
			</form>
			{/* TODO: Display the currently selected news item */}
		</>
	);
}
