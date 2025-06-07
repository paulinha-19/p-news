import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

type CardSummaryProps = {
  text: string;
  style?: TextStyle;
};

export default function CardSummary({ text, style }: CardSummaryProps) {
  return <Text style={[styles.summary, style]}>{text}</Text>;
}

const styles = StyleSheet.create({
  summary: {
    fontSize: 14,
    color: '#444',
    marginBottom: 12,
  }
});
