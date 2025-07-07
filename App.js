import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import Home from './components/Home.jsx';
import './i18n';

export default function App() {
  const { t, i18n } = useTranslation();

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <View style={styles.container}>
        <Home />
        <StatusBar style="auto" />
      </View>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
