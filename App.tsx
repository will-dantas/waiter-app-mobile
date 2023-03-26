import { useFonts } from 'expo-font';
import { Main } from './src/Main';
import { CartProvider } from './src/contexts/cartContext/cartContext';
import { ModalTableProvider } from './src/contexts/modalTableContext/modalTableContext';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [isFontsLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <ModalTableProvider>
      <CartProvider>
        <StatusBar style='dark' />
        <Main />
      </CartProvider>
    </ModalTableProvider>
  );
}
