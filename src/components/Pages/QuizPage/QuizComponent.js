import React from "react";
import { connect } from "react-redux";
import "./QuizPage.scss";

class QuizComponent extends React.Component {
  render() {
    return (
      <div>
        Quiz Component
      </div>
    );
  }
}



const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = dispatch => ({
    
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizComponent);