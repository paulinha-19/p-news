import React, { useState } from 'react';
import { View, StyleSheet, Linking, ScrollView, Text } from 'react-native';
import { ConfirmationModal } from '@/components/common/ConfirmationModal';
import { NewsDetails } from '@/components';
import { useSelectedArticle } from '@/store/useSelectedArticle';

export default function NewsDetailsScreen() {
    const { selectedArticle } = useSelectedArticle();
    const [showModal, setShowModal] = useState(false);

    if (!selectedArticle) return <Text style={styles.fallbackError}>Notícia não encontrada</Text>;

    const handleConfirmLink = () => {
        Linking.openURL(selectedArticle.url);
        setShowModal(false);
    };

    return (
        <View>
            <ScrollView contentContainerStyle={styles.container}>
                <NewsDetails article={selectedArticle} onPress={() => setShowModal(true)} />
            </ScrollView>
            <ConfirmationModal
                visible={showModal}
                title="Link externo"
                message="Tem certeza que deseja ir para um link externo?"
                onConfirm={handleConfirmLink}
                onCancel={() => setShowModal(false)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        paddingBottom: 32,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 12,
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12
    },
    details: {
        fontSize: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    content: {
        fontSize: 14,
        lineHeight: 22,
        color: '#333',
        marginBottom: 20,
        textAlign: "justify"
    },
    button: {
        backgroundColor: '#273645',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    fallbackError: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
