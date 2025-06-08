import { useState } from 'react';
import { Articles } from '@/types/articles';
import { getSearchNews } from '@/services/search-news';

export function useSearch() {
    const [value, setValue] = useState('');
    const [results, setResults] = useState<Articles[]>([]);
    const [loading, setLoading] = useState(false);
    const [hasSearch, setHasSearch] = useState(false);
    const [lastSearch, setLastSearch] = useState('');

    async function searchNews() {
        const searchTerm = value.trim();
        setHasSearch(true);
        setLastSearch(searchTerm);

        if (searchTerm === '') {
            setResults([]);
            return;
        }

        setLoading(true);
        getSearchNews(searchTerm)
            .then(setResults)
            .catch(() => setResults([]))
            .finally(() => setLoading(false));
    };

    return {
        value,
        setValue,
        results,
        loading,
        hasSearch,
        lastSearch,
        searchNews,
    };
}
