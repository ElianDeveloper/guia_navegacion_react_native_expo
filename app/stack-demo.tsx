import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function StackDemoScreen() {
  const router = useRouter();
  const { nombre, edad } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Navegación por Pila</Text>
      <Text style={styles.subtitle}>
        Puedes regresar usando el botón físico o el botón de abajo.
      </Text>
      {nombre || edad ? (
        <Text style={styles.subtitle}>
          Parámetros recibidos: {nombre ? `Nombre: ${nombre}` : ""} {edad ? `Edad: ${edad}` : ""}
        </Text>
      ) : null}
      <Pressable style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Regresar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    color: "white",
  },
  button: {
    backgroundColor: "#f4511e",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
}); 