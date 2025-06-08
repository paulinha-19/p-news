import { NewsCard } from '@/components';
import { Articles } from '@/types/articles';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { MessageFallback } from '../MessageFallback';

interface SearchResultsProps {
    results: Articles[];
    loading: boolean;
    hasSearch: boolean;
    lastSearch: string;
}

export function SearchResults({ results, loading, hasSearch, lastSearch }: SearchResultsProps) {
    if (!hasSearch) return <MessageFallback message="Insira palavras-chave para encontrar notícias." />;
    if (loading) return <MessageFallback loading={loading} />;
    if (results.length === 0) return <MessageFallback message={`Nenhuma notícia encontrada para "${lastSearch}".`} />;

    return (
        <FlatList
            data={results}
            keyExtractor={(item, index) => `${item.title}-${index}`}
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
