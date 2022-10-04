import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getAJoke } from "../../services/jokesService";

const SingleJoke = () => {
  const { id }: any = useParams();

  const query = id.substring(0, 30);

  const { data } = useQuery(["singleJoke"], () => getAJoke(query));

  console.log("data", data);
  return <div>{JSON.stringify(data)}</div>;
};

export default SingleJoke;
