import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const {
    user: { profile }
  } = state;

  return {
    profile
  };
};

export default connect(
  mapStateToProps,
  null
)(Container);
