module.exports = {
  wsPort: Number.parseInt(process.env.WS_PORT, 10) || 4342,
  cmdPort: Number.parseInt(process.env.CMD_PORT, 10) || 4343,
};
