import React from 'react';
import "./Sidebar.css"
const Sidebar = () => {
  return (
    <div className="sidebar">
      <button>Hide sidebar</button>
      <div className="search">
        <input type="text" placeholder="Find nodes..." />
      </div>
      <div className="selected-module">
        <h3>Selected module</h3>
        <p>Name: </p>
        <p>Tree path: </p>
        <p>Flow: </p>
        <p>Indegree: </p>
        <p>Outdegree: </p>
        <p>Nodes: </p>
        <p>Links: </p>
        <p>Leaf nodes: </p>
      </div>
      <div className="distributions">
        <h3>Flow distribution</h3>
        <h3>Degree distribution</h3>
      </div>
      <div className="occurrences">
        <h3>Occurrences</h3>
        <button>+ Add file</button>
      </div>
      <div className="settings">
        <h3>Settings</h3>
        <label>
          <input type="checkbox" /> Show labels
        </label>
        <label>
          <input type="checkbox" /> Run simulation
        </label>
        <label>
          <input type="checkbox" /> Use level of detail
        </label>
        <div className="slider-container">
          <label>Module size based on: flow</label>
          <input type="range" min="1" max="100" />
        </div>
        <div className="slider-container">
          <label>Module radius scale: root</label>
          <input type="range" min="1" max="100" />
        </div>
        <div className="node-limit">
          <label>Node limit in modules</label>
          <input type="number" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
