import { useState } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import { useTopHeadLinesNews } from '@/hooks/useTopHeadLinesNews';
import { NewsCard } from '@/components';
import { FilterByCategory } from '@/components/FIlterByCategory';

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState('general');
  const { visibleArticles, isLoading, hasMore, loadMore } = useTopHeadLinesNews(selectedCategory);

  return (
    <View style={{ flex: 1 }}>
      <FilterByCategory selected={selectedCategory} onSelect={setSelectedCategory} />
      <FlatList
        data={visibleArticles}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => <NewsCard article={item} />}
        onEndReached={() => {
          if (hasMore && !isLoading) loadMore();
        }}
        onEndReachedThreshold={0.8}
        ListFooterComponent={
          isLoading ? (
            <View style={styles.loader}>
              <ActivityIndicator size="large" />
            </View>
          ) : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
