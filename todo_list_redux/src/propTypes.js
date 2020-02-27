import PropTypes from 'prop-types';

const todo = PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    isDone: PropTypes.bool,
});

const list = PropTypes.arrayOf(todo);

export default {
    ...PropTypes,
    todo,
    list 
}