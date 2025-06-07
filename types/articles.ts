export type Articles = {
    title: string;
    description: string;
    content: string;
    url: string;
    image: string;
    publishedAt: string;
    source: {
        name: string;
        url: string;
    };
    formattedDate?: string;
    formattedTime?: string;
}

export interface ArticlesData {
    totalArticles: number;
    articles: Articles[];
}