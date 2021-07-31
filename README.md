# Simple-Twitter-Clone

![ezgif com-gif-maker](https://user-images.githubusercontent.com/26392038/127730836-c90309a1-2dc9-487f-bf6e-3a1c7b8baeca.gif)


## A very basic twitter clone with VueJS and TailwindCSS.

This is a very simple twitter clone which you can login, tweet and navigate between hashtags, tweets, replies and users like twitter. You cannot signup, reply, like, retweet, or share tweets like fully featured twitter clone, or the real twitter, so that's the reason of why it's named as simple-twitter-clone at the first place😶. It has responsive layout and acts different if user logged in. It uses [fakerjs](github.com/Marak/Faker.js) to generate fake data and [json-server](https://github.com/typicode/json-server) as a fake REST api to serve that data. It also uses [axios](https://github.com/axios/axios) as http client for communicate with that REST api [vuex](https://vuex.vuejs.org/) for state management, [vue router](https://router.vuejs.org/) for navigation.  

## Features 
### 📱 Responsive layout

<p  float="left">
<img alt="ezgif com-gif-maker (7)" src="https://user-images.githubusercontent.com/26392038/127731798-de82e5bc-fe62-4751-83a6-4f1dccddfb66.gif" width="45%">
&nbsp
<img alt="ezgif com-gif-maker (6)" src="https://user-images.githubusercontent.com/26392038/127732868-4b7eba02-793c-43f7-abf2-f047d9d69718.gif" width="45%">
</p>
<p  float="left">
<img alt="ezgif com-gif-maker (3)" src="https://user-images.githubusercontent.com/26392038/127732326-78de1270-d3c6-4eb6-9fc7-d14de260e4d6.gif" width="45%">
&nbsp
<img alt="ezgif com-gif-maker" src="https://user-images.githubusercontent.com/26392038/127732929-1fa519f3-e289-4925-baba-82aab3b5fc63.gif" width="45%">
</p>

### 🤓 A little bit unrealistic login mechanism.

To be able to simulate login mechanism without using auth libraries, plain text username and password is hardcoded to db. Since it doesn't have a real login mechanism if the username and password which is provided by user matches with the ones at db, it returns a user object instead of auth tokens. So it doesn't have a real login mechanism. To be able to login, you can use "Admin" as username and "123456" as password. 

![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/26392038/127732831-13b17959-e767-4b2e-b6c1-af78eae20457.gif)

![ezgif com-gif-maker (8)](https://user-images.githubusercontent.com/26392038/127731830-70169814-2473-40c0-b542-1147c7f87402.gif)


### 👌 Realistic navigation 

![ezgif com-gif-maker](https://user-images.githubusercontent.com/26392038/127732929-1fa519f3-e289-4925-baba-82aab3b5fc63.gif)


### 👮‍♀️ Route guard/ Navigation guard & Redirects

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/26392038/127732689-11013683-2bf5-44a9-a670-bdc8a5823ef2.gif)

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/26392038/127732485-803928a4-9f8a-4579-8111-9cea35cb4322.gif)


### 📦 Localstorage, fake REST api and Consuming REST api

![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/26392038/127733121-f1c9c944-783d-4421-8f88-e00bdfc606d1.gif)


## Installation & Usage
To install dependencies
```
npm install 
```
To generate mock data and serve it over via localhost:3000 with json-server
```
npm run generate 
```
For front end stuff run
```
npm run serve
```
from new terminal then navigate localhost:8080 from your browser's adressbar
