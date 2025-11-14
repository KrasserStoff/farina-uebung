import { useEffect, useState } from "react";
import { fetchNews } from "../components/functions";
import NewsForm, { type News } from "../components/NewsForm";

export default function Home() {
	const [news, setNews] = useState<Array<News> | undefined>(undefined);

	useEffect(() => {
		// Fetches news data from the server and updates the state
		fetchNews().then((data) => {
			console.log(data);
			// State aktualisieren → NewsForm wird gerendert aber von data.news zu data geändert keine ideale lösung
			setNews(data);
		});
	}, []);

	// Loading info when news is undefined
	if (!news) {
		return <p>Lade News...</p>;

	}

	return (
		// TODO: Display the krasserstoff.com logo
		<main style={{
			fontFamily: '"Instrument Sans", "Instrument Sans Fallback", sans-serif',
			maxWidth: "80%", margin: "0 auto", padding: "2rem"}}>
			<h1  style={{ textAlign: "center" }}>krasserstoff.com x Farina</h1>
			<NewsForm news={news} />
		</main>
	);
}
