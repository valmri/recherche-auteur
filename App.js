import {Button, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";
import Book from "./Book";
import Home from "./Home";

export default function App() {

  const [text, setText] = useState("");
  const [auteur, setAuteur] = useState("");

  function truc() {
      setAuteur(text);
  }

  return (
    <View style={styles.container}>
        <Book data={auteur}>
        </Book>
        <Home styles={styles} style={styles.container1}>
            <TextInput style={styles.input} placeholder='Auteur' onChangeText={text => setText(text)} defaultValue={text}/>
            <Pressable onPress={truc} style={styles.button}>
                <Text>Envoyer</Text>
            </Pressable>
        </Home>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    alignItems: 'center',
    width: '60%'
  },
  input: {
    marginTop: 100,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    width: '100%'
  },
  button: {
    backgroundColor: "#74C200FF",
    color: "#fff",
    padding: 10,
    borderWidth: 1
  }
});
