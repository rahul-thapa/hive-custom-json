import React, { Component } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

import hive_keychain from "../../Vendors/hive_keychain";

class CustomJson extends Component {
  state = {};

  onChangeHandler = (e) => {
    const key = e.target.name;
    const obj = {};
    obj[key] = e.target.value;
    this.setState({ ...obj });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    hive_keychain.requestCustomJson(
      this.state.username,
      this.state.id,
      this.state.key,
      this.state.json,
      "Doing stuff"
    );
  };
  render() {
    return (
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100vh",
        }}
      >
        <div style={{ marginTop: "10px" }}>
          <h2>
            Interface to broadcast custom json operations on the Hive
            blockchain.
          </h2>
          <p className="text-muted">Note: Requires keychain extension.</p>
        </div>

        <Card style={{ padding: "10px" }}>
          <Form className="mt-3">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={(e) => this.onChangeHandler(e)}
                type="text"
                name="username"
                placeholder="Username"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>JSON ID</Form.Label>
              <Form.Control
                onChange={(e) => this.onChangeHandler(e)}
                type="text"
                name="id"
                placeholder="ssc-mainnet-hive"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Key</Form.Label>
              <Form.Control
                onChange={(e) => this.onChangeHandler(e)}
                type="text"
                name="key"
                placeholder="active/posting"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>JSON</Form.Label>
              <Form.Control
                onChange={(e) => this.onChangeHandler(e)}
                as="textarea"
                name="json"
                rows={3}
              />
            </Form.Group>
            <Button onClick={this.onSubmitHandler}>Submit</Button>
          </Form>
        </Card>
        <p>
          Built by <a href="http://peakd.com/@rahul.stan">@rahul.stan</a>{" "}
        </p>
      </Container>
    );
  }
}

export default CustomJson;
