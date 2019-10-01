const talk = (msg = "") => {
  if (msg.endsWith("?")) return "question";
  if (msg.endsWith("!")) return "exclamation";
  if (msg === "") return "silence";
  return "whatever";
};

// export default talk;
module.exports = talk;
