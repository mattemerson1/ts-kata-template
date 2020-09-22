import foo from "../src";

describe("foo", () => {
  it("should ...", () => {
    // Arrange
    // Act
    // Assert
  });
  it.each`
    input | expected
    ${1}  | ${"1"}
  `("should convert $input into '$expected'", ({ input, expected }) => {
    // Arrange
    // Act
    // Assert
  });
});
