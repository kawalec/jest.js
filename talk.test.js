// import talk from "./talk";
const talk = require("./talk");

test("answers to question message", () => {
  expect(talk("How are you?")).toBe("question");
});

test("answers to exclamation message", () => {
  expect(talk("Don't touch this!")).toBe("exclamation");
});

test("answers to exclamation message", () => {
  expect(talk("")).toBe("silence");
});

test("answers to exclamation message", () => {
  expect(talk("1234567890")).toBe("whatever");
});
