import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import { PROJECTS } from "../shared/projects";

function RenderProject({ project }) {
  if (project) {
    return (
      <Card
        featuredTitle={project.name}
        image={require("./images/americorps.jpg")}
        style={{ borderRadius: 20 }}
      >
        <Text style={{ margin: 10 }}>
          {project.completion}
          {project.description}
        </Text>
      </Card>
    );
  }
  return <View />;
}

class ProjectInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: PROJECTS,
    };
  }

  static navigationOptions = {
    title: "ProjectInfo",
  };

  render() {
    const projectId = this.props.navigation.getParam("projectId");
    const project = this.state.projects.filter(
      (project) => project.id === projectId
    )[0];
    return <RenderProject project={project} />;
  }
}

export default ProjectInfo;
