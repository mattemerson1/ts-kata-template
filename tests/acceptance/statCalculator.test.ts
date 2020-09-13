import { calculateStats } from "../../src/statCalculator";

describe("Stats Calculator", () => {
  it("should sort the array into numerical order", () => {
    // Arrange
    const inputArray = [6, 9, 15, -2, 92, 11];
    const statsObject = {
      minimum_value: -2,
      maximum_value: 92,
      number_of_elements: 6,
      average: 21.833333,
    };
    // Act

    // Assert
    expect(calculateStats(inputArray)).toEqual(statsObject);
  });
});
