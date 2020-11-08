// Class Component implementation
import React from "react";
class TodoItem extends React.Component {
    render() {
        const { id, item, onCheck } = this.props;
        return (
            <li onClick={() => { onCheck(id) }}>
                {item}
            </li>
        )
    }
}
export default TodoItem;