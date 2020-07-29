import React, { useContext } from "react";
import Loading from "../Loading";
import { UserContext } from "../../providers/user-provider";
import EventsList from "../EventsList";

export default function Home() {
  const user = useContext(UserContext);

  return user ? (
    <>
      <h2 className="mb-4 text-center">Your Events:</h2>
      <EventsList />
    </>
  ) : (
    <Loading />
  );
}
