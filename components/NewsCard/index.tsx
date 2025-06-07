import { Image, View } from 'react-native';
import { Card } from '../common/Card';
import { Articles } from '@/types/articles';
import EvilIcons from '@expo/vector-icons/EvilIcons';

interface NewsCardProps {
    article: Articles;
}

export default function NewsCard({ article }: NewsCardProps) {
    return (
        <View style={{ marginVertical: 20 }}>
            <Card.Root>
                <Card.Media>
                    <Image
                        source={{ uri: article.image || 'https://img.freepik.com/vetores-gratis/texto-grunge-de-noticias_460848-9369.jpg' }}
                        style={{ width: '100%', height: 200, borderRadius: 8 }}
                    />
                </Card.Media>
                <Card.Title text="" />
                <Card.Details details='' />
                <Card.Details details='' />
                <Card.Footer>
                    <View style={{ flexDirection: 'row', justifyContent: "flex-end", marginTop: 8 }}>
                        <EvilIcons name="heart" size={24} color="black" />
                    </View>
                </Card.Footer>
            </Card.Root>
        </View>
    );
}
