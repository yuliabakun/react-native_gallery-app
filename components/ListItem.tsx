import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  imageLink: string,
  imageAlt: string,
  authorName: string,
  navigation: any,
};

export const ListItem: React.FC<Props> = ({
  imageLink,
  imageAlt,
  authorName,
  navigation,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={navigation}>
      <Image
        style={styles.image}
        alt={imageAlt}
        source={{ uri: imageLink }}
      />

      <View style={styles.description}>
        <Text style={styles.author}>{authorName}</Text>
        <Text style={styles.title}>{imageAlt ? imageAlt : 'no title'}</Text>
      </View>
    </TouchableOpacity >
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 20,
    marginBottom: 10,
  },

  image: {
    height: 100,
    width: 100,
    marginRight: 15,
    borderRadius: 15,
  },

  description: {
    flex: 1,
  },

  author: {
    fontWeight: 'bold',
  },

  title: {
    flexShrink: 1,
  },
});
