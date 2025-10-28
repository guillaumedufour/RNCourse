import {useState} from "react";
import {StyleSheet, Button, View, TextInput, SafeAreaView, Text, FlatList} from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState("")
  const [inputResult, setInputResult] = useState([])
  const onPressBtn = () => {
    setInputResult((prevState) => [...prevState, inputValue]);
    setInputValue("")
  }
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.inputContainer}>
        <TextInput value={inputValue}
                   onChangeText={(text) => setInputValue(text)}
                   style={styles.input}/>
        <Button title='Valider' onPress={onPressBtn}/>
      </View>
      <View style={styles.resultContainer}>
        <FlatList data={inputResult} renderItem={({item}) => {
          return (
            <View style={styles.itemContainer}><Text style={styles.item}>{item}</Text></View>
          )
        }}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 8
  },
  input: {
    width: '80%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
  },
  resultContainer: {
    flex: 1,
    width: '100%',
    padding: 8
  },
  itemContainer: {
    width: '100%',
    height: 38,
    marginVertical: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    color: 'white'
  }
});
