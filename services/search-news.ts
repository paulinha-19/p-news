import { api } from './api';
import { articlesFormatted } from '@/utils/articles-formatted';
import { Articles } from '@/types/articles';
import { APi_KEY } from '@/constants/setup';

export async function getSearchNews(query: string): Promise<Articles[]> {
    const response = await api.get(`search?q=${encodeURIComponent(query)}&lang=pt&country=br&apikey=${APi_KEY}`);

    return articlesFormatted(response.data.articles);
}
