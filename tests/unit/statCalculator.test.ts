import {
  sortArrayInNumericalOrder,
  minimum_value,
  maximum_value,
  numberOfElements,
  arrAverage,
} from "../../src/statCalculator";

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
    const sortedArray = [-2, 6, 9, 11, 15, 92];
    // Act

    // Assert
    expect(minimum_value(sortedArray)).toEqual(-2);
  });
  it("should determine the maximum value from an array of numbers", () => {
    // Arrange
    const sortedArray = [-2, 6, 9, 11, 15, 92];
    // Act

    // Assert
    expect(maximum_value(sortedArray)).toEqual(92);
  });
  it("should determine the number of elements in an array", () => {
    // Arrange
    const sortedArray = [-2, 6, 9, 11, 15, 92];
    // Act

    // Assert
    expect(numberOfElements(sortedArray)).toEqual(6);
  });
  it("should determine the average of all elements in an array", () => {
    // Arrange
    const sortedArray = [-2, 6, 9, 11, 15, 92];
    // Act

    // Assert
    expect(arrAverage(sortedArray)).toEqual(21.833333);
  });
});
