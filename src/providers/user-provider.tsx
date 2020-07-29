import React, { Component, createContext } from "react";
import { auth, generateUserDocument } from "../firebase";
import { IUser } from "../models/user.interface";

export const UserContext = createContext({} as IUser);

class UserProvider extends Component {
  state: { user: IUser | null } = {
    user: null,
  };

  componentDidMount = async () => {
    auth.onAuthStateChanged(async (userAuth) => {
      // @ts-ignore
      const user = await generateUserDocument(userAuth);

      this.setState({ user });
    });
  };
  render() {
    return (
      //   <UserContext.Provider value={{ user: this.state.user }}>
      // @ts-ignore
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;
