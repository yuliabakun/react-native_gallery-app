import { RouteProp, useRoute } from '@react-navigation/native';
import { Image, StyleSheet, Text, View } from 'react-native';
const ACCESS_KEY = 'RefpOBswH4_nJ7hoHRfRzAcwD63__BIfgWvL_nW_ErA';

type RootStackParamList = {
  Image: { imageUrl: string };
};

export default function ImageScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'Image'>>();
  const imageUrl = route.params?.imageUrl;

  return (
    <View style={styles.container}>
      {imageUrl 
      ?
        <Image
          source={{ uri: `${imageUrl}${ACCESS_KEY}` }}
          style={styles.image}
        />
      : <Text>Image not available</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingBottom: 10,
    width: '100%',
    height: '100%',
  },

  title: {
    fontSize: 40,
    paddingBottom: 15,
  },

  image: {
    height: '100%',
    width: '100%',
  },
});
