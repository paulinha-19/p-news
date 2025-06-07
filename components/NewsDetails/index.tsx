import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Articles } from '@/types/articles';

interface NewsDetailsProps {
    article: Articles;
    onPress: () => void;
}

export function NewsDetails({ article, onPress }: NewsDetailsProps) {
    return (
        <View>
            <Image
                source={{
                    uri:
                        article.image?.trim() !== ''
                            ? article.image
                            : 'https://img.freepik.com/vetores-gratis/texto-grunge-de-noticias_460848-9369.jpg',
                }}
                style={styles.image}
                resizeMode="cover"
            />

            <View style={styles.detailsContainer}>
                <Text style={styles.details}>{article.source.name}</Text>
                <Text style={styles.details}>{`${article.formattedDate} às ${article.formattedTime}`}</Text>
            </View>

            <Text style={styles.title}>{article.title}</Text>

            <Text style={styles.content}>
                {article.content || article.description}
            </Text>

            <Pressable onPress={onPress} style={styles.button}>
                <Text style={styles.buttonText}>Link para a notícia original</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        marginBottom: 12,
        borderRadius: 8,
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    details: {
        fontSize: 10,
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
        textAlign: 'justify',
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
});
