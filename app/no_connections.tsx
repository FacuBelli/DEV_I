import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function NoConnectionScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardText}>No hay conexión establecida</Text>
      </View>

      <Text style={styles.message}>
        Revisá tu conexión y{'\n'}volvé a intentarlo
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD800',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#B05FFF',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginBottom: 40,
  },
  cardText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  message: {
    color: '#B05FFF',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
