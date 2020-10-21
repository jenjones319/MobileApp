
import React, { useState } from "react";
import { Button, Text, StyleSheet, Switch, StatusBar, View } from "react-native";

import Constants from "expo-constants";

const App = () => {
  const styleTypes = ['default','dark-content', 'light-content'];
  const [visibleStatusBar, setVisibleStatusBar] = useState(false);
  const [styleStatusBar, setStyleStatusBar] = useState(styleTypes[0]);

  const changeVisibilityStatusBar = () => {
    setVisibleStatusBar(!visibleStatusBar);
  };

  const changeStyleStatusBar = () => {
    const styleId = styleTypes.indexOf(styleStatusBar) + 1;

    if(styleId === styleTypes.length){
      return setStyleStatusBar(styleTypes[0]);
    }
    return setStyleStatusBar(styleTypes[styleId]);
  };

  const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textStyle}>StatusBar Style: {styleStatusBar}</Text>
        <Text style={styles.textStyle}>StatusBar Visibility: {!visibleStatusBar ? 'Visible': 'Hidden'}</Text>
      </View>
      <StatusBar backgroundColor="Ivory" barStyle={styleStatusBar} />
      <View>
        <StatusBar hidden={visibleStatusBar} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Invisible. That's my superpower" onPress={() => changeVisibilityStatusBar()} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Change me. I've got styles..." onPress={() => changeStyleStatusBar()} />
      </View>

    <View style={styles.container}>
      <Switch title="On/Off Switch"
        textAlign="center"
        trackColor={{ false: "#851625", true: "#F3EF15" }}
        thumbColor={isEnabled ? "#FABD15" : "#f3EF15"}
        ios_backgroundColor="#c2212B"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'aqua',
    color: 'ivory',
    padding: 3
  },
  buttonContainer:{
    padding: 7
  },

  textStyle:{
    textAlign: 'center'

  }
});

export default App;