import React, { useState } from 'react';
import { connect } from 'react-redux';
import { saveGroup } from '../../store/actions/groups';
import { useHistory } from 'react-router-dom';

function GroupForm({ item, onSave }) {
    console.log(item);
  const [name, setName] = useState(item.name);

  const history = useHistory();

  console.log(history);

  function onSaveClick() {
    onSave({
      id: item.id,
      name
    });

    history.goBack();
  }

  return (
      <div>
        <input
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
        />
        <button onClick={onSaveClick}>Save</button>
      </div>
  );
}

function mapStateToProps({ groups }, { id }) {
  return {
    item:
        id !== 'new'
            ? groups.list.find(item => item.id == id)
            : { id: '', name: '' }
  };
}

const mapDispatchToprops = {
  onSave: saveGroup,
};

export default connect(mapStateToProps, mapDispatchToprops)(GroupForm);
