# Simple-Twitter-Clone

<img alt="main_image" src="https://user-images.githubusercontent.com/26392038/127754902-996738b1-4f43-4748-8ef1-d652b5b6f045.gif" width="100%">

## A very basic twitter clone with VueJS and TailwindCSS.

This is a very simple twitter clone which you can login, tweet and navigate between hashtags, tweets, replies and users like twitter. You cannot signup, reply, like, retweet, or share tweets like fully featured twitter clone, or the real twitter, so that's the reason of why it's named as simple-twitter-clone at the first place😶. It has responsive layout and acts different if user logged in. It uses [fakerjs](github.com/Marak/Faker.js) to generate fake data and [json-server](https://github.com/typicode/json-server) as a fake REST api to serve that data. It also uses [axios](https://github.com/axios/axios) as http client for communicate with that REST api [vuex](https://vuex.vuejs.org/) for state management, [vue router](https://router.vuejs.org/) for navigation.  

## Features 
### 📱 Responsive layout

<p  float="left">
<img alt="ezgif com-gif-maker (7)" src="https://user-images.githubusercontent.com/26392038/127731798-de82e5bc-fe62-4751-83a6-4f1dccddfb66.gif" width="49%">
&nbsp
<img alt="ezgif com-gif-maker (6)" src="https://user-images.githubusercontent.com/26392038/127732868-4b7eba02-793c-43f7-abf2-f047d9d69718.gif" width="49%">
</p>
<p  float="left">
<img alt="ezgif com-gif-maker (3)" src="https://user-images.githubusercontent.com/26392038/127732326-78de1270-d3c6-4eb6-9fc7-d14de260e4d6.gif" width="49%">
&nbsp
<img alt="ezgif com-gif-maker" src="https://user-images.githubusercontent.com/26392038/127732929-1fa519f3-e289-4925-baba-82aab3b5fc63.gif" width="49%">
</p>

### 🤓 A little bit unrealistic login mechanism.

To be able to simulate login mechanism without using auth libraries, plain text username and password is hardcoded to db. Since it doesn't have a real login mechanism if the username and password which is provided by user matches with the ones at db, it returns a user object instead of auth tokens. So it doesn't have a real login mechanism. To be able to login, you can use "Admin" as username and "123456" as password. 

<p  float="left">
<img alt="Llgin_desktop" src="https://user-images.githubusercontent.com/26392038/127732831-13b17959-e767-4b2e-b6c1-af78eae20457.gif" width="49%">
&nbsp
<img alt="login_mobile" src="https://user-images.githubusercontent.com/26392038/127731830-70169814-2473-40c0-b542-1147c7f87402.gif" width="49%">
</p>


### 👌 Realistic navigation with route guard/ navigation guard & redirects 👮‍♀️
<p  float="left">
<img alt="main_image" src="https://user-images.githubusercontent.com/26392038/127754902-996738b1-4f43-4748-8ef1-d652b5b6f045.gif" width="49%">
&nbsp
<img alt="route_guard" src="https://user-images.githubusercontent.com/26392038/127754910-579c18a0-5243-4abb-bb5a-ccc8e8e6ab07.gif" width="49%">
</p>


### 📦 Localstorage, fake REST api and consuming REST api

<img alt="ezgif com-gif-maker (5)" src="https://user-images.githubusercontent.com/26392038/127733121-f1c9c944-783d-4421-8f88-e00bdfc606d1.gif" width="100%">



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
