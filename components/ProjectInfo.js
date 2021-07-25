import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

function RenderProject(props) {
  const { project } = props;
  if (project) {
    return (
      <Card
        featuredTitle={project.name}
        image={{ uri: baseUrl + project.image }}
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
  static navigationOptions = {
    title: "ProjectInfo",
  };

  render() {
    const projectId = this.props.navigation.getParam("projectId");
    const project = this.props.projects.projects.filter(
      (project) => project.id === projectId
    )[0];
    return <RenderProject project={project} />;
  }
}

export default connect(mapStateToProps)(ProjectInfo);
