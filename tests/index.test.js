const { sortDescending, findMaxSubarray, countEvenNumbers } = require("../src/index");

describe("sortDescending", () => {
  test("should sort array from largest to smallest", () => {
    const input = [1, 2, 4, 3, 5, 3, 2, 1];
    const expected = [5, 4, 3, 3, 2, 2, 1, 1];
    expect(sortDescending(input)).toEqual(expected);
  });
});

describe("findMaxSubarray", () => {
  test("should return 700 for [100, 200, 300, 400] with window 2", () => {
    expect(findMaxSubarray([100, 200, 300, 400], 2)).toBe(700);
  });

  test("should return 39 for [1, 4, 2, 10, 23, 3, 1, 0, 20] with window 4", () => {
    expect(findMaxSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
  });

  test("should return 5 for [-3, 4, 0, -2, 6, -1] with window 2", () => {
    expect(findMaxSubarray([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
  });

  test("should return null if window is larger than array", () => {
    expect(findMaxSubarray([1, 2, 3], 5)).toBeNull();
  });
});

describe("countEvenNumbers", () => {
  test("should count evens and sum them (first input)", () => {
    const input = {
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: "yup",
        },
      },
    };
    expect(countEvenNumbers(input)).toBe(6);
  });

  test("should count evens and sum them (second input)", () => {
    const input = {
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: "ball", ccc: 5 },
      d: 1,
      e: { e: { e: 4 }, ee: "car" },
    };
    expect(countEvenNumbers(input)).toBe(12);
  });
});
