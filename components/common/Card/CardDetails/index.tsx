import { View, StyleSheet, Text, TextStyle } from "react-native";

type CardDetailsProps = {
    details: string;
    style?: TextStyle;
};

export default function CardDetails({ details, style }: CardDetailsProps) {
    return (
        <View style={styles.detailsContainer}>
            <Text style={[styles.details, style]}>{details}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    detailsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 8,
    },
    details: {
        fontSize: 12
    }
});