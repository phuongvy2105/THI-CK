import { useState , useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Image,FlatList, TouchableOpacity
} from 'react-native';

export default function App({ navigation, route }) {
  const [notes, setNotes] = useState(route.params.user);
  // console.log(notes);
  const [newNote, setNewNote] = useState('')

useEffect(()=>{
    setNotes(route.params.user)
  },[route.params?.user])

console.log(notes)

//  useEffect(() => {
//     const arr = notes.filter((value) =>
//       value.note.toLowerCase().includes(newNote.toLowerCase())
//     );
//     setNotes(arr);
//   }, [newNote]);

    function deleteNote(id){
    const Dnotes = notes.filter(value=> value.id !== id)
    setNewNote(Dnotes)
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          placeholder="Search"
          style={{
            height: 50,
            width: 290,
            borderWidth: 1,
            paddingLeft: 15,
            borderRadius: 12,
          }} value={newNote} onChangeText={(text)=> setNewNote(text)}
        />
      </View>
      <View
        style={{
          flex: 5,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
       
        <FlatList
        data={notes}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=>{
          return(
 <View
          style={{
            height: 50,
            width: 290,
            backgroundColor: '#DEE1E62B',
            borderRadius: 12,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
          }}>
          <Image source={require('../image/Frame.png')} />
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
            {item.note}
          </Text>
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={{paddingHorizontal:10}}>
          <Image source={require('../image/Frame1.png')} />
          </TouchableOpacity>
           <TouchableOpacity onPress={()=> deleteNote(item.id)}>
         <Text>Delete</Text>
          </TouchableOpacity>
          </View>
        </View>
          )
        }}
        />
      </View>
      <View style={{flex:1, alignItems:'center'}}>
      <TouchableOpacity style={{height: 50, width:70, backgroundColor:'blue', justifyContent:'center', alignItems:'center'}} onPress={()=> navigation.navigate("screen3", {notes:notes})}>
      <Text style={{color:'white'}}>+</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
