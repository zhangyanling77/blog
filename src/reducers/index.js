import {combineReducers} from 'redux';
import publishArticle from './publishArticle.js';

const blog = combineReducers({publishArticle})
export default blog;
