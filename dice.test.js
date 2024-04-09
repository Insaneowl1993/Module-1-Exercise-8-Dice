import { rollDice } from "./dice";
import { expect, test } from "vitest";

test("the dice rolls a number", () => {
    expect(rollDice(6)).toBeTypeOf
    ("number")
})

test("the dice doesn't roll the same number twice", () => {
    const a = rollDice (6)
    const b = rollDice(6)
    expect(a).not.toBe(b)
})
