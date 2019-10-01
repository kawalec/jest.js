// import talk from "./talk";
const talk = require("./talk");

test("return text message", () => {
  expect(talk()).toBe("text");
});
