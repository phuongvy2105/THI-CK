import {useState} from 'react'
import { Text, SafeAreaView, StyleSheet, View, TextInput , TouchableOpacity, Image} from 'react-native';

export default function App({navigation, route}) {
  const [notes, setNotes] = useState(route.params.notes)
  const [note, setNote] = useState('')
  console.log(notes)
  function addNotes(note){
    const text = notes.push({id: notes.length+1, note: note})
    setNotes(text)
    console.log("sadah"+ text)
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 25 }}>ADD YOUR JOB</Text>
        <TextInput
          placeholder="input your job"
          style={{
            height: 50,
            width: 290,
            borderWidth: 1,
            borderRadius: 12,
            paddingLeft: 15,
          }} value={note} onChangeText={(text)=> setNote(text)}
        />
        <TouchableOpacity style={{height: 50, width:190, backgroundColor:'blue', justifyContent:'center', alignItems:'center'}} onPress={()=> addNotes(note)}>
        <Text style={{color:'white'}}>FINISH</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Image source={require('../image/Image96.png')}/>
      </View>
    </View>
  );
}
