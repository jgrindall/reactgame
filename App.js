import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Button, Alert } from 'react-native';

class MyListItem extends React.PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };

  render() {
      const textColor = this.props.selected ? "red" : "black";
      return (
          <View>
                <Text style={{ color: textColor }}>
                {this.props.title}
                </Text>
          </View>
    );
  }
}

class MultiSelectList extends React.PureComponent {

    state = {
        "selected": (new Map(): Map<string, boolean>)
    };

    _keyExtractor = function(item, index){
        return item.id;
    }

    _onPressItem = function(id){
        this.setState(function(state){
            const selected = new Map(state.selected);
            selected.set(id, !selected.get(id));
            return {
                "selected":selected
            };
        });
    };

    _renderItem = ({item}) => (
        <MyListItem
            style={styles.block}
            id={item.id}
            selected={!!this.state.selected.get(item.id)}
            title={item.title}
        />
    );

  render() {
    return (
      <FlatList
        data={this.props.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

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
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aaf',
        alignItems: 'center',
        justifyContent: 'center'
    },
    list: {
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center'
    },
    block:{
        width:40,
        height:40,
        backgroundColor: '#6f6'
    }
});
