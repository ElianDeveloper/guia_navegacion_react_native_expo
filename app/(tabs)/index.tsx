import { ThemedText } from '@/components/ThemedText';
import { Link, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>Pantalla Principal</ThemedText>
      <ThemedText style={styles.subtitle}>
        Esta es la pantalla principal dentro de las pestañas
      </ThemedText>
      
      <View style={styles.buttonContainer}>
        <Link href="/(auth)/register" style={styles.button}>
          <Text style={styles.buttonText}>Navegar a Register con Link</Text>
        </Link>

        <Pressable 
          style={styles.button} 
          onPress={() => router.push('/home')}
        >
          <Text style={styles.buttonText}>Regresar a Home con useRouter</Text>
        </Pressable>
      </View>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    gap: 15,
  },
  button: {
    backgroundColor: '#f4511e',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
