import {
  minimumValue,
  maximumValue,
  sortArrayInNumericalOrder,
} from "../src/statCalculator";

describe("Stats Calculator", () => {
  it("should sort the array into numerical order", () => {
    // Arrange
    const inputArray = [6, 9, 15, -2, 92, 11];
    const sortedArray = [-2, 6, 9, 11, 15, 92];
    // Act
    sortArrayInNumericalOrder(inputArray);
    // Assert
    expect(inputArray).toEqual(sortedArray);
  });
  it("should determine the minimum value from an array of numbers", () => {
    // Arrange
    const expectedArray = [6, 9, 15, -2, 92, 11];
    // Act
    minimumValue(expectedArray);
    // Assert
    expect(expectedArray[0]).toEqual(-2);
  });
  it("should determine the maximum value from an array of numbers", () => {
    // Arrange
    const expectedArray = [6, 9, 15, -2, 92, 11];
    // Act
    maximumValue(expectedArray);
    // Assert
    expect(expectedArray[expectedArray.length - 1]).toEqual(92);
  });
});
