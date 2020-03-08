import React from "react";
import { connect } from "react-redux";
import { useRouteMatch, Link } from 'react-router-dom';
import {deleteStudent} from "../../store/actions/students";

const GroupsList = ({ students, groups, onDelete }) => {
    const { url } = useRouteMatch();
    const getGroupName = (id) => {
        const groupName = groups.find(group => group.id === id);
        return groupName.name;
    };
    return (
        <div>
            <ul style={listStyles}>
                {students.map(item => (
                    <li  key={item.id}>
                        <Link style={listItemStyles} to={`${url}/${item.id}`}>{item.studentName}</Link>
                        <Link style={listItemStyles} to ={'/groups'}>{item.groupId && getGroupName(item.groupId)}</Link>
                        <button style={buttonStyles} onClick={(e) => {
                            e.stopPropagation();
                            onDelete(item.id)
                        }}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

function mapStateToProps({students, groups}) {
    return {
        students: students.list,
        groups: groups.list,
    };
}

const mapDispatchToProps = {
    onDelete: deleteStudent,
};

const listStyles = {
    listStyle: 'none',
    padding: 0,
    margin: '20px 0',
};

const listItemStyles = {
    textDecoration: 'none',
    margin: '5px',
};

const buttonStyles = {
    marginLeft: 10,
    float: 'right',
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupsList);
