import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { PROJECTS } from "../shared/projects";

class ProjectDirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: PROJECTS,
    };
  }

  static navigationOptions = {
    title: "Projects",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderDirectoryItem = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          onPress={() => navigate("ProjectInfo", { projectId: item.id })}
          leftAvatar={{ source: require("./images/katherineparker.jpeg") }}
        />
      );
    };

    return (
      <FlatList
        data={this.state.projects}
        renderItem={renderDirectoryItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

export default ProjectDirectory;
