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
        const type = event.dataTransfer.getData("application/reactflow");

        const position = reactFlowInstance.project({
            x: event.clientX - reactFlowBounds.left,
            y: event.clientY - reactFlowBounds.top,
        });



        const newNode = {
            id: getId(),
            type,
            position,
            data: { label: `${type} node` },
        };

        setNodes((nds) => [...nds, newNode]);
    };



    return (
        <Container fluid style={{ height: "100vh", padding: "20px" }}>
            <Row>
                {/* Sidebar */}
                <Col md={3}>
                    <div style={{ padding: 10, border: "1px solid #ddd" }}>
                        <h5>Drag a node</h5>
                        <div
                            style={{
                                border: "1px dashed gray",
                                padding: "8px",
                                marginBottom: "10px",
                                cursor: "grab",
                                background: "#fff",
                                textAlign: "center",
                            }}
                            draggable
                            onDragStart={(event) =>
                                event.dataTransfer.setData("application/reactflow", "default")
                            }
                        >
                            Default Node
                        </div>
                    </div>
                </Col>

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
