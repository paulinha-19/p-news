import {
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TouchableWithoutFeedback,
    Platform,
} from 'react-native';

interface ConfirmationModalProps {
    visible: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    title: string;
    message: string;
    textCancel?: string;
    textConfirm?: string;
}

export function ConfirmationModal({
    visible,
    onConfirm,
    onCancel,
    title,
    message,
    textCancel = "CANCELAR",
    textConfirm = "CONFIRMAR"
}: ConfirmationModalProps) {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onCancel}
        >
            <View style={styles.overlay} />
            <TouchableWithoutFeedback onPress={onCancel}>
                <View style={styles.centeredView}>
                    <TouchableWithoutFeedback>
                        <View style={styles.modalBox}>
                            <Text style={styles.modalText}>{title}</Text>
                            <Text style={styles.message}>{message}</Text>
                            <View style={styles.modalButtons}>
                                <TouchableOpacity
                                    style={[styles.button, styles.cancelButton]}
                                    onPress={onCancel}
                                >
                                    <Text style={styles.buttonText}>{textCancel}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.button, styles.confirmButton]}
                                    onPress={onConfirm}
                                >
                                    <Text style={styles.buttonText}>{textConfirm}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    modalBox: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        marginHorizontal: 20,
        width: "100%",
        maxWidth: 400,
        zIndex: 10,
        ...Platform.select({
            android: {
                elevation: 6, // sombra Android
            },
            ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 4,
            },
        })
    },
    modalText: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 8,
        textAlign: 'left',
        color: "#0F0F0F"
    },
    message: {
        fontSize: 14,
        color: '#0F0F0F',
        textAlign: 'left',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 18,
        gap: 16,
    },
    button: {
        paddingHorizontal: 16,
        borderRadius: 6,
    },
    cancelButton: {
    },
    confirmButton: {
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#4AACB3',
    },
});