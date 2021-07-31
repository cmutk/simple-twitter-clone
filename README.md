# Simple-Twitter-Clone

![ezgif com-gif-maker](https://user-images.githubusercontent.com/26392038/127730836-c90309a1-2dc9-487f-bf6e-3a1c7b8baeca.gif)


## A very basic twitter clone with VueJS and TailwindCSS.

This is a very simple twitter clone which you can login, tweet and navigate between hashtags, tweets, replies and users like twitter. You cannot signup, reply, like, retweet, or share tweets like fully featured twitter clone, or the real twitter, so that's the reason of why it's named as simple-twitter-clone anyway😶. It has responsive layout and acts different if user logged in. It uses [fakerjs](github.com/Marak/Faker.js) to generate fake data and [json-server](https://github.com/typicode/json-server) as a fake REST api to serve that data.  

## Features

- 📱 Responsive layout
- 🤓 Pretty unrealistic login mechanism with hardcoded plaintext username and password. To be able to login use "Admin" as username and 123456 as password. 
- 👌 Realistic navigation, 
- 👮‍♀️ Custom Form Validation
- 📦 Local Storage based data persistance
- 🧩 Fragment based templates for HTML

## Installation
```
npm install 
```
## Usage
To generate mock data and serve it over via localhost:3000 with json-server
```
npm run generate 
```
For front end stuff run
```
npm run serve
```
from new terminal then navigate localhost:8080 from your browser's adressbar
