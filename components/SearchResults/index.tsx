import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { NewsCard } from '@/components';
import { SearchFallback } from '../SearchFallback';
import { Articles } from '@/types/articles';

interface SearchResultsProps {
    results: Articles[];
    loading: boolean;
    hasSearch: boolean;
    lastSearch: string;
}

export function SearchResults({ results, loading, hasSearch, lastSearch }: SearchResultsProps) {
    if (!hasSearch) return <SearchFallback message="Insira palavras-chave para encontrar notícias." />;
    if (loading) return <SearchFallback loading={loading} />;
    if (results.length === 0) return <SearchFallback message={`Nenhuma notícia encontrada para "${lastSearch}".`} />;

    return (
        <FlatList
            data={results}
            keyExtractor={(item) => `${item.title}`}
            renderItem={({ item }) => <NewsCard article={item} />}
            contentContainerStyle={styles.list}
        />
    );
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    fallback: {
        textAlign: 'center',
        fontSize: 16,
        color: '#777',
    },
    list: {
        gap: 12,
        paddingBottom: 24,
    },
});
