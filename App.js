import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Button, Alert } from 'react-native';

class Blink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "show": true
        };
        setInterval(() => {
            this.setState(previousState => {
                return {
                    "show": !previousState.show
                };
            });
        }, 1000);
    }

    render() {
        let display = this.state.show ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}

export default class App extends React.Component {
    onPressLearnMore(){
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
    }
    render() {
        return (
            <View style={styles.container}>
                <Blink text='I love to blink' />
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
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color:"orange",
        backgroundColor: '#aaf',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
