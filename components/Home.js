import React, { Component } from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import { LANGUAGES } from "../shared/languages";
import { TOOLS } from "../shared/tools";
import { SKILLS } from "../shared/skills";
import { ImageBackground } from "react-native";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: LANGUAGES,
      tools: TOOLS,
      skills: SKILLS,
    };
  }

  static navigationOptions = {
    title: "KatherineParker",
  };

  languages = () => {
    return this.state.languages.map((language) => {
      return (
        <Text key={language.id} style={styles.homeCardText}>
          {language.name}
        </Text>
      );
    });
  };

  tools = () => {
    return this.state.tools.map((tool) => {
      return (
        <Text key={tool.id} style={styles.homeCardText}>
          {tool.name}
        </Text>
      );
    });
  };

  skills = () => {
    return this.state.skills.map((skill) => {
      return (
        <Text key={skill.id} style={styles.homeCardText}>
          {skill.name}
        </Text>
      );
    });
  };

  render() {
    return (
      <ScrollView>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("./images/cactus-one.jpeg")}
        >
          <Card title="Languages I speak:" style={styles.homeCard}>
            {this.languages()}
          </Card>
          <Card title="Tools I use:" style={styles.homeCard}>
            {this.tools()}
          </Card>
          <Card title="Skills I have:" style={styles.homeCard}>
            {this.skills()}
          </Card>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    opacity: 0.7,
  },
  homeCard: {
    borderRadius: 20,
    padding: 10,
    width: "100%",
    margin: 20,
    fontSize: 22,
  },
  homeCardText: {
    textAlign: "center",
    fontSize: 18,
  },
});

export default Home;
