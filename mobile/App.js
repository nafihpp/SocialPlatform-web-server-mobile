import { StyleSheet,  View } from 'react-native';
import MainStackNavigation from "./src/navigation/MainStackNavigation"
import { AuthContextProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <View>
      <AuthProvider>
        <MainStackNavigation />
      </AuthProvider>
    </View>
  );
}

const styles = StyleSheet.create({});
