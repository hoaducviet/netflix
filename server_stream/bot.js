const TelegramBot = require('node-telegram-bot-api');

// Thay YOUR_BOT_TOKEN bằng token của bạn
const token = '7322701731:AAFZbtOgKDL-a6WzsBXXmCozGXAkil5hWM4';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    if (msg.photo) {
        const photo = msg.photo[msg.photo.length - 1]; // Lấy ảnh có độ phân giải cao nhất
        bot.sendMessage(msg.chat.id, `File ID của ảnh là: ${photo.file_id}`);
    } else if (msg.video) {
        bot.sendMessage(msg.chat.id, `File ID của video là: ${msg.video.file_id}`);
    } else if (msg.document) {
        bot.sendMessage(msg.chat.id, `File ID của tài liệu là: ${msg.document.file_id}`);
    } else if (msg.audio) {
        bot.sendMessage(msg.chat.id, `File ID của âm thanh là: ${msg.audio.file_id}`);
    } else if (msg.voice) {
        bot.sendMessage(msg.chat.id, `File ID của giọng nói là: ${msg.voice.file_id}`);
    } else if (msg.video_note) {
        bot.sendMessage(msg.chat.id, `File ID của ghi chú video là: ${msg.video_note.file_id}`);
    } else {
        bot.sendMessage(msg.chat.id, 'Gửi một ảnh, video, tài liệu, âm thanh hoặc giọng nói để nhận File ID.');
    }
});

console.log('The bot is running');