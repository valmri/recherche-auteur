import React, {useState} from 'react';
import {View, Text} from "react-native";

function Book(props) {

    const [books, setBooks] = useState([]);
    const [isLoaded, setLoaded] = useState('true');

    let search = async () => {
        let uri = "https://www.googleapis.com/books/v1/volumes?q=" + props.data;
        fetch(uri)
            .then(res => res.json())
            .then(
                (result) => {
                    setBooks(result.items)
                    setLoaded(false);
                }
            )
    }

    if(props.data && isLoaded) {
        search();
    }

    return (
        <View>
            {props.children}
            {
                books.map(item => (
                    <Text>{item.volumeInfo.title}</Text>
                ))
            }
        </View>
    );
}

export default Book;