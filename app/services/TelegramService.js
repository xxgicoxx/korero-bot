class TelegramService {
  menu(response, scope) {
    const menu = { oneTimeKeyboard: true };
    const subtitles = response == null ? null : Object.values(response);

    if (!subtitles || !subtitles.length) {
      scope.sendMessage('Subtitle not found', {
        reply_markup: JSON.stringify({
          remove_keyboard: true,
          one_time_keyboard: true,
        }),
      });
    } else {
      menu.message = 'Select subtitle';

      subtitles.forEach((e) => {
        menu[`[${e.lang}] - ${e.filename}`] = () => {
          scope.sendMessage(e.url, {
            reply_markup: JSON.stringify({
              remove_keyboard: true,
              one_time_keyboard: true,
            }),
          });
        };
      });

      scope.runMenu(menu);
    }
  }
}

module.exports = TelegramService;
