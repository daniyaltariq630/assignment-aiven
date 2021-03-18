import React, { useMemo, useEffect } from "react";
import * as Actions from "./store/actions";
import withReducer from "../store/withReducer";
import reducer from "./store/reducers";
import { useDispatch, useSelector } from "react-redux";
import Table from "./Table";

function Clouds() {
  const dispatch = useDispatch();

  const data = useSelector((App) => App.clouds.list.clouds);

  useEffect(() => {
    dispatch(Actions.getClouds());
  }, [dispatch]);

  const columns = useMemo(
    () => [
      {
        Header: "Region",
        accessor: "geo_region",
      },
      {
        Header: "Name",
        accessor: "cloud_name",
      },
      {
        Header: "Cloud Description",
        accessor: "cloud_description",
      },
      {
        Header: "Geo Latitude",
        accessor: "geo_latitude",
      },
      {
        Header: "Geo Longitude",
        accessor: "geo_longitude",
      },
    ],
    []
  );

  return (
    <div className="App">{data && <Table columns={columns} data={data} />}</div>
  );
}

export default withReducer("App", reducer)(Clouds);
