/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import Analytics from "appcenter-analytics";
import Crashes from "appcenter-crashes";
import codePush from "react-native-code-push";

const instructions = Platform.select({
  ios:
    "Press Cmd+R to reload,\n" +
    "hellocodepush \n" +
    "Cmd+D or shake for dev menu e sdfsd  dseewewwe weeewwe \n",
  android:
    "Grace is very beautiful and I agree with this xodso ,\n" + "come on !!!!"
});

let codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };

class App extends Component {
  componentDidMount() {
    // Crashes.generateTestCrash();
  }

  onButtonPress() {
    codePush.sync({
      updateDialog: true,

      installMode: codePush.InstallMode.IMMEDIATE
    });
    console.log(codePush);
  }

  render() {
    Analytics.trackEvent("App open", {
      Category: "Open",
      FileName: "favorite.avi"
    });

    //Crashes.generateTestCrash();

    // I changed something xxxx

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>Test ... </Text>

        <Text style={styles.instructions}>{instructions}</Text>

        <TouchableOpacity onPress={this.onButtonPress}>
          <Text>Check for updates</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default (App = codePush(codePushOptions)(App));
