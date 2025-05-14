import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>Pantalla de Registro (Grupo auth)</ThemedText>
      <Link href="/login" style={styles.button}>
        <ThemedText style={styles.buttonText}>Ir a Login</ThemedText>
      </Link>
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