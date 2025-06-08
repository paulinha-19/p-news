import React, { useState } from 'react';
import { Image, View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Card } from '../common/Card';
import { Articles } from '@/types/articles';
import { useSelectedArticle } from '@/store/useSelectedArticle';
import { useFavoriteStore } from '@/store/useFavoriteStore';

interface NewsCardProps {
    article: Articles;
}

export default function NewsCard({ article }: NewsCardProps) {
    const router = useRouter();
    const { setSelectedArticle } = useSelectedArticle();
    const { toggleFavorite, isFavorite } = useFavoriteStore();
    const [imageError, setImageError] = useState(false);

    const handlePress = () => {
        setSelectedArticle(article);
        router.push('/home/news-details');
    };

    return (
        <View style={{ marginVertical: 20 }}>
            <Card.Root>
                <Pressable onPress={handlePress}>
                    <Card.Media>
                        <Image
                            source={{
                                uri:
                                    !imageError && article.image?.trim()
                                        ? article.image
                                        : 'https://img.freepik.com/vetores-gratis/texto-grunge-de-noticias_460848-9369.jpg',
                            }}
                            style={{ width: '100%', height: 200, borderRadius: 8 }}
                            onError={() => setImageError(true)}
                        />
                    </Card.Media>
                    <Card.Title text={article.title} />
                    <Card.Details details={`${article.source.name}`} />
                    <Card.Details details={`${article.formattedDate} às ${article.formattedTime}`} style={{ fontSize: 10 }} />
                </Pressable>
                <Card.Footer>
                    <Pressable onPress={() => toggleFavorite(article)} style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 8 }}>
                        <AntDesign
                            name={isFavorite(article) ? 'heart' : 'hearto'}
                            size={20}
                            color={isFavorite(article) ? 'red' : 'black'}
                        />
                    </Pressable>
                </Card.Footer>
            </Card.Root>
        </View>
    );
}
