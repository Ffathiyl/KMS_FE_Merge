import { useState } from "react";
import RiwayatIndex from "./Index";
import RiwayatDetail from "./Detail";

export default function Riwayat() {
  const [pageMode, setPageMode] = useState("index");
  const [dataID, setDataID] = useState();

  function getPageMode() {
    switch (pageMode) {
      case "index":
        return <RiwayatIndex onChangePage={handleSetPageMode} />;
      case "detailRiwayat":
        return (
          <RiwayatDetail onChangePage={handleSetPageMode} withID={dataID} />
        );
    }
  }

  function handleSetPageMode(mode) {
    setPageMode(mode);
  }

  function handleSetPageMode(mode, withID) {
    setDataID(withID);
    setPageMode(mode);
  }

  return <div>{getPageMode()}</div>;
}
