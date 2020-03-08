import React from "react";
import { connect } from "react-redux";
import { useRouteMatch, Link } from 'react-router-dom';
import {deleteGroup} from "../../store/actions/groups";

const GroupsList = ({ groups, onDelete }) => {
    const { url } = useRouteMatch();
    return (
        <div>
            <ul style={listStyles}>
                {groups.map(item => (
                    <li key={item.id}>
                        <Link style={listItemStyles} to={`${url}/${item.id}`}>{item.name}</Link>
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

function mapStateToProps({groups}) {
    return {
        groups: groups.list,
    };
}

const mapDispatchToProps = {
    onDelete: deleteGroup,
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
