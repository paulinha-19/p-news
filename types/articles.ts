export type Articles = {
    title: string;
    description: string;
    publishedAt: string;
    url: string;
    image: string;
    source: {
        name: string;
        url: string;
    };
}

export interface ArticlesData {
    totalArticles: number;
    articles: Articles[];
}