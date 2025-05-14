import { ThemedText } from "@/components/ThemedText";
import { Link, useRouter } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>
        Pantalla de Login (Grupo auth)
      </ThemedText>
      <Pressable style={styles.button} onPress={() => router.push("/register")}>
        <ThemedText style={styles.buttonText}>Ir a Register</ThemedText>
      </Pressable>
      <Link href="/home" style={styles.button}>
        <ThemedText style={styles.buttonText}>Salir a Home</ThemedText>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  button: {
    backgroundColor: "#f4511e",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
