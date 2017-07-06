const message = require('./message/message.service.js');
const messages = require('./messages/messages.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(message);
  app.configure(messages);
};
