import React, { Component } from "react";
import { FlatList, View, StyleSheet } from "react-native";
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
          imageContainerStyle={{ opacity: 0.5 }}
          titleStyle={{ fontWeight: "bold", fontSize: 32, color: "#ae7862" }}
          title={item.name}
          caption={item.description}
          featured
          onPress={() => navigate("ProjectInfo", { projectId: item.id })}
          imageSrc={{ uri: baseUrl + item.image }}
        />
      );
    };

    return (
      <FlatList
        data={this.props.projects.projects}
        renderItem={renderDirectoryItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

export default connect(mapStateToProps)(ProjectDirectory);
