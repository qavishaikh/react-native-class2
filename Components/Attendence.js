import React, {useState} from 'react';
import {FlatList, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const users = [
  {id: '1', name: 'Qavi ', roll: 1},
  {id: '2', name: 'Hashir', roll: 2},
  {id: '3', name: 'Abdul Raqeeb', roll: 3},
];

const App = () => {
  const [attendance, setAttendance] = useState({});

  const toggleAttendance = id => {
    setAttendance(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>
        {item.name} (Roll: {item.roll})
      </Text>
      <TouchableOpacity
        style={[
          styles.button,
          attendance[item.id] ? styles.present : styles.absent,
        ]}
        onPress={() => toggleAttendance(item.id)}>
        <Text style={styles.buttonText}>
          {attendance[item.id] ? 'Present' : 'Absent'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  present: {
    backgroundColor: 'green',
  },
  absent: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: '#fff',
  },
});

export default App;
