const bodyParser = require('body-parser');
const cors = require('cors');

var app = require('express')();
var httpS = require('http').Server(app);
let server = httpS.listen(3000, function(){console.log("NODE ready to run script given on port 3000.");});
var io = require('socket.io')(server, { cors: { origin: "*" } });
app.set('socketio', io);


const Sequelize = require('sequelize');
const sequelize = new Sequelize('superette_project', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.produits = require('./models/produit.js')(sequelize, Sequelize);
db.clients = require('./models/produit.js')(sequelize, Sequelize);

// Middleware
app.use(bodyParser.json());
app.use(cors());

const passport = require("passport");
const passportJWT = require("passport-jwt");
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'supermarket',
};

const strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
  const email = jwt_payload.email;
  const password = jwt_payload.password;
  if (email === 'supermarket@supermarket.com' && password === 'supermarket') {
    return next(null, { email });
  } else {
    return next(null, false);
  }
});

passport.use(strategy);

require('./routes.js')(app, db, passport);