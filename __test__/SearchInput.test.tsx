import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { SearchInput } from "../components/SearchInput/index"

// Mocks
jest.mock('@expo/vector-icons/Ionicons', () => {
    const React = require('react');
    return {
        __esModule: true,
        default: ({ name, size, color }: any) => {
            return React.createElement('Ionicons', { name, size, color });
        },
    };
});
const mockOnChange = jest.fn();

describe('SearchInput component', () => {
    test('should render correctly the input with placeholder Pesquisar notícias...', () => {
        // Arrange
        const { getByPlaceholderText } = render(
            <SearchInput value="" onChangeText={() => { }} onPress={() => { }} />
        );

        // Act: without action

        // Assert
        const placeholder = getByPlaceholderText('Pesquisar notícias...');
        expect(placeholder).toBeTruthy();
    });

    test('should calls onChangeText when typing', () => {
        // Arrange
        const { getByPlaceholderText } = render(
            <SearchInput value="" onChangeText={mockOnChange} onPress={() => { }} />
        );

        const placeholder = getByPlaceholderText('Pesquisar notícias...');

        // Act
        fireEvent.changeText(placeholder, 'tecnologia');

        // Assert
        expect(mockOnChange).toHaveBeenCalledWith('tecnologia');
    });
    test('calls onPress when search icon is pressed', () => {
        // Arrange
        const { getByTestId } = render(
            <SearchInput value="" onChangeText={() => { }} onPress={mockOnChange} />
        );

        const id = getByTestId('search-button');

        // Act
        fireEvent.press(id);

        // Assert
        expect(mockOnChange).toHaveBeenCalled();
    });
});
