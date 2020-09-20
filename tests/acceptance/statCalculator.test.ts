import {
  minimumValue,
  maximumValue,
  arrLength,
  arrAverage,
  calculateStats,
} from "../../src/statCalculator";
describe("Stats Calculator", () => {
  it("should sort the array into numerical order", () => {
    // Arrange
    const inputArray = [6, 9, 15, -2, 92, 11];
    const statsObject = {
      minimumValue: -2,
      maximumValue: 92,
      numberOfElements: 6,
      average: 21.833333,
    };
    // Act

    // Assert
    expect(
      calculateStats(
        inputArray,
        minimumValue,
        maximumValue,
        arrLength,
        arrAverage
      )
    ).toEqual(statsObject);
  });
});
