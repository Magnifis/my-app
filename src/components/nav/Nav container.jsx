import Nav from "./Nav";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    friends: state.siteBar.friends
  };
};
const NavContainer = connect(mapStateToProps)(Nav);
export default NavContainer;
