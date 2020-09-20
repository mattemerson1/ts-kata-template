import {
  minimumValue,
  maximumValue,
  arrLength,
  arrAverage,
  calculateStats,
} from "../../src/statCalculator";

describe("Stats Calculator", () => {
  it("should determine the minimum value from an array of numbers", () => {
    // Arrange
    const sortedArray = [-2, 6, 9, 11, 15, 92];
    // Act

    // Assert
    expect(minimumValue(sortedArray)).toEqual(-2);
  });
  it("should determine the maximum value from an array of numbers", () => {
    // Arrange
    const sortedArray = [-2, 6, 9, 11, 15, 92];
    // Act

    // Assert
    expect(maximumValue(sortedArray)).toEqual(92);
  });
  it("should determine the number of elements in an array", () => {
    // Arrange
    const sortedArray = [-2, 6, 9, 11, 15, 92];
    // Act

    // Assert
    expect(arrLength(sortedArray)).toEqual(6);
  });
  it("should determine the average of all elements in an array", () => {
    // Arrange
    const sortedArray = [-2, 6, 9, 11, 15, 92];
    // Act

    // Assert
    expect(arrAverage(sortedArray)).toEqual(21.833333);
  });
});
describe("calculateStats test", () => {
  it("should return min value, max value, average, and length in an object", () => {
    // Arrange
    const StatsObject = {
      minimumValue: -2,
      maximumValue: 92,
      numberOfElements: 6,
      average: 21.833333,
    };
    const inputArray = [6, 9, 15, -2, 92, 11];
    const mockMinimumValue = jest.fn((inputArray) => Math.min(...inputArray));
    const mockMaximumValue = jest.fn((inputArray) => Math.max(...inputArray));
    const mockArrLength = jest.fn((inputArray) => inputArray.length);
    const mockArrAverage = jest.fn((inputArray) =>
      Number(
        (
          inputArray.reduce((a: number, b: number) => a + b) / inputArray.length
        ).toFixed(6)
      )
    );
    // Act

    // Assert
    expect(
      calculateStats(
        inputArray,
        mockMinimumValue,
        mockMaximumValue,
        mockArrLength,
        mockArrAverage
      )
    ).toStrictEqual(StatsObject);
  });
});
