import { gql } from "@apollo/client";
import client from "../lib/apolloClient";
import type { News } from "./NewsForm";

export async function fetchNews(): Promise<{ news: News[] }> {
	console.log("fetch data");
	const result = await client.query({
		query: GET_NEWS,
	});
	console.log("data", result);
	// @ts-ignore: result.data.news.nodes may not be typed
	if (!result.data || !result.data.news) {
		throw new Error("No data received from GraphQL API");
	}
	// @ts-ignore: result.data.news.nodes may not be typed
	return result.data.news.nodes.map((node: any) => ({
		id: node.id,
		title: node.title,
		order: node.order,
		text: node.text,
		href: node.url,
		imageSrc: node.image.url,
		imageWidth: node.image.width,
		imageHeight: node.image.height,
	}));
}

const GET_NEWS = gql`
	query BandshopNews {
		news(categories: ["regular"], first: 10) {
			nodes {
				url
				id
				title
				order
				text
				image {
					width
					height
					url: url(width: 1920)
				}
			}
		}
	}
`;
