import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Recommendation({ route, navigation }) {
  const { stressLevel } = route.params;

  const getRecommendation = (level) => {
    if (level <= 3) {
      return "You're doing great! Keep it up with some light relaxation.";
    } else if (level <= 6) {
      return 'Consider taking a short break and doing some deep breathing exercises.';
    } else {
      return 'Your stress level is high. How about a guided meditation or a walk outside?';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommendation</Text>
      <Text style={styles.recommendation}>{getRecommendation(parseInt(stressLevel))}</Text>
      <Button title="Back to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
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
  recommendation: {
    fontSize: 18,
    marginBottom: 40,
    textAlign: 'center',
  },
});
