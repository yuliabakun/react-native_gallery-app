import { RouteProp, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';

type RootStackParamList = {
  Image: { imageUrl: string };
};

export default function ImageScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'Image'>>();
  const imageUrl = route.params?.imageUrl;
  const [loading, setIsLoading] = useState(true);

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size='large' color="#0000ff" />}

      <Image
        source={{ uri: `${imageUrl}` }}
        style={styles.image}
        onLoad={() => setIsLoading(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
