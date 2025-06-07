import React from 'react';
import { View, StyleSheet, TextStyle, ViewStyle } from 'react-native';

type CardFooterProps = {
    children: React.ReactNode;
    style?: ViewStyle;
};

export default function CardFooter({ children, style }: CardFooterProps) {
    return (
        <View style={[styles.footerContainer, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        marginTop: 8,
    },
});
