import { api } from '@/services/api';
import { Articles, ArticlesData } from '@/types/articles';
import { articlesFormatted } from '@/utils/articles-formatted';
import { useEffect, useState } from 'react';

const ITEMS_PER_PAGE = 10;

export function useTopHeadLinesNews(category: string) {
    const [fetchedArticles, setFetchedArticles] = useState<Articles[]>([]);
    const [visibleArticles, setVisibleArticles] = useState<Articles[]>([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const hasMore = visibleArticles.length < fetchedArticles.length;

    const getArticles = async () => {
        setIsLoading(true);
        setFetchedArticles([]);
        setVisibleArticles([]);
        setPage(1);

        const response = await api.get<ArticlesData>(`top-headlines?category=${category}&lang=pt&country=br&max=100&apikey=faead60df17e303b0d0035414cc27ac0`);

        const formattedArticles = articlesFormatted(response.data.articles);
        setFetchedArticles(formattedArticles);
        setVisibleArticles(formattedArticles.slice(0, ITEMS_PER_PAGE));
        setIsLoading(false);
    };


    const loadMore = () => {
        if (isLoading || !hasMore) return;

        const nextPage = page + 1;
        const start = (nextPage - 1) * ITEMS_PER_PAGE;
        const nextArticles = fetchedArticles.slice(start, start + ITEMS_PER_PAGE);

        setVisibleArticles((prev) => [...prev, ...nextArticles]);
        setPage(nextPage);
    };

    useEffect(() => {
        getArticles();
    }, [category]);
    return { visibleArticles, isLoading, hasMore, loadMore };
}
