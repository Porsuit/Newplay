import React from 'react';
import { Text, View } from 'react-native';
import * as firebase from 'firebase/app';
import "firebase/auth";
import {Styles} from "./Styles/Styles";
import {LoginComponent} from "./Login";
import {RegisterComponent} from "./Register";
const Backend = (props)=>{
    return(
        <ScrollView>
            <View style={Styles.containerChild}>
                <Text style={Styles.interiorText}>Register</Text>
                <RegisterComponent/>
                <LoginComponent/>
            </View>
        </ScrollView>
    )
}
export {Backend};