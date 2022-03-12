// create a new express app
const app = express();

// create a new mongoose connection
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/file-share");

// create a new file model
const File = mongoose.model("File", {
  name: String,
  size: Number,
  type: String,
  owner: String,
  sharedWith: [String],
});

// create a new user model
const User = mongoose.model("User", {
  username: String,
  password: String,
});

// create a new session model
const Session = mongoose.model("Session", {
  username: String,
  sessionId: String,
});

// create a new session store
const sessionStore = new MongoStore({
  mongooseConnection: mongoose.connection,
});

// create a new session middleware
const sessionMiddleware = session({
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
});
