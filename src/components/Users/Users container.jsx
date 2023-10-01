import { follow, unFollow, setUser } from "../redux/users-reducer";
import { connect } from "react-redux";
import Users from "./Users";

export const mapStateToProps = (state) => {
  return {
    state: state.usersPage.users,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(follow(userId));
    },
    unFollow: (userId) => {
      dispatch(unFollow(userId));
    },
    setUser: (users) => {
      dispatch(setUser(users));
    },
  };
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
