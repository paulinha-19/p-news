import { FlatList, StyleSheet } from 'react-native';
import { NewsCard } from '@/components';
import { useFavoriteStore } from '@/store/useFavoriteStore';
import { MessageFallback } from '@/components/MessageFallback';

export default function FavoritesScreen() {
  const favorites = useFavoriteStore((state) => state.favorites);

  if (favorites.length === 0) return <MessageFallback message="Nenhuma notícia favoritada ainda" />

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.url}
      renderItem={({ item }) => <NewsCard article={item} />}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    gap: 12,
    padding: 16,
    paddingBottom: 24,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  empty: {
    fontSize: 16,
    color: '#666',
  },
});
