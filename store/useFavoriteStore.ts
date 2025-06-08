import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Articles } from '@/types/articles';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface FavoriteState {
    favorites: Articles[];
    toggleFavorite: (news: Articles) => void;
    isFavorite: (news: Articles) => boolean;
    clearFavorites: () => void;
}

export const useFavoriteStore = create<FavoriteState>()(
    persist(
        (set, get) => ({
            favorites: [],
            toggleFavorite: (news: Articles) => {
                const favorites = get().favorites;
                const foundFavorites = favorites.some((item) => item.url === news.url);
                const filteredFavorites = foundFavorites
                    ? favorites.filter((item) => item.url !== news.url)
                    : [...favorites, news];
                set({ favorites: filteredFavorites });
            },
            isFavorite: (article: Articles) => get().favorites.some((item) => item.url === article.url),
            clearFavorites: () => set({ favorites: [] }),
        }),
        {
            name: 'favorites-news',
            storage: createJSONStorage(() => AsyncStorage)
        }
    )
);
