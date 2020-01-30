import React from "react";
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
};

export default function TodoList (props) {
    return (
        <ul style={styles.ul}>
            { props.todos.map((todo, key) => (
                <TodoItem todo={todo} key={key} index={key}/>
            )) }
        </ul>
    )
}