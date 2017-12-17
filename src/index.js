import React from "react";
import ReactDOM from "react-dom";

import MainPage from './form/js/mainPage';

import './global.scss';

class App extends React.Component {
    render() {
        return <div>
            <MainPage />
        </div>;
    }
}

const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
