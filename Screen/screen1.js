import { useState, useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { saveTodo } from '../reduce_Toolkit/noteReduce';

export default function App({ navigation }) {
  // const users = [
  //   {
  //     id: 1,
  //     name: 'tran',
  //     notes: [
  //       {
  //         id: 1,
  //         note: 'To check mail',
  //       },
  //       {
  //         id: 2,
  //         note: 'UI task web page',
  //       },
  //       {
  //         id: 3,
  //         note: 'Learn javascript basic',
  //       },
  //       {
  //         id: 4,
  //         note: 'Learn HTML Advance',
  //       },
  //       {
  //         id: 5,
  //         note: 'Medical App UI',
  //       },
  //       {
  //         id: 6,
  //         note: 'Learn Java',
  //       },
  //     ],
  //   },
  // ];

const data = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  async function fetchData() {
    try {
      const resp = await fetch(
        'https://6555ccce84b36e3a431e5d74.mockapi.io/todo'
      );
      const json = await resp.json();
      // console.log(json);
      dispatch(saveTodo(json));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  // const

  const [name, setName] = useState('tran');
  const [mesage, setMessage] = useState('');
  function checkUser(name) {
 
    const user = data.find((value) => value.name === name);
  
    navigation.navigate('screen2', { data: user  });
  }
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ flex: 2, justifyContent: 'flex-end', alignItems: 'center' }}>
        <Image source={require('../image/Image96.png')} />
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
          MANAGE YOUR {'\n'} TASK
        </Text>
      </View>
      <View
        style={{
          flex: 1.5,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TextInput
          placeholder="Enter Email"
          style={{
            height: 50,
            width: 290,
            borderWidth: 1,
            borderRadius: 15,
            paddingLeft: 15,
          }}
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            height: 50,
            width: 190,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => checkUser(name)}>
          <Text style={{ color: 'white' }}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
