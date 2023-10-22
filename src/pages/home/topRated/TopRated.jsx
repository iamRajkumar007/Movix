import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousal from "../../../components/carousal/Carousal";

const TopRated = () => {
  const [endpoint, setEndPoint] = useState("movie");
  const { data, loading } = useFetch(`/${endpoint}/top_rated`);
  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="carousalSection">
      <ContentWrapper>
        <span className="carousalTitle">Top Rated</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousal endpoint={endpoint} data={data?.results} loading={loading} />
    </div>
  );
};

export default TopRated;
