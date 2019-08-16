# Korero
Korero is an Telegram bot for searching subtitles.

![Bot](https://i.imgur.com/zkHn3eg.png)
![Inline Bot](https://i.imgur.com/Hs2YIaZ.png)

### Prerequisites
* [Node.js](https://nodejs.org/en/) - Node.js

### Running
The server can be run locally and also deployed to your own server. You will need to register your own Telegram Bot and set the credentials in 'config/auth.js'.

### OpenSubtitles
````
# Create an OpenSubtitles account
Create an OpenSubtitles account on https://opensubtitles.org

# UserAgent
Request your own UserAgent https://trac.opensubtitles.org/projects/opensubtitles/wiki/DevReadFirst#Howtorequestanewuseragent. Only for testing and developing purposes you can use special user agent "TemporaryUserAgent". Never use this UA as default/public/in production code, we periodically change this and your APP will stop work! Also don't abuse usage of this test user agent

# Configure
Get your UserAgent and credentials and set in 'config/auth.js'
````

### Telegram
````
# Create an Telegram bot
Find @BotFather on Telegram, type /newbot and follow the instructions

# Configure
Get your token from @BotFather and set in 'config/auth.js'
````

### Run
````
# Install dependencies
npm install

# Run
npm start
````

### Built With
* [Node.js](https://nodejs.org/en/)

### Authors
* **Giovani de Oliveira** - [xxgicoxx](https://github.com/xxgicoxx)