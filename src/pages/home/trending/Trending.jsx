import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousal from "../../../components/carousal/Carousal";

const Trending = () => {
  const [endpoint, setEndPoint] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${endpoint}`);
  const onTabChange = (tab) => {
    setEndPoint(tab === "Day" ? "day" : "week");
  };

  return (
    <div className="carousalSection">
      <ContentWrapper>
        <span className="carousalTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousal endpoint={endpoint} data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
