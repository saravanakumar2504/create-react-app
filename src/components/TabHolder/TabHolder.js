import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../../assets/react-tabs.css";
import MovieList from "../MovieList/MovieList";
import "./TabHolder.css";

function TabHolder() {
  return (
    <>
      <div className="with-react-tabs">
        <div className="tabHeader-right">
          <span className="sortby">SORT BY</span>
          <span className="releaseDate">RELEASE DATE</span>
        </div>
        <Tabs>
          <TabList>
            <Tab>ALL</Tab>
            <Tab>DOCUMENTARY</Tab>
            <Tab>COMEDY</Tab>
            <Tab>HORROR</Tab>
            <Tab>CRIME</Tab>
          </TabList>
          <TabPanel>
            <h3 className="moviesCount">
              <b>39</b> movies found
            </h3>
            <MovieList />
          </TabPanel>
          <TabPanel>
            <h3 className="moviesCount">
              <b>12</b> movies found
            </h3>
            <MovieList />
          </TabPanel>
          <TabPanel>
            <h3 className="moviesCount">
              <b>7</b> movies found
            </h3>
            <MovieList />
          </TabPanel>
          <TabPanel>
            <h3 className="moviesCount">
              <b>23</b> movies found
            </h3>
            <MovieList />
          </TabPanel>
          <TabPanel>
            <h3 className="moviesCount">
              <b>45</b> movies found
            </h3>
            <MovieList />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}

export default TabHolder;
