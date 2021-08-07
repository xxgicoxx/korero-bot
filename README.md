# Korero Bot
Telegram bot for searching subtitles.

![Bot](https://i.imgur.com/zkHn3eg.png)

# Features
* /subtitles {query} - Search subtitles
* /theatres - In Theaters
* /popular movie - Popular movies
* /popular person - Popular persons
* /popular tv - Popular tv shows
* /trending all - Trending
* /trending movie - Trending movies
* /trending person - Trending persons
* /trending tv - Trending tv shows
* /commands - Command list
* /help - Help
* /about - About

# Prerequisites
* [Node.js](https://nodejs.org/en/)

# Running
### 1. Configure
````
# Bot
Create and configure .env file like .env.example
````

### 2. Telegram
````
# Create an Telegram bot
Find @BotFather on Telegram, type /newbot and follow the instructions

# Username
Get your bot username and set 'TELEGRAM_USERNAME' in .env

# Token
Get your token from @BotFather and set 'TELEGRAM_TOKEN' in .env
````

### 3. OpenSubtitles
````
# Create an OpenSubtitles account
Create an OpenSubtitles account on https://opensubtitles.org

# UserAgent
Request your own UserAgent https://trac.opensubtitles.org/projects/opensubtitles/wiki/DevReadFirst#Howtorequestanewuseragent. Only for testing and developing purposes you can use special user agent "TemporaryUserAgent". Never use this UA as default/public/in production code, we periodically change this and your APP will stop work! Also don't abuse usage of this test user agent

# Configure
Get your UserAgent and credentials and set in .env
````

### 4. TMDb
````
# Account
Create an TMDb (https://www.themoviedb.org/) account.

# API Key
You can apply for an API key by clicking the "API" (https://www.themoviedb.org/settings/api) link from the left hand sidebar within your account settings page. You need to have a legitimate business name, address, phone number and description to apply for an API key. Get your API key and set 'TMDB_APIKEY' in .env.
````

### 5. Run
````
# Install dependencies
npm install

# Start
npm start
````

# Built With
* [Node.js](https://nodejs.org/en/)

# Authors
* [xxgicoxx](https://github.com/xxgicoxx)

# Acknowledgments
* [FlatIcon](https://www.flaticon.com/)
* [OpenSubtitles](https://www.opensubtitles.org)
* [The Movie Database](https://www.themoviedb.org/)