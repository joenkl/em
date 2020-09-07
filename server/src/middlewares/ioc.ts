import Container from '../controller/Container';
import { CThirdPartyAuthFactory } from '../controller/ThirdPartyAuth/ThirdPartyAuthFactory';
import { CUserMongo } from '../models/CUserMongo';

const container = new Container();
container.service('ThirdPartyAuthFactory', c => new CThirdPartyAuthFactory(c.User));
container.service('User', c => new CUserMongo());

export default container;