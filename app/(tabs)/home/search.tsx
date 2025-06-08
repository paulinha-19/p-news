import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SearchInput } from '@/components';
import { SearchResults } from '@/components/SearchResults';
import { useSearch } from '@/hooks/useSearch';

export default function SearchScreen() {
    const {
        value,
        setValue,
        searchNews,
        results,
        loading,
        lastSearch,
        hasSearch
    } = useSearch();

    return (
        <View style={styles.container}>
            <SearchInput value={value} onChangeText={setValue} onPress={searchNews} />
            <SearchResults
                results={results}
                loading={loading}
                hasSearch={hasSearch}
                lastSearch={lastSearch}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
        backgroundColor: '#fff',
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginBottom: 16,
    },
    fallback: {
        textAlign: 'center',
        marginTop: 24,
        fontSize: 16,
        color: '#777',
    },
    list: {
        gap: 12,
        paddingBottom: 24,
    },
});
