import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component using JSX as a shorthand to emulate html
// This will be interpreted by Babel and cross-compiled to verbose and ugly javascript that creates the DOM nodes
const App = function() {
    return <div>Hello!</div>;
}

// Take the "App" component's generated output and send it to ReactDOM's rendering engine
ReactDOM.render(<App />, document.querySelector('.container'));