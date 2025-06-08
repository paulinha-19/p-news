import { api } from './api';
import { articlesFormatted } from '@/utils/articles-formatted';
import { Articles } from '@/types/articles';

export async function getSearchNews(query: string): Promise<Articles[]> {
    const response = await api.get(`search?q=${encodeURIComponent(query)}&lang=pt&country=br&apikey=faead60df17e303b0d0035414cc27ac0`);

    return articlesFormatted(response.data.articles);
}
