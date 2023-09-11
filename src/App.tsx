import React from "react";
import "./App.css";
import img from "./images/image.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Kledis Zaimi
            </p>
            <h1>This is my header</h1>
            <img
                src={img}
                alt="My favorite soccer team"
                height={150}
                width={150}
            />
            <ul>
                <li>First</li>
                <li>Second</li>
                <li>Third</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <br />
            <br />
            <Container>
                <Row>
                    <Col>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed in pharetra nulla. Aliquam malesuada luctus velit,
                        sed vestibulum sapien ultricies id. In ac sodales
                        tellus. Donec ut urna ut mauris maximus dapibus eu a
                        massa. Vivamus quam dui, imperdiet sed tortor ut,
                        interdum egestas arcu. In id neque sollicitudin,
                        suscipit lectus eget, semper leo. Fusce vitae erat
                        justo. Phasellus iaculis neque nec tellus ullamcorper,
                        eget aliquam quam bibendum. Nullam feugiat auctor lacus,
                        sed congue ex maximus sit amet. Aliquam mollis velit ut
                        felis efficitur, et cursus elit dapibus. Nam lobortis
                        nisi id ligula vestibulum, ac feugiat ex iaculis.
                        Interdum et malesuada fames ac ante ipsum primis in
                        faucibus.
                        <div className="red"></div>
                    </Col>
                    <Col>
                        Vivamus laoreet a quam vel vestibulum. Nulla eget nisi
                        efficitur, posuere enim a, placerat nulla. Aenean diam
                        arcu, aliquet in tincidunt vitae, cursus id tortor.
                        Pellentesque neque est, ornare id fringilla sit amet,
                        porta vel dui. Maecenas volutpat vehicula ligula nec
                        molestie. Nunc ut vulputate mauris. Suspendisse nec
                        elementum libero. Nam egestas enim eget ullamcorper
                        imperdiet. Quisque imperdiet est eget placerat egestas.
                        Praesent tortor lorem, molestie eu cursus sed, volutpat
                        quis tellus. Mauris tristique ut dolor sed malesuada.
                        Vivamus congue velit ut pulvinar sollicitudin.
                        <div className="red"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
