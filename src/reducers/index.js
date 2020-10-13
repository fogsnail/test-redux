import { combineReducers } from 'redux';
import changeStyle from './changeStyle'
const appReducers = combineReducers({
    changeStyle,
});

export default appReducers;