import { remove } from "../store";
import { connect } from "react-redux";
import React from "react";

interface TodoProps {
    text: string;
    id: number;
    removeTodo: any;
}

function Todo({ text, id, removeTodo } : TodoProps) {
    const onClick = () => {
        removeTodo(id);
    }
    
    return (
        <li style={styles.li}>
            <p>{text}</p>
            <button onClick={onClick}>X</button>
        </li>
    );
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        removeTodo: (id: number) => dispatch(remove(id))
    };
};

const styles: { [key: string]: React.CSSProperties }= {
    li: {
        display: "flex",
        flexDirection: "row",
        margin: 0,
        padding: 0,
    },
};

export default connect(null, mapDispatchToProps)(Todo);