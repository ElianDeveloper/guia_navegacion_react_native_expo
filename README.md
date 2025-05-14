# Navegación en Expo Router (React Native)

Este proyecto utiliza **Expo Router** para manejar la navegación de manera moderna y flexible en React Native. Aquí encontrarás una guía completa sobre cómo está estructurada la navegación, ejemplos prácticos y explicaciones de cada concepto clave.

---

## 1. Estructura principal y uso del Stack en `_layout.tsx`

El archivo `app/_layout.tsx` define la estructura global de navegación usando un **Stack Navigator**. Aquí se configuran los grupos principales, la pantalla de inicio y la pantalla de error:

```tsx
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) return null;

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName="home">
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ animation: "fade" }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
```

- **Stack Navigator:** Permite la navegación tipo pila (push/pop) entre pantallas.
- **initialRouteName:** Define la pantalla inicial.
- **Grupos:** `(auth)` y `(tabs)` son carpetas especiales para agrupar rutas.

---

## 2. Grupos (folders) y rutas (routes)

### ¿Qué son los grupos?
- Carpetas con paréntesis, como `(tabs)` o `(auth)`, que agrupan rutas y comparten layouts.
- No afectan la URL, pero permiten organización y layouts compartidos.

### Ejemplo de estructura:
```
app/
  (auth)/
    login.tsx
    register.tsx
    _layout.tsx
  (tabs)/
    index.tsx
    explore.tsx
    _layout.tsx
  home.tsx
  stack-demo.tsx
  perfil/[id].tsx
  _layout.tsx
  +not-found.tsx
```

### Ejemplo de navegación entre grupos:
```tsx
<Link href="/(tabs)">Ir a Tabs</Link>
<Link href="/(auth)/login">Ir a Login</Link>
```

---

## 3. Navegación por parámetros (Query Params)

Puedes enviar parámetros a una pantalla usando la URL (query string):

### Enviar parámetros:
```tsx
router.push({
  pathname: "/stack-demo",
  params: { nombre: "Juan", edad: "25" },
});
```

### Recibir parámetros:
```tsx
import { useLocalSearchParams } from "expo-router";
const { nombre, edad } = useLocalSearchParams();
```

### Ejemplo visual:
- Navegar a `/stack-demo?nombre=Juan&edad=25`
- Útil para filtros, configuraciones, datos opcionales.

---

## 4. Rutas dinámicas

Permiten que una parte de la URL sea variable, ideal para IDs, slugs, etc.

### Definir una ruta dinámica:
Archivo: `app/perfil/[id].tsx`
```tsx
import { useLocalSearchParams } from "expo-router";
const { id } = useLocalSearchParams();
```

### Navegar a una ruta dinámica:
```tsx
router.push({ pathname: "/perfil/[id]", params: { id: "45" } });
```
- Navegará a `/perfil/45` y mostrará el ID recibido.

---

## 5. Diferencia entre rutas dinámicas y parámetros

- **Rutas dinámicas:**
  - El parámetro es parte de la URL (ej: `/perfil/45`).
  - Se usa para identificar recursos únicos (usuarios, productos, etc).
  - Se define con archivos `[param].tsx`.
- **Parámetros (query params):**
  - Se agregan después de `?` (ej: `/stack-demo?nombre=Juan`).
  - Son opcionales y útiles para filtros, configuraciones, etc.

---

## 6. Ejemplo de navegación por pila (Stack Navigation)

- Puedes navegar a una pantalla y regresar usando el stack:

```tsx
// En home.tsx
<Pressable onPress={() => router.push("/stack-demo")}>Ir a pantalla de pila</Pressable>

// En stack-demo.tsx
<Pressable onPress={() => router.back()}>Regresar</Pressable>
```

---

## 7. Hooks y componentes útiles

- **useRouter:** Navegación imperativa (push, replace, back, etc).
- **Link:** Navegación declarativa en JSX.
- **useLocalSearchParams:** Acceso a parámetros de la URL (dinámicos y query params).

---

## 8. Buenas prácticas

- Usa rutas dinámicas para recursos únicos.
- Usa query params para filtros y datos opcionales.
- Organiza tu app en grupos para layouts y flujos separados.
- Usa el stack para flujos tipo wizard o navegación profunda.

---

## 9. Recursos adicionales

- [Documentación oficial de Expo Router](https://docs.expo.dev/versions/latest/sdk/router/)

---

