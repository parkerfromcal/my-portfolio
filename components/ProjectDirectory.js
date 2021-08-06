import React, { Component } from "react";
import { FlatList, ImageBackground, StyleSheet } from "react-native";
import { Tile } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

class ProjectDirectory extends Component {
  static navigationOptions = {
    title: "Projects",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderDirectoryItem = ({ item }) => {
      return (
        <Tile
          title={item.name}
          caption={item.description}
          featured
          onPress={() => navigate("ProjectInfo", { projectId: item.id })}
        />
      );
    };

    return (
      <ImageBackground
        style={styles.backgroundImage}
        source={require("./images/cactus-two.jpeg")}
      >
        <FlatList
          data={this.props.projects.projects}
          renderItem={renderDirectoryItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    opacity: 0.8,
  },
});

export default connect(mapStateToProps)(ProjectDirectory);
