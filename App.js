import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { MMKV } from 'react-native-mmkv'
import Animated from 'react-native-reanimated'

export const storage = new MMKV({
  id: `storage`,
})

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Date from MMKV: {storage.getString('date') || 'none set'}</Text>
      <Button title="set date" onPress={() => {
        storage.set('date', new Date().toLocaleString())
      }} />
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'violet',
        }}
      />
      <StatusBar style="auto" />
    </View>
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
