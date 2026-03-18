import "./global.css"
import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { hideAsync, preventAutoHideAsync, setOptions } from 'expo-splash-screen'
import { Slot } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { SessionProvider } from "@/context/Authentication"
import { MyDarkTheme, MyLightTheme } from "@/components/ThemeColor";

export { ErrorBoundary } from 'expo-router';

// setOptions({
//   duration: 200,
//   fade: true,
// });

preventAutoHideAsync();

export default function RootLayout() {

  const colorScheme = useColorScheme();

  const [loaded, error] = useFonts({
    "SpaceMono": require('../assets/fonts/SpaceMono-Regular.ttf')
  });

  useEffect(() => {

    if (error) throw error;

    if (loaded) hideAsync()

  }, [error, loaded]);

  if (!loaded && !error) return null

  return (
    <SessionProvider>
      <ThemeProvider value={colorScheme === 'light' ? MyLightTheme : MyDarkTheme}>
        <Slot />
      </ThemeProvider>
    </SessionProvider>
  )
}

