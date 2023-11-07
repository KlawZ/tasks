import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const options = [
        "Red",
        "Blue",
        "Green",
        "Yellow",
        "Purple",
        "Pink",
        "Brown",
        "Grey"
    ];
    const [color, setColor] = useState<string>(options[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {options.map((option: string) => (
                <Form.Check
                    key={option}
                    type="radio"
                    name="colours"
                    style={{ backgroundColor: option }}
                    onChange={updateColor}
                    id={`colors-check-${color}`}
                    label={option}
                    value={option}
                    checked={color === option}
                />
            ))}
            <div>You have chosen</div>
            <span data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}
            </span>
        </div>
    );
}
