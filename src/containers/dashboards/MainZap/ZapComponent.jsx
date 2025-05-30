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


let id = 0;
const getId = () => `${id++}`;

const ZapComponent = () => {
    const reactFlowWrapper = useRef(null);
    const reactFlowInstance = useReactFlow();
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);

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
        const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
        const label = event.dataTransfer.getData("application/reactflow");
        console.log(label,event.dataTransfer)
        const type = "default";
        const position =reactFlowInstance.project?({
            x: event.clientX - reactFlowBounds.left,
            y: event.clientY - reactFlowBounds.top,
        }):({
            x:200,y:200
        },{
            x:200,y:200
        })



        const newNode = {
            id: getId(),
            type,
            position,
            data: { label },
          };

        setNodes((nds) => [...nds, newNode]);
    };



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
                            nodeTypes={{ default: CustomNode }} 
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
