import React from 'react';
import { View, StyleSheet, } from 'react-native';

type CardMediaProps = {
  children: React.ReactNode;
};

export default function CardMedia({ children }: CardMediaProps) {
  return <View style={styles.media}>{children}</View>;
}

const styles = StyleSheet.create({
  media: {
    marginBottom: 12,
  }
});
