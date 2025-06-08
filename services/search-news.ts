import { api } from './api';
import { articlesFormatted } from '@/utils/articles-formatted';
import { Articles } from '@/types/articles';

export async function getSearchNews(query: string): Promise<Articles[]> {
    const response = await api.get(
        `/search?q=${encodeURIComponent(query)}&lang=pt&country=br&apikey=8f09de77cad3d4dbc608b4e6ca413029`
    );

    return articlesFormatted(response.data.articles);
}
