import fizzbuzz from "../src/fizzbuzz";

describe("when I fizzbuzz 1", () => {
  it("should return '1'", () => {
    expect(fizzbuzz(1)).toBe("1");
  });
});

describe("when I fizzbuzz 2", () => {
  it("should return '2'", () => {
    expect(fizzbuzz(2)).toBe("2");
  });
});

describe("when I fizzbuzz 4", () => {
  it("should return '4'", () => {
    expect(fizzbuzz(4)).toBe("4");
  });
});

describe("when I fizzbuzz 3", () => {
  it("should return 'fizz'", () => {
    expect(fizzbuzz(3)).toBe("fizz");
  });
});

describe("when I fizzbuzz 6", () => {
  it("should return 'fizz'", () => {
    expect(fizzbuzz(6)).toBe("fizz");
  });
});

describe("when I fizzbuzz 5", () => {
  it("should return 'buzz'", () => {
    expect(fizzbuzz(5)).toBe("buzz");
  });
});

describe("when I fizzbuzz 10", () => {
  it("should return 'buzz'", () => {
    expect(fizzbuzz(10)).toBe("buzz");
  });
});

describe("when I fizzbuzz 15", () => {
  it("should return 'fizzbuzz'", () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
  });
});

describe("when I fizzbuzz 30", () => {
  it("should return 'fizzbuzz'", () => {
    expect(fizzbuzz(30)).toBe("fizzbuzz");
  });
});
