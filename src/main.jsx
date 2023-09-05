import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./redux/state.js";



const root = ReactDOM.createRoot(document.getElementById("root"));

function rerender(state) {
  root.render(
    <React.StrictMode>
      <App state={state} doneAction={store.doneAction} updateStateText={store.updateStateText} addTodo={store.addTodo} updateCompliteList={store.updateCompliteList.bind(store)} />
    </React.StrictMode>
  );
}
rerender(store.getState());

store.subscribe(rerender)


export default rerender
