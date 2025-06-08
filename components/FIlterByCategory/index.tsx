import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { icons } from '@/constants/Icons';

interface FilterByCategoryProps {
    selected: string;
    onSelect: (category: string) => void;
}

export function FilterByCategory({ selected, onSelect }: FilterByCategoryProps) {
    return (
        <View style={styles.wrapper}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {icons.map((cat) => {
                    const isActive = selected === cat.key;
                    const IconComponent = cat.iconComponent;

                    return (
                        <TouchableOpacity
                            key={cat.key}
                            onPress={() => onSelect(cat.key)}
                            style={[styles.button, isActive && styles.active]}
                            activeOpacity={0.8}
                        >
                            <View style={styles.content}>
                                <IconComponent
                                    name={cat.iconName}
                                    size={14}
                                    color={isActive ? 'white' : '#333'}
                                />
                                <Text style={[styles.label, isActive && styles.labelActive]}>{cat.label}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        paddingVertical: 12,
    },
    scrollContent: {
        paddingStart: 10,
        paddingEnd: 10,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 38,
        borderRadius: 19,
        backgroundColor: '#eee',
        marginRight: 10,
        paddingHorizontal: 12,
        overflow: 'hidden',
    },
    active: {
        backgroundColor: '#c40000',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    label: {
        fontSize: 14,
        color: '#333',
    },
    labelActive: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
