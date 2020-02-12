class MessageService {
  async handle($) {
    try {
      const message = 'Command not found';

      $.sendMessage(message);
    } catch (ex) {
      console.error(ex);

      $.sendMessage('Error, try again later');
    }
  }

  async help($) {
    try {
      const message = 'I can help you search subtitles.\n\nYou can control me by sending these commands:\n\n/search {query} - search subtitle\n/help - command list';

      $.sendMessage(message);
    } catch (ex) {
      console.error(ex);

      $.sendMessage('Error, try again later');
    }
  }
}

module.exports = MessageService;
