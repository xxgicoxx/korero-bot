class MessageService {
  hanlde(scope) {
    scope.sendMessage('Command not found');
  }

  start(scope) {
    scope.sendMessage(`Hello, ${scope.message.from.firstName}`);
  }

  help(scope) {
    scope.sendMessage('I can help you search subtitles.\n\nYou can control me by sending these commands:\n\n/search {query} - search subtitle\n/help - command list');
  }
}

module.exports = MessageService;
