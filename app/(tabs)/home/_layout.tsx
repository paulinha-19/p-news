import { Stack } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Pressable, Image } from "react-native";
import { useRouter } from "expo-router";
import { useFavoriteStore } from "@/store/useFavoriteStore";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useSelectedArticle } from "@/store/useSelectedArticle";

export default function HomeStack() {
    const router = useRouter();
    const { toggleFavorite, isFavorite } = useFavoriteStore();
    const { selectedArticle } = useSelectedArticle();

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
                        <AntDesign onPress={() => router.push('/(tabs)/home/search')} name="search1" size={22} color={Colors.dark.text} />
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
                    headerRight: () =>
                        selectedArticle && (
                            <Pressable onPress={() => toggleFavorite(selectedArticle)} style={{ marginRight: 16 }}>
                                <AntDesign
                                    name={isFavorite(selectedArticle) ? 'heart' : 'hearto'}
                                    size={20}
                                    color="white"
                                />
                            </Pressable>
                        )
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
