import { Stack } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Pressable, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function HomeStack() {
    return (
        <Stack screenOptions={{ headerShown: true }}>
            <Stack.Screen
                name="index"
                options={{
                    headerTintColor: "white",
                    headerTitleAlign: "left",
                    headerTitle: "",
                    headerStyle: { backgroundColor: Colors.light.tint },
                    headerRight: () => (
                        <Pressable onPress={() => { }} style={{ marginRight: 16 }}>
                            <Ionicons name="search-outline" size={20} color={Colors.dark.text} />
                        </Pressable>
                    ),
                    headerLeft: () => (
                        <Image
                            source={require('../../../assets/images/logo-1.png')}
                            style={{ width: 60, height: 60, marginLeft: 16 }}
                            resizeMode="contain"
                        />
                    )
                }}
            />
            <Stack.Screen
                name="news-details"
                options={{
                    headerBackTitle: "Voltar",
                    headerTitleAlign: "left",
                    headerTitle: "",
                    headerTitleStyle: { fontSize: 20 }, headerTintColor: "white", headerStyle: { backgroundColor: Colors.light.tint },
                    headerRight: () => (
                        <Pressable onPress={() => { }} style={{ marginRight: 16 }}>
                            <Ionicons name="heart-outline" size={20} color="white" />
                        </Pressable>
                    ),
                }}
            />
        </Stack>
    );
}
