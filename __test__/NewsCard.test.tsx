import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import NewsCard from "../components/NewsCard"
import { Articles } from '../types/articles'

// Mocks
jest.mock('expo-router', () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
}));
jest.mock('../store/useSelectedArticle', () => ({
    useSelectedArticle: () => ({
        setSelectedArticle: jest.fn(),
    }),
}));
jest.mock('../store/useFavoriteStore', () => ({
    useFavoriteStore: () => ({
        toggleFavorite: jest.fn(),
        isFavorite: jest.fn(),
    }),
}));
jest.mock('@expo/vector-icons/AntDesign', () => {
  return {
    __esModule: true,
    default: () => null,
  };
});
jest.mock('@expo/vector-icons/Ionicons', () => {
  return {
    __esModule: true,
    default: () => null,
  };
});

const mockArticle: Articles = {
    title: 'Title 1',
    description: "Description 1",
    content: "Content 1",
    publishedAt: "01/01/2025T",
    image: 'https://fakeimage.com/news.jpg',
    source: { name: 'UOL', url: "" },
    formattedDate: '01/01/2025',
    formattedTime: '12:00',
    url: 'https://fakeurl.com',
};

describe('NewsCard component', () => {
    it('must render correctly, allow navigation and bookmarking', () => {
        // Arrange
        const { getByText, getByTestId } = render(<NewsCard article={mockArticle} />);

        const titleCard = getByText('Title 1');
        const sourceNameCard = getByText('UOL');
        const dateAndTimeCard = getByText('01/01/2025 às 12:00');
        const idCard = getByTestId('card-pressable');
        const idFavorites = getByTestId('favorite-button');

        // Assert
        expect(titleCard).toBeTruthy();
        expect(sourceNameCard).toBeTruthy();
        expect(dateAndTimeCard).toBeTruthy();

        // Act
        fireEvent.press(idCard);
        fireEvent.press(idFavorites);
    });
});
