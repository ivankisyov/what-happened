import React, { useContext } from "react";
import { UserContext } from "../../providers/user-provider";
import TemporaryDrawer from "./TemporaryDrawer";

export default function Navbar() {
  const user = useContext(UserContext);

  return <div>{user ? <TemporaryDrawer /> : null}</div>;
}
