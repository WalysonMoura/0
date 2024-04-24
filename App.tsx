import './src/translation';

import 'react-native-gesture-handler';

import RootStack from './src/navigation';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'react-native';
import { Loading } from '@/components/Loading';

import theme from '@/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <>
        <StatusBar barStyle="light-content" backgroundColor="transparent" />

        {fontsLoaded ? <RootStack /> : <Loading />}
      </>
    </ThemeProvider>
  );
}
