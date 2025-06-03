import {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
    Background,
    Controls,
    ReactFlow,
    useReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import React, { useCallback, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ZapSidebar } from "../../components/ZapSidebar";
import CustomNode from "./CustomNode";
import GmailNode from "../Nodes/GmailNode";
import Slack from "../Nodes/Slack";


let id = 0;
const getId = () => `${id++}`;

const ZapComponent = () => {
    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);

    const nodeTypes = {
        gmailNode: GmailNode,
        slackNode: Slack,
        // calendarNode: CalendarNode,
      };
    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        []
    );

    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        []
    );

    const onDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    };

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        []
    );

    const onDrop = (event) => {
        event.preventDefault();
        const appData = JSON.parse(event.dataTransfer.getData("application/reactflow"));
        const position = {
          x: event.clientX - 250, 
          y: event.clientY - 40,
        };
      
        const newNode = {
          id: `${+new Date()}`,
          type: appData.type, 
          position,
          data: {
            label: appData.label,
            icon: appData.icon,
            description: appData.description,
          },
        };
      
        setNodes((nds) => nds.concat(newNode));
      };


      console.log("this is the nodes ",nodes+" , and edges " +edges)


    return (
        <Container fluid style={{ height: "100vh", padding: "20px" }}>
            <Row>
                <ZapSidebar onNodeDragStart={(node) => console.log("Dragged:", node)} />
                <Col md={9}>
                    <div
                        ref={reactFlowWrapper}
                        style={{ height: "80vh", border: "1px solid #ccc", borderRadius: 10 }}
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                    >
                        <ReactFlow
                            nodes={nodes}
                            edges={edges}
                            onNodesChange={onNodesChange}
                            onConnect={onConnect}
                            onEdgesChange={onEdgesChange}
                            fitView
                            nodeTypes={nodeTypes} 
                        >
                            <Controls />
                            <Background />
                        </ReactFlow>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ZapComponent;
