import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function StressInput({ navigation }) {
  const [stressLevel, setStressLevel] = useState('');

  const handleSubmit = () => {
    // 이 부분에서 AI 추천 로직을 호출할 수 있습니다.
    navigation.navigate('Recommendation', { stressLevel });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your Stress Level</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a number from 1 to 10"
        keyboardType="numeric"
        value={stressLevel}
        onChangeText={setStressLevel}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
  },
});
