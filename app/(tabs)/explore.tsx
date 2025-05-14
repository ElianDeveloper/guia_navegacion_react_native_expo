import { ThemedText } from '@/components/ThemedText';
import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>
        Ejemplo de Grupos (folders) y Rutas (routes)
      </ThemedText>
      <ThemedText style={styles.text}>
        Este archivo está en el grupo <ThemedText style={{ fontWeight: 'bold' }}>(tabs)</ThemedText>.
        Todas las rutas dentro de <ThemedText style={{ fontWeight: 'bold' }}>app/(tabs)/</ThemedText> comparten el mismo layout de pestañas.
      </ThemedText>
      <ThemedText style={styles.text}>
        Puedes navegar entre rutas de este grupo sin que el nombre del grupo aparezca en la URL.
      </ThemedText>
      <Link href="/home" style={styles.button}>
        <ThemedText style={styles.buttonText}>Ir a Home (fuera del grupo)</ThemedText>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#f4511e',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
