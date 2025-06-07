import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

type CardRootProps = {
    children: React.ReactNode;
    style?: ViewStyle;
};

export default function CardRoot({ children, style }: CardRootProps) {
    return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    }
});