import React, { Component } from "react";
import { Text, ScrollView } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import * as MailComposer from "expo-mail-composer";

class Contact extends Component {
  static navigationOptions = {
    title: "Contact",
  };

  sendMail() {
    MailComposer.composeAsync({
      recipients: ["kparker.adrienne@gmail.com"],
      subject: "Get in touch",
      body: "Hi KP, ",
    });
  }

  render() {
    return (
      <ScrollView>
        <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
          <Text>linkedin.com/in/katherine-parker-9822659a/</Text>
          <Text>github.com/parkerfromcal</Text>
          <Text style={{ marginBottom: 10 }}>U.S.A.</Text>
          <Text>Phone: 831-917-3565</Text>
          <Text style={{ marginBottom: 10 }}>
            Email: kparker.adrienne@gmail.com
          </Text>
          <Button
            title="Get in touch"
            buttonStyle={{
              backgroundColor: "#ae7862",
              margin: 40,
              borderRadius: 25,
            }}
            icon={
              <Icon
                name="envelope-o"
                type="font-awesome"
                color="#fff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            onPress={() => this.sendMail()}
          />
        </Card>
      </ScrollView>
    );
  }
}

export default Contact;
