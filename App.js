import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Button, Alert } from 'react-native';
import Blink from './Blink';
import MultiSelectList from './MultiSelectList';
import styles from './Styles';

console.log("TESTING TESTING");

var DATA = [
    {
        "title":"TITLE0",
        "id":0
    },
    {
        "title":"TITLE1",
        "id":1
    },
    {
        "title":"TITLE2",
        "id":2
    },
    {
        "title":"TITLE3",
        "id":3
    },
    {
        "title":"TITLE4",
        "id":4
    },
    {
        "title":"TITLE5",
        "id":5
    }
];

const _alert = function(){
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
};

export default class App extends React.Component {
    onPressLearnMore(){
        _alert();
    }
    onPress(e){
        console.log(e);
        return true;
    }
    onMove(e){
        console.log(e);
        return true;
    }
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.top}>
                    <Blink text='I just love to  blink!!!' />
                    <Text>Open up App.js to start working on your app!</Text>
                    <Text>Changes you make will automatically reload.</Text>
                    <Text>Shake your phone to open the developer menu.</Text>
                    <Button
                        onPress={this.onPressLearnMore.bind(this)}
                        title="Learn More"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
                <View style={styles.container}>
                    <MultiSelectList style={styles.list}
                        data={DATA}
                        onStartShouldSetResponder=      {this.onPress.bind(this)}
                        onMoveShouldSetResponder=       {this.onMove.bind(this)}
                        onResponderGrant=               {this.onMove.bind(this)}
                        onResponderReject=              {this.onMove.bind(this)}
                        onResponderMove=                {this.onMove.bind(this)}
                        onResponderRelease=             {this.onMove.bind(this)}
                        onResponderTerminationRequest=  {this.onMove.bind(this)}
                        onResponderTerminate=           {this.onMove.bind(this)}
                        >
                    </MultiSelectList>
                </View>
            </View>
        );
    }
}
