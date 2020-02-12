# Korero
Telegram bot for searching subtitles.

![Bot](https://i.imgur.com/zkHn3eg.png)

### Prerequisites
* [Node.js](https://nodejs.org/en/) - Node.js

### Running
The server can be run locally and also deployed to your own server.

### OpenSubtitles
````
# Create an OpenSubtitles account
Create an OpenSubtitles account on https://opensubtitles.org

# UserAgent
Request your own UserAgent https://trac.opensubtitles.org/projects/opensubtitles/wiki/DevReadFirst#Howtorequestanewuseragent. Only for testing and developing purposes you can use special user agent "TemporaryUserAgent". Never use this UA as default/public/in production code, we periodically change this and your APP will stop work! Also don't abuse usage of this test user agent

# Configure
Get your UserAgent and credentials and set in 'configs/opensubtitles.js'
````

### Telegram
````
# Create an Telegram bot
Find @BotFather on Telegram, type /newbot and follow the instructions

# Configure
Get your token from @BotFather and set in 'configs/telegram.js'
````

### Run
````
# Install dependencies
npm install

# Start
npm start
````

### Built With
* [Node.js](https://nodejs.org/en/)

### Authors
* **Giovani de Oliveira** - [xxgicoxx](https://github.com/xxgicoxx)