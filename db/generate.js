module.exports = function() {
  var faker = require("faker");
  var _ = require("lodash");
  const createFakeUsersArr=_.times(20, function(n) {
    return {
      userId: n + 1,
      name: faker.internet.userName(),
      alias: faker.random.word(),
      avatar: faker.image.avatar(),
      info: faker.lorem.sentences(),
      location: faker.address.country(),
      joinedAt: faker.date.between("2008-01-01", "2020-01-01"),
      following: faker.datatype.number(1500),
      followers: faker.datatype.number(200000),
    };
  })
const hardCodedAdminUser={
  userId:21,
  name:"Admin",
  alias:"Hardcoded",
  avatar:undefined,
  info:"",
  location:"",
  joinedAt: new Date(),
  following:0,
  followers:0

}  
let allUsers=[...createFakeUsersArr,hardCodedAdminUser];
  return {
    
    users: allUsers ,

    status: _.times(200, function(n) {
      return {
        userId: faker.datatype.number({ min: 1, max: 20 }),
        id: n + 1,
        title: faker.lorem.sentences(),
        createdAt: faker.date.between("2020-08-01", "2020-08-22"),
        hasMedia: faker.datatype.number({ min: 1, max: 20 }),
        media: ["https://via.placeholder.com/900x900.jpg/"],
        likes: faker.datatype.number(10000),
        retweets: faker.datatype.number(500),
      };
    }),
    search: _.times(200, function(n) {
      return {
        statusId: n + 1,
        hashtags: faker.random.arrayElement([
          { keyword: null, genre: null, location: null },
          {
            keyword: "#AnAngryHashtag",
            genre: "Politics",
            location: "Global",
          },
          {
            keyword: "#Hashtag",
            genre: "Music",
            location: "Global",
          },
          {
            keyword: "#OneMoreHashtag",
            genre: "Entertainment",
            location: "Global",
          },
          {
            keyword: "#OneMoreAngryHashtag",
            genre: null,
            location: "Bonobo",
          },
          {
            keyword: "Angry_Hashtag",
            genre: null,
            location: "Bonobo",
          },
          {
            keyword: "Hashtag_Without_Hash",
            genre: null,
            location: "Bonobo",
          },
          {
            keyword: "A_Hashtag",
            genre: null,
            location: "Bonobo",
          },
        ]),
      };
    }),
    replies: _.times(100, function(n) {
      return {
        userId: faker.datatype.number({ min: 1, max: 20 }),
        id: n + 200 + 1,
        replyToId: faker.datatype.number({ min: 75, max: 100 }),
        title: faker.lorem.sentences(),
        createdAt: faker.date.between("2020-08-22", "2020-09-01"),
        hasMedia: faker.datatype.number({ min: 1, max: 20 }),
        media: ["https://via.placeholder.com/900x900.jpg/"],
        likes: faker.datatype.number(3000),
        retweets: faker.datatype.number(150),
      };
    }),
    trending:[
        {
          "keyword": "#AnAngryHashtag",
          "genre": "Politics",
          "location": "Global",
          "count": 23
        },
        {
          "keyword": "#Hashtag",
          "genre": "Music",
          "location": "Global",
          "count": 17
        },
        {
          "keyword": "#OneMoreAngryHashtag",
          "genre": null,
          "location": "Bonobo",
          "count": 34
        },
        {
          "keyword": "#OneMoreHashtag",
          "genre": "Entertainment",
          "location": "Global",
          "count": 29
        },
        {
          "keyword": "A_Hashtag",
          "genre": null,
          "location": "Bonobo",
          "count": 25
        },
        {
          "keyword": "Angry_Hashtag",
          "genre": null,
          "location": "Bonobo",
          "count": 23
        },
        {
          "keyword": "Hashtag_Without_Hash",
          "genre": null,
          "location": "Bonobo",
          "count": 28
        }
      ],
      accounts: [
        {
          "userId": 21,
          "name": "Admin",
          "password": "123456"
        }
      ],
    
  };
};
