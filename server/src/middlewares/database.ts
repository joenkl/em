const mongoose = require('mongoose');
import { CONFIG } from '../config';

const db = CONFIG.DATABASE.MONGO_ATLAS;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(
  `mongodb+srv://${db.USER}:${db.PASS}@cluster0-dhzmp.mongodb.net/${
    db.DB_NAME
  }?retryWrites=true`,
  {
    useNewUrlParser: true,
  },
);
