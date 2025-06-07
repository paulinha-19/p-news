import { create } from 'zustand';
import { Articles } from '@/types/articles';

type SelectedArticleStore = {
    selectedArticle: Articles | null;
    setSelectedArticle: (article: Articles) => void;
    clearSelectedArticle: () => void;
};

export const useSelectedArticle = create<SelectedArticleStore>((set) => ({
    selectedArticle: null,
    setSelectedArticle: (article) => set({ selectedArticle: article }),
    clearSelectedArticle: () => set({ selectedArticle: null }),
}));
