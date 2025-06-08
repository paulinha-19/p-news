import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

interface SearchFallbackProps {
    message?: string;
    loading?: boolean;
}

export function SearchFallback({ message, loading }: SearchFallbackProps) {
    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" />
            ) : (
                <Text style={styles.fallback}>{message}</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
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
});
