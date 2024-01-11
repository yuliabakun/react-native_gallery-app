import { ScrollView, StyleSheet, View, Text, FlatList } from 'react-native';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ListItem } from '../components/ListItem';
import { RootState } from '../reducer/store';
import { fetchImagesData } from '../reducer/image';
import { useAppDispatch } from '../helpers/hooks';

type RootStackParamList = {
  Image: { imageUrl: string };
};

type GalleryScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Image'>;

export default function GalleryScreen() {
  const navigation = useNavigation<GalleryScreenNavigationProp>();
  const dispatch = useAppDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.images);

  useEffect(() => {
    dispatch(fetchImagesData());
  }, [dispatch]);

  const navigateToImage = (imageUrl: string) => {
    navigation.navigate('Image', { imageUrl });
  };

  if (loading) {
    return <Text>Loading...</Text>
  };

  if (error) {
    return <Text> Sorry, service is unavailable</Text>
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={(image) => image.id.toString()}
        renderItem={({ item: image }) => (
          <ListItem
            imageLink={image.urls.small}
            imageAlt={image.description}
            authorName={image.user.name}
            navigation={() => navigateToImage(image.urls.raw)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 10,
  },

  list: {
    width: '95%',
  }
});
