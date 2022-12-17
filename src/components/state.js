import React from 'react';


class State extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let count= 0;
        const increment = count + 1;
        return (
            <div>
                <h1>Product: {count}</h1>
                <button onClick={increment}>+ </button>
            </div>
        );
    }
}


export default State;