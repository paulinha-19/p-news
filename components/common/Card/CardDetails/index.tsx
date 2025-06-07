import { View, StyleSheet, Text } from "react-native";

type CardDetailsProps = {
    details?: string;
};

export default function CardDetails({ details }: CardDetailsProps) {
    return (
        <View style={styles.detailsContainer}>
            <Text style={styles.details}>{details}</Text>
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