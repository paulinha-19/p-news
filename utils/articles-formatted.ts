import { Articles } from '@/types/articles';
import { formatDateTime } from './format-date-and-time';

/**
 * It receives an array of articles from the API and returns the formatted date/time.
 */
export function articlesFormatted(rawArticles: Articles[]): Articles[] {
  return rawArticles.map((article) => {
    const { formattedDate, formattedTime } = formatDateTime(article.publishedAt);
    return {
      ...article,
      formattedDate,
      formattedTime,
    };
  });
}
