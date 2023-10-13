/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎃");

    function nextHolidayAlphabetically(): void {
        setHoliday(
            holiday === "🎂"
                ? "🎄"
                : holiday === "🎄"
                ? "🎃"
                : holiday === "🎃"
                ? "👩‍👧‍👦"
                : holiday === "👩‍👧‍👦"
                ? "🎆"
                : "🎂"
        );
    }
    function nextCalendarHoliday(): void {
        setHoliday(
            holiday === "👩‍👧‍👦"
                ? "🎂"
                : holiday === "🎂"
                ? "🎃"
                : holiday === "🎃"
                ? "🎄"
                : holiday === "🎄"
                ? "🎆"
                : "👩‍👧‍👦"
        );
    }

    return (
        <div>
            <Button onClick={nextHolidayAlphabetically}>
                Advance By Alphabet
            </Button>
            <Button onClick={nextCalendarHoliday}>Advance By Year</Button>
            {`Holiday: ${holiday}`}
        </div>
    );
}
