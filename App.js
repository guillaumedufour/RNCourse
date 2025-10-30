import {useState} from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  FlatList,
  Modal,
  TouchableOpacity,
  TextInput
} from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState("")
  const [inputResult, setInputResult] = useState([])
  const [isModalVisible, setModalVisible] = useState(false);
  const onOpenModal = () => {
    setModalVisible(true);
  }
  const onCloseModal = () => {
    setModalVisible(false);
  }

  const onCreateItem = (item) => {
    setInputResult(prev => [...prev, inputValue]);
    setInputValue("");
    setModalVisible(false);
  }
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.inputContainer}>
        <TouchableOpacity activeOpacity={0.9} style={styles.btn} onPress={onOpenModal}>
          <Text style={styles.btnText}>Ajouter un élement</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resultContainer}>
        <FlatList data={inputResult} renderItem={({item}) => {
          return (
            <View style={styles.itemContainer}><Text style={styles.item}>{item}</Text></View>
          )
        }}/>
      </View>
      <Modal visible={isModalVisible} animationType={"slide"}>
        <View style={styles.modalView}>
          <TextInput value={inputValue} onChangeText={setInputValue} style={styles.input}/>
          <View style={styles.modalBtnContainer}>
            <TouchableOpacity activeOpacity={0.9} style={[styles.modalBtns, styles.createBtn]} onPress={onCreateItem}>
              <Text style={styles.modalBtnText}>Créer</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} style={[styles.modalBtns, styles.closeBtn]} onPress={onCloseModal}>
              <Text style={styles.modalBtnText}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    height: 42,
    fontSize: 20,
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  btn: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'violet',
    marginTop: 50
  },
  modalBtns: {
    width: '40%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  btnText: {
    fontSize: 20,
    color: 'white',
  },
  createBtn: {
    backgroundColor: 'blue',
  },
  closeBtn: {
    backgroundColor: 'black',
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
    fontSize: 20,
    color: 'white'
  },
  modalView: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24
  },
  modalBtnContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  modalBtnText: {
    color: 'white',
    fontSize: 20
  }
});
