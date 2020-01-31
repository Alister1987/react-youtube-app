import React, {useState} from "react";
import PropTypes from 'prop-types';

const styles = {
    form: {
        marginBottom: 10
    }
};

function AddTodo({onCreate}) {

    function submitHandler(event) {
        event.preventDefault();

        if (value.trim()) {
            onCreate(value);
            setValue('');
        }
    }
    const [value, setValue] = useState('');
    return (
        <form style={styles.form} onSubmit={submitHandler}>
            <input type="text" value={value} onChange={event => setValue(event.target.value)}/>
            <button type="submit">Add todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo