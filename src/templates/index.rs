
use perseus::prelude::*;
use serde::{Deserialize, Serialize};
use std::rc::Rc;
use sycamore::prelude::*;
use web_sys::Event;


#[derive(Serialize, Deserialize, ReactiveState, Clone)]
#[rx(alias = "TodoListStateRx")]
struct TodoListState {
    todos: Vec<String>,
    new_todo: String,
}

fn header<G: Html>(cx: Scope) -> View<G> {
    view! { cx,
        h1 { "A simple Reactive Todo App" }
    }
}

#[auto_scope]
fn todo_form<G: Html>(cx: Scope, state: &TodoListStateRx) -> View<G> {
    let new_todo_form = new_todo(cx.clone(), state);

    view! { cx,
        div {
            (new_todo_form)
        }
    }
}

#[auto_scope]
fn todo_list<G: Html>(cx: Scope, state: &TodoListStateRx) -> View<G> {
    view! { cx,
        div(id = "todo-items") {
            ul {
                (View::new_fragment(
                    state.todos.get()
                        .iter()
                        .rev()
                        .enumerate()
                        .map(|(index, item)| {
                            let item = item.clone();
                            view! { cx,
                                li(class = "todo-item") {
                                    (item)
                                    button( class = "remove-button", on:click = move |_| {
                                        let mut todos = state.todos.get().as_ref().clone();
                                        todos.retain(|todo| *todo != item);
                                        state.todos.set(todos.to_vec());
                                    }) { "x" }
                                }
                            }
                        })
                        .collect(),
                ))
            }
        }
    }
}

#[auto_scope]
fn todo_list_view<G: Html>(cx: Scope, state: &TodoListStateRx) -> View<G> {
    view! { cx,
        div(id = "todo-container") {
            (header(cx.clone()))
            (todo_form(cx.clone(), state))
            (todo_list(cx, state))
        }
    }
}

#[auto_scope]
fn new_todo<G: Html>(cx: Scope, state: &TodoListStateRx) -> View<G> {
    view! {cx,
        form(on:submit = move |e: Event| {
            e.prevent_default();
            let new_todo: Rc<String> = state.new_todo.get().clone();

            if !new_todo.is_empty() {
                let new_todo_str: String = (*new_todo).clone();
                let mut todos = state.todos.get().as_ref().clone();

                todos.push(new_todo_str);
                state.todos.set(todos.to_vec());
                state.new_todo.set(String::new());
            }
        }) {
            input(id = "todo-input", type = "text", bind:value = state.new_todo)
            button(id = "todo-button") { "Add Item" }
        }
    }
}

#[engine_only_fn]
async fn get_build_state(_info: StateGeneratorInfo<()>) -> TodoListState {
    TodoListState {
        todos: vec!["Grocery shopping".to_string(), "Exercise for 30 minutes every morning".to_string()],
        new_todo: "".to_string(),
    }
}

#[engine_only_fn]
fn head(cx: Scope) -> View<SsrNode> {
    view! { cx,
        title { "Test App" }
        link(rel="stylesheet", href=".perseus/static/styles.css") {}
    }
}
pub fn get_template<G: Html>() -> Template<G> {
    Template::build("index")
        .build_state_fn(get_build_state)
        .view_with_state(todo_list_view)
        .head(head)
        .build()
}
