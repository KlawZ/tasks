import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");
    const intAttempts = parseInt(requestedAttempts) || 0;

    function useAttempt() {
        setAttempts(attempts - 1);
    }
    function gainAttempt() {
        setAttempts(attempts + intAttempts);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formNumber">
                <Form.Label>Number:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequestedAttempts(event.target.value)
                    }
                />
            </Form.Group>
            <Button onClick={useAttempt} disabled={attempts === 0}>
                use
            </Button>
            <Button onClick={gainAttempt}>gain</Button>
            <div>The number of attempts left is: {attempts}</div>
        </div>
    );
}
