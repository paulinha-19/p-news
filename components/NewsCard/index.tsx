import { Image, View, Pressable } from 'react-native';
import { Card } from '../common/Card';
import { Articles } from '@/types/articles';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useRouter } from 'expo-router';
import { useSelectedArticle } from '@/store/useSelectedArticle';

interface NewsCardProps {
    article: Articles;
}

export default function NewsCard({ article }: NewsCardProps) {
    const router = useRouter();
    const { setSelectedArticle } = useSelectedArticle();

    const handlePress = () => {
        setSelectedArticle(article);
        router.push('/home/news-details');
    };

    return (
        <Pressable onPress={handlePress}>
            <View style={{ marginVertical: 20 }}>
                <Card.Root>
                    <Card.Media>
                        <Image
                            source={{
                                uri:
                                    article.image?.trim() !== ''
                                        ? article.image
                                        : 'https://img.freepik.com/vetores-gratis/texto-grunge-de-noticias_460848-9369.jpg',
                            }}
                            style={{ width: '100%', height: 200, borderRadius: 8 }}
                        />
                    </Card.Media>
                    <Card.Title text={article.title} />
                    <Card.Details details={`${article.source.name}`} />
                    <Card.Details details={`${article.formattedDate} às ${article.formattedTime}`} style={{ fontSize: 10 }} />
                    <Card.Footer>
                        <View style={{ flexDirection: 'row', justifyContent: "flex-end", marginTop: 8 }}>
                            <EvilIcons name="heart" size={24} color="black" />
                        </View>
                    </Card.Footer>
                </Card.Root>
            </View>
        </Pressable>
    );
}
