import { Stack } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Pressable, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

export default function HomeStack() {
    const router = useRouter();
    return (
        <Stack screenOptions={{ headerShown: true }}>
            <Stack.Screen
                name="index"
                options={{
                    headerTintColor: "white",
                    headerTitleAlign: "left",
                    headerTitle: "",
                    headerStyle: { backgroundColor: Colors.light.tint },
                    headerLeft: () => (
                        <Image
                            source={require('../../../assets/images/logo-1.png')}
                            style={{ width: 60, height: 60 }}
                            resizeMode="contain"
                        />
                    ),
                    headerRight: () => (
                        <Pressable onPress={() => router.push('/(tabs)/home/search')}>
                            <Ionicons name="search-outline" size={20} color={Colors.dark.text} />
                        </Pressable>
                    ),
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
            <Stack.Screen
                name="search"
                options={{
                    headerBackTitle: "Voltar",
                    headerTitleAlign: "left",
                    headerTitle: "",
                    headerTitleStyle: { fontSize: 20 }, headerTintColor: "white", headerStyle: { backgroundColor: Colors.light.tint }
                }}
            />
        </Stack>
    );
}
