import React from "react";
import { connect } from "react-redux";
import Todo from "../components/Todo";
import { add } from "../store";
import { useState } from "react";

interface HomeProps {
    todos: any;
    addTodo: any;
}


function Home({ todos, addTodo } : HomeProps) {
    const [text, setText] = useState("");
    
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addTodo(text);
        setText("");
    }

    return (
        <>
            <h1>Todo App</h1>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Add a todo" value={text} onChange={onChange}/>
                <input type="submit" value="Add" />
            </form>
            <ul>
                {todos.map((todo: any) => (<Todo text={todo.text} id={todo.id} key={todo.id}/>))}                
            </ul>
        </>
    );
}

const mapStateToProps = (state: any) => {
    return {
        todos: state
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        addTodo: (text: string) => dispatch(add({ text, id: Date.now() })),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);