import React from "react";

// this.props.match
const About = ({ match }) => {
  return <div>{match.params.username} 의 소개</div>;
};

export default About;
