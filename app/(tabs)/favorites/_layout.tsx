import { Stack } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function FavoritesStack() {
    return (
        <Stack screenOptions={{ headerShown: true }}>
            <Stack.Screen
                name="index"
                options={{
                    headerTintColor: "white",
                    headerTitleAlign: "left",
                    headerTitle: "Favoritos",
                    headerStyle: { backgroundColor: Colors.light.tint }
                }}
            />
        </Stack>
    );
}
