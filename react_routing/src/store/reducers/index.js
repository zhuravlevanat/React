import { combineReducers } from 'redux';
import students from './students';
import groups from "./groups";

export default combineReducers({
    groups: groups,
    students: students
});