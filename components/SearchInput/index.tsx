import { View, TextInput, StyleSheet, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface SearchInputProps {
    value: string;
    onChangeText: (text: string) => void;
    onPress: () => void;
}

export function SearchInput({ value, onChangeText, onPress }: SearchInputProps) {
    return (
        <View style={styles.inputWrapper}>
            <TextInput
                placeholder="Pesquisar notícias..."
                value={value}
                onChangeText={onChangeText}
                onSubmitEditing={onPress}
                returnKeyType="search"
                style={styles.input}
            />
            <Pressable onPress={onPress} style={styles.icon}>
                <Ionicons name="search" size={20} color="#888" />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    inputWrapper: {
        flexDirection: 'row',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
        paddingHorizontal: 12,
    },
    input: {
        flex: 1,
        paddingVertical: 8,
        paddingRight: 32,
    },
    icon: {
        position: 'absolute',
        right: 12,
    },
});
