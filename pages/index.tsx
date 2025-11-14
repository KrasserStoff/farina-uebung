import { useEffect, useState } from "react";
import { fetchNews } from "../components/functions";
import NewsForm, { type News } from "../components/NewsForm";

export default function Home() {
	const [news, setNews] = useState<Array<News> | undefined>(undefined);

	useEffect(() => {
		// Fetches news data from the server and updates the state
		fetchNews().then((data) => {
			console.log(data);
			setNews(data.news);
		});
	}, []);

	// TODO: Loading info when news is undefined

	return (
		// TODO: Display the krasserstoff.com logo and use a more appropriate font
		<main>
			<h1>krasserstoff.com x Farina</h1>
			<NewsForm news={news} />
		</main>
	);
}
