import { booleanCalculator } from "../src";

describe("evaluate and return the boolean expression from a string input", () => {
  it("returns the correct boolean expression for single value input", () => {
    const input = "TRUE";
    expect(booleanCalculator(input)).toEqual(true);
  });
  it("returns the correct boolean expression for single value input", () => {
    const input = "FALSE";
    expect(booleanCalculator(input)).toEqual(false);
  });
  it("returns the correct boolean expression for single value input", () => {
    const input = "NOT TRUE";
    expect(booleanCalculator(input)).toEqual(false);
  });
  it("returns the correct boolean expression for single value input", () => {
    const input = "TRUE AND FALSE";
    expect(booleanCalculator(input)).toEqual(false);
  });
  it("returns the correct boolean expression for single value input", () => {
    const input = "TRUE AND TRUE";
    expect(booleanCalculator(input)).toEqual(true);
  });
  it("returns the correct boolean expression for single value input", () => {
    const input = "TRUE OR FALSE";
    expect(booleanCalculator(input)).toEqual(true);
  });
  it("returns the correct boolean expression for single value input", () => {
    const input = "FALSE OR FALSE";
    expect(booleanCalculator(input)).toEqual(false);
  });
  it("returns the correct boolean expression for single value input", () => {
    const input = "FALSE OR FALSE OR FALSE AND FALSE";
    expect(booleanCalculator(input)).toEqual(false);
  });
  it("returns the correct boolean expression for single value input", () => {
    const input = "FALSE AND FALSE OR FALSE OR TRUE";
    expect(booleanCalculator(input)).toEqual(true);
  });
  it("returns the correct boolean expression for single value input", () => {
    const input = "TRUE OR FALSE AND NOT FALSE";
    expect(booleanCalculator(input)).toEqual(true);
  });
  it("returns the correct boolean expression for single value input", () => {
    const input = "(TRUE OR TRUE OR TRUE) AND FALSE";
    expect(booleanCalculator(input)).toEqual(false);
  });
  it("returns the correct boolean expression for single value input", () => {
    const input = "NOT (TRUE AND TRUE)";
    expect(booleanCalculator(input)).toEqual(false);
  });
  it("returns the correct boolean expression for single value input", () => {
    const input = "(((TRUE)))";
    expect(booleanCalculator(input)).toEqual(true);
  });
  it("returns the correct boolean expression for single value input", () => {
    const input = "(((TRUE AND FALSE)))";
    expect(booleanCalculator(input)).toEqual(false);
  });
  it("returns the correct boolean expression for single value input", () => {
    const input = "NOT NOT NOT TRUE";
    expect(booleanCalculator(input)).toEqual(false);
  });
  it("returns the correct boolean expression for single value input", () => {
    const input = "NOT NOT NOT NOT TRUE";
    expect(booleanCalculator(input)).toEqual(true);
  });
  it("returns the correct boolean expression for single value input", () => {
    const input = "NOT NOT NOT NOT TRUE AND FALSE";
    expect(booleanCalculator(input)).toEqual(false);
  });
});
