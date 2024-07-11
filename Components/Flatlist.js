import React from 'react';
import {ScrollView, Text, View, FlatList, StyleSheet} from 'react-native';

const Flatlist = () => {
  const users = [
    {
      roll: 1,
      name: 'Qavi',
    },
    {
      roll: 2,
      name: 'Hashir',
    },
    {
      roll: 3,
      name: 'Raqeeb',
    },
    {
      roll: 4,
      name: 'Tayab',
    },
    {
      roll: 5,
      name: 'Moiz',
    },
    {
      roll: 6,
      name: 'Faraz',
    },
    {
      roll: 7,
      name: 'Kashan',
    },
    {
      roll: 8,
      name: 'Suhail',
    },
    {
      roll: 9,
      name: 'Hamza',
    },
    {
      roll: 10,
      name: 'Mutahir',
    },
    {
      roll: 11,
      name: 'Hanzala',
    },
  ];
  return (
    <ScrollView style={Styles.scrollView}>
      <View>
        <Text
          style={{
            fontSize: 50,
            textAlign: 'center',
            backgroundColor: 'black',
            color: 'white',
          }}>
          Student Lists
        </Text>
        <FlatList
          data={users}
          keyExtractor={item => item.roll.toString()}
          renderItem={({item}) => (
            <View style={Styles.itemContainer}>
              <Text style={Styles.item}>Roll NO: {item.roll}</Text>
              <Text style={Styles.item}>Name:{item.name}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  item: {
    fontSize: 19,
    padding: 10,
    backgroundColor: 'pink',
    color: 'black',
    margin: 10,
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 2,
    flex:1,
  },
  scrollView: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  }
});

export default Flatlist;
