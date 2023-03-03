import react, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.tulisan}>Splash</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  tulisan: {
    color: 'red',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
