import PropTypes from 'prop-types';

const contactsListItem = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  age: PropTypes.number,
  phone: PropTypes.string,
});

const contactsList = PropTypes.arrayOf(contactsListItem);

const formData = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
});

export default {
  ...PropTypes,
  contactsListItem,
  contactsList,
  formData,
}