import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Link, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeSecondScreen() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];
  const router = useRouter();

  const handleNavigateWithParams = () => {
    router.push({
      pathname: "/stack-demo",
      params: { nombre: "Juan", edad: "25" },
    });
  };

  const handleNavigateToPerfil = () => {
    router.push({ pathname: "/perfil/[id]", params: { id: "45" } });
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>
        ¡Bienvenido a la Navegación!
      </Text>
      <Text style={[styles.subtitle, { color: theme.text }]}>
        Esta es una pantalla de ejemplo para demostrar cómo funciona la
        navegación con Expo Router
      </Text>

      {/* Sección 1: Grupos */}
      <Text style={styles.sectionTitle}>Navegación entre grupos</Text>
      <Link href="/(tabs)" style={styles.link}>
        <Text style={[styles.linkText]}>Navegar hacia (tabs)</Text>
      </Link>
      <Link href="/(auth)/login" style={styles.link}>
        <Text style={[styles.linkText]}>Navegar hacia (auth)</Text>
      </Link>

      <View style={styles.separator} />

      {/* Sección 2: Parámetros */}
      <Text style={styles.sectionTitle}>Navegación por parámetros</Text>
      <Pressable style={styles.link} onPress={handleNavigateWithParams}>
        <Text style={[styles.linkText]}>Navegar a pantalla con parámetros</Text>
      </Pressable>

      <View style={styles.separator} />

      {/* Sección 3: Rutas dinámicas */}
      <Text style={styles.sectionTitle}>Navegación con rutas dinámicas</Text>
      <Pressable style={styles.link} onPress={handleNavigateToPerfil}>
        <Text style={[styles.linkText]}>Navegar al perfil con ID 45</Text>
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
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 30,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
    backgroundColor: "#f4511e",
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  linkText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  button: {
    marginTop: 15,
    paddingVertical: 15,
    backgroundColor: "#f4511e",
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
    color: "#f4511e",
    textAlign: "center",
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    alignSelf: "stretch",
    marginVertical: 20,
  },
});
