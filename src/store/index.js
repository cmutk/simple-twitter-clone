import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index.js";
import axios from "axios";

Vue.use(Vuex, axios);
axios.defaults.baseURL = "http://localhost:3000";
export default new Vuex.Store({
  state: {
    loggedUser: [],
    userCreds: [],
    trendings: [],
    searchResults: [],
    users: [],
    status: [],
    tweets: [],
    replies: [],
    selectedUser: [],
    selectedTweet: [],
    randomUsers: [],
  },
  mutations: {
    setLoggedUser(state, user) {
      localStorage.setItem("user.info", JSON.stringify(user));
      state.loggedUser = user;
    },
    setTrendings(state, trendings) {
      state.trendings = trendings;
    },
    setSelectedUser(state, user) {
      state.selectedUser = user;
    },
    setStatus(state, status) {
      state.status = status;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setReplies(state, replies) {
      state.replies = replies;
    },
    setTweets(state, tweets) {
      state.tweets = tweets;
    },
    setTweet(state, tweet) {
      localStorage.setItem("selected.tweet", JSON.stringify(tweet));
      state.selectedTweet = tweet;
    },
    setRandomUsers(state, randomUsers) {
      state.randomUsers = randomUsers;
    },
  },
  actions: {
    fetchAndCheckAcc(context, credentials) {
      axios.get("/accounts").then((response) => {
        const resObj = response.data[0];
        if (
          credentials.username === resObj.name &&
          credentials.password === resObj.password
        ) {
          context.dispatch("fetchLoggedUser", resObj.userId);
        } else {
          context.dispatch(
            "redirectToLoginPageWithError",
            credentials.username
          );
        }
      });
    },
    fetchLoggedUser(context, id) {
      axios
        .get("/users?userId=" + id)
        .then((response) => {
          context.commit("setLoggedUser", response.data);
        })
        .then(() => {
          context.dispatch("routeToLoggedUserPage");
        });
    },
    routeToLoggedUserPage() {
      router.push("/home");
    },
    redirectToLoginPageWithError(context, userName) {
      router.push({
        name: "Login",
        params: { Error: "error" },
        query: { username_or_email: `${userName}`, redirect_after_login: "/" },
      });
    },
    postNewStatus(context, title) {
      axios
        .post(`/status`, {
          userId: 21,
          id: Date.now(),
          title: title,
          createdAt: Date.now(),
          hasMedia: null,
          media: null,
          likes: 0,
          retweets: 0,
        })
        .then((response) => {
          const statusParam = "status?userId=" + response.data.userId;
          context.dispatch("fetchTweets", statusParam);
        });
    },
    fetchTrendings(context) {
      axios.get("/trending").then((response) => {
        context.commit("setTrendings", response.data);
      });
    },
    fetchSearchResults(context, queryString) {
      axios.get(`/search?q=${queryString}`).then((response) => {
        const searchResults = response.data;
        let statusIdArr = [];
        searchResults.forEach((result) => {
          statusIdArr.push("id=" + result.statusId);
        });
        const statusParam = "status?" + statusIdArr.join("&");
        context.dispatch("fetchTweets", statusParam);
      });
    },
    fetchUserStatus(context, username) {
      axios.get(`users?name=${username}`).then((response) => {
        const userArr = response.data;
        const statusParam = "status?userId=" + userArr[0].userId;
        context.dispatch("fetchTweets", statusParam);
        context.commit("setSelectedUser", userArr[0]);
      });
    },
    fetchReplyTweets(context, statusId) {
      const replyTweetParam = "replies?replyToId=" + statusId;
      context.dispatch("fetchTweets", replyTweetParam);
    },

    fetchTweets(context, queryString) {
      axios.get(`/${queryString}`).then((response) => {
        const statusArr = response.data;
        let userIdArr = [];
        let repliesIdArr = [];
        statusArr.forEach((stat) => {
          userIdArr.push("userId=" + stat.userId);
          repliesIdArr.push("replyToId=" + stat.id);
        });
        const userParam = "users?" + [...new Set(userIdArr)].join("&");
        const repliesParam = "replies?" + [...new Set(repliesIdArr)].join("&");
        context.dispatch("fetchUsers", userParam);
        context.dispatch("fetchReplies", repliesParam);
        context.commit("setStatus", response.data);
      });
    },
    fetchUsers(context, queryString) {
      axios.get(`/${queryString}`).then((response) => {
        context.commit("setUsers", response.data);
      });
    },
    fetchReplies(context, queryString) {
      axios.get(`/${queryString}`).then((response) => {
        context.commit("setReplies", response.data);
        context.dispatch("createTweetsFromData");
      });
    },

    createTweetsFromData({ commit, state }) {
      const rawStatus = state.status;
      const copyOfRawStatus = rawStatus;
      const rawUsers = state.users;
      const copyOfRawUsers = rawUsers;
      const rawReplies = state.replies;
      const copyOfRawReplies = rawReplies;
      copyOfRawStatus.forEach((stat) => {
        const filteredUsersArr = copyOfRawUsers.filter(
          (user) => user.userId === stat.userId
        );
        const filteredRepliesArr = copyOfRawReplies.filter(
          (reply) => reply.replyToId === stat.id
        );
        stat.user = filteredUsersArr[0];
        stat.replies = filteredRepliesArr;
      });
      commit("setTweets", copyOfRawStatus);
    },
    fetchRandomUsers(context) {
      const arrLength = 3;
      const randomUserIdArr = [];
      for (let i = 0; i < arrLength; i++) {
        randomUserIdArr.push("userId=" + (Math.floor(Math.random() * 20) + 1));
      }
      const userQueryString =
        "users?" + [...new Set(randomUserIdArr)].join("&");
      axios.get(`/${userQueryString}`).then((response) => {
        context.commit("setRandomUsers", response.data);
      });
    },
  },
  getters: {
    getLoggedUser(state) {
      return state.loggedUser.length === 0
        ? JSON.parse(localStorage.getItem("user.info"))
        : state.loggedUser;
    },

    getTrendings(state) {
      return state.trendings;
    },
    getUser(state) {
      return state.selectedUser;
    },
    getRandomUsers(state) {
      return state.randomUsers;
    },
    getSelectedTweet(state) {
      return state.selectedTweet.length === 0
        ? JSON.parse(localStorage.getItem("selected.tweet"))
        : state.selectedTweet;
    },
    getTweets(state) {
      return state.tweets;
    },
    getTweetsLength(state) {
      return state.tweets.length;
    },
  },
  modules: {},
});
