import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);

  const restForm = () => {
    setDisplay(false);
    setEmail('');
    setName('');
    setPassword('');
  };
  return (
    <View>
      <Text style={styles.h1}>Qavi Shaikh</Text>
      <TextInput
        style={styles.TextBox}
        placeholder="Enter User Name"
        onChangeText={text => {
          setName(text);
        }}
        value={name}
      />
      <TextInput
        style={styles.TextBox}
        placeholder="Enter Your Password"
        secureTextEntry={true}
        onChangeText={text => {
          setPassword(text);
        }}
        value={password}
      />
      <TextInput
        style={styles.TextBox}
        placeholder="Enter Your Email"
        onChangeText={text => {
          setEmail(text);
        }}
        value={email}
      />
      <View style={{marginBottom: 10, marginTop: 10}}>
        <Button
          title="Submit"
          color={'green'}
          onPress={() => setDisplay(true)}></Button>
      </View>
      <Button title="Clear" color={'red'} onPress={restForm}></Button>
      <View>
        {display ? (
          <View>
            <Text style={{fontSize: 25}}>{name}</Text>
            <Text style={{fontSize: 25}}>{password}</Text>
            <Text style={{fontSize: 25}}>{email}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 50,
    textAlign: 'center',
    backgroundColor: 'red',
    color: 'white',
  },
  TextBox: {
    borderColor: 'red',
    borderWidth: 2,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  button1: {
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Form;
