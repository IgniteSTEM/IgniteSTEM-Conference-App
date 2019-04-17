import { combineReducers } from 'redux';
import schedule from './schedule';
import user from './user';

export default combineReducers({
	schedule,
	user
});