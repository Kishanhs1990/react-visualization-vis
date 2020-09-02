import React from "react";
import Graph from "react-graph-vis";
import { render } from "react-dom";
import { DATA } from '../src/constants/index';

let nodeArray = [];
let nodeMap = {};
let edges = [];
let childNodeMap = {};

DATA.forEach(function (rootNode) {
  let superNodes = rootNode._id;
  nodeMap[rootNode._id]=true;
  nodeArray.push({ id: rootNode._id, label: rootNode._id});
  rootNode.columnsInfo.forEach(function (childNode, index) {
    if(childNode.columnName === 'root') {
      return;
    }
    else {
      if(nodeMap[childNode.columnName] === undefined) {
        nodeArray.push({ id: childNode.columnName, label: childNode.columnName});
        nodeMap[childNode.columnName]=true;
      }
      edges.push({ from: superNodes , to: childNode.columnName});
      if(childNode && childNode.relations) {
        childNodeMap[childNode.columnName] = childNode.relations;

      }
    }
  });
});

Object.entries(childNodeMap).forEach(function (childNode){
  const childNodeName = childNode[0];
  const relations = childNode[1];
  relations.forEach(function (leafNode, index) {
    const leafNodeColumnName = leafNode.column.split('|')[1];
    if(nodeMap[leafNodeColumnName] === undefined) {
      nodeArray.push({ id: leafNodeColumnName, label: leafNodeColumnName});
      nodeMap[leafNodeColumnName]=true;
    }
    edges.push({ from: childNodeName , to: leafNodeColumnName});
});
});

const graph = {
  nodes: nodeArray,
  edges: edges
};

const options = {
  nodes: {
    shape: 'box',
    font: {
      color: "black"
    },
  },
  tooltip: {
    delay: 50,
    fontColor: "black",
    fontSize: 14, 
    fontFace: "verdana",
    color: {
      border: "#666",
      background: "#FFFFC6"
      } 
  },
  clustering: {
    enabled: false,
    clusterEdgeThreshold: 50  
  },
  physics:{
    barnesHut:{
      gravitationalConstant: -60000,
      springConstant:0.02
    }
  },
  smoothCurves: {dynamic:false},
  hideEdgesOnDrag: true,
  stabilize: true,
  stabilizationIterations: 1000,
  zoomExtentOnStabilize: true,
  navigation: true,
  keyboard: true,
  edges: {
    inheritColor: "to"
  }
};

const events = {
  select: function(event) {
    var { nodes, edges } = event;
    console.log("Selected nodes:");
    console.log(nodes);
    console.log("Selected edges:");
    console.log(edges);
  }
};

render(
  <div>
    <Graph 
      graph={graph}
      options={options}
      events={events} 
      style={{ height: "640px" }}
    />
  </div>,
  document.getElementById("root")
);
