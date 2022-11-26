import { booleanCalculator } from "../src";

describe("evaluate and return the boolean expression from a string input", () => {
  it("returns the correct boolean expression for single value input",
    () => {
      const input:string = "TRUE";
      expect(booleanCalculator(input)).toEqual(true)
    });
  it("returns the correct boolean expression for single value input",
    () => {
      const input:string = "FALSE";
      expect(booleanCalculator(input)).toEqual(false)
    });
  it("returns the correct boolean expression for single value input",
    () => {
      const input:string = "NOT TRUE";
      expect(booleanCalculator(input)).toEqual(false)
    });
  it("returns the correct boolean expression for single value input",
    () => {
      const input:string = "TRUE AND FALSE";
      expect(booleanCalculator(input)).toEqual(false)
    });
  it("returns the correct boolean expression for single value input",
    () => {
      const input:string = "TRUE AND TRUE";
      expect(booleanCalculator(input)).toEqual(true)
    });
  it("returns the correct boolean expression for single value input",
    () => {
      const input:string = "TRUE OR FALSE";
      expect(booleanCalculator(input)).toEqual(true)
    });
  it("returns the correct boolean expression for single value input",
    () => {
      const input:string = "FALSE OR FALSE";
      expect(booleanCalculator(input)).toEqual(false)
    });
  it("returns the correct boolean expression for single value input",
    () => {
      const input:string = "FALSE OR FALSE OR FALSE AND FALSE";
      expect(booleanCalculator(input)).toEqual(false)
    });
  it("returns the correct boolean expression for single value input",
    () => {
      const input:string = "FALSE AND FALSE OR FALSE OR TRUE";
      expect(booleanCalculator(input)).toEqual(true)
    });
  it("returns the correct boolean expression for single value input",
    () => {
      const input:string = "TRUE OR FALSE AND NOT FALSE";
      expect(booleanCalculator(input)).toEqual(true)
    });
  it("returns the correct boolean expression for single value input",
    () => {
      const input:string = "(TRUE OR TRUE OR TRUE) AND FALSE";
      expect(booleanCalculator(input)).toEqual(false)
    });
  it("returns the correct boolean expression for single value input",
    () => {
      const input:string = "NOT (TRUE AND TRUE)";
      expect(booleanCalculator(input)).toEqual(false)
    });
});
