import React from 'react';
import PropTypes from 'prop-types'

import ListItem from "./ListItem";

function TodoList(props) {


    return (
        <ul>
            {props.todos.map((item, index,) => {
                    return <ListItem
                        item={item}
                        key={item.id}
                        index={index}
                        onChange={props.onToggle}/>
                }
            )}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array,
    onToggle: PropTypes.func

}

export default TodoList

