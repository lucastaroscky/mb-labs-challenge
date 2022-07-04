import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import databaseInitialize from './configs/database/data-source';
import startRoutes from './src/routers';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import passport from 'passport';

const app: express.Application = express();

const PORT = process.env.NODE_LOCAL_PORT;
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET || ''
};

const strategy = new JwtStrategy(opts, function (payload, done) {
  console.log(payload);
  return done(null, {});
});

passport.use(strategy);

databaseInitialize();
startRoutes(app);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
