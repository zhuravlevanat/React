import React, { useState } from 'react';
import { connect } from 'react-redux';
import { saveStudent } from '../../store/actions/students';
import { useHistory } from 'react-router-dom';

const StudentsForm = ({ groups, onSaveData, currentStudent}) => {
    const getGroupName = (id) => {
        const groupName = groups.find(group => group.id === id);
        return groupName.name;
    };
    const [formValues, setFormValues] = useState({
        ...currentStudent,
        groupName: currentStudent.groupId ? getGroupName(currentStudent.groupId): '',
    });
    console.log('data', currentStudent, formValues)
    const history = useHistory();

    console.log(history);

    const onSaveClick = (e) => {
        e.preventDefault();
        const group = groups.find(item => item.name === formValues.groupName);
        onSaveData({
            id: formValues.id,
            studentName: formValues.studentName,
            groupId: group.id,
        });
        setFormValues({});
        history.goBack();
    };
    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        })
        console.log(formValues);
    };
    let options = groups.map((data) =>
        <option
            key={data.id}
            value={data.name}
        >{data.name}
        </option>
    );

    return (
        <div>
            <form onSubmit={onSaveClick}>
                <input
                    type="text"
                    name="studentName"
                    value={formValues.studentName}
                    onChange={handleChange}
                />
                <select name="groupName" value={formValues.groupName} onChange={handleChange}>
                    <option>Select Group</option>
                    {options}
                </select>
                <button onClick={onSaveClick}>Save</button>
            </form>

        </div>
    );
};

function mapStateToProps({groups, students}, {id}) {

   return {
        groups: groups.list,
        students: students.list,
        currentStudent:
            id !== 'new'
                ? students.list.find(item => item.id == id)
                : { id: '', studentName: '', groupId: ''}
    };
};

const mapDispatchToProps = {
    onSaveData: saveStudent,
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsForm);
