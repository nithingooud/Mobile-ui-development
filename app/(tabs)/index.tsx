import { Image, StyleSheet, Platform, TouchableOpacity, View, FlatList, Text, Alert } from 'react-native';
import { useNavigation } from 'expo-router';
import { links } from '@/components/navigation/links';

export default function HomeScreen() {
  const navigation = useNavigation()

  const handleNavigation = (item: any) => {
    switch (item.key) {
      case 'ZEPTO':
        navigation.navigate(links.ZEPTO_LOGIN)
        break;
      case 'Swiggy_Login_Page':
        navigation.navigate(links.SWIGGY_LOGIN_PAGE)
        break
      default:
        Alert.alert(`You pressed on ${item.key}`);
    }
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: 'ZEPTO' },
          { key: 'Swiggy_Login_Page' },
          { key: 'Dominic' },
          { key: 'Jackson' },
          { key: 'James' },
          { key: 'Joel' },
          { key: 'John' },
          { key: 'Jillian' },
          { key: 'Jimmy' },
          { key: 'Julie' },
        ]}
        renderItem={({ item }) => (<TouchableOpacity onPress={() => handleNavigation(item)}>
          <Text style={styles.item}>{item.key}</Text>
        </TouchableOpacity>)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    color: 'blue',
    borderColor: 'red'
  },
});


