import React from 'react';
import {View} from "react-native";

function Home(props) {

    return (
        <View style={props.styles.container1}>
            {props.children}
        </View>
    );
}

export default Home;