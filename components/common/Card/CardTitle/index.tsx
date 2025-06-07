import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

type CardTitleProps = {
    text: string;
    style?: TextStyle;
};

export default function CardTitle({ text, style }: CardTitleProps) {
    return <Text style={[styles.title, style]}>{text}</Text>;
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
});
