import React, {Component} from 'react';

const mContext = React.createContext();

class GrandChild extends Component {
    render() {
        return <mContext.Consumer>
            {({name}) => (<div>
                <h1>I am grandchild component!</h1>
                <h1>His name is {name}</h1>
            </div>)}
        </mContext.Consumer>;
    }
}

class Child extends Component {
    render() {
        return <div>
            <h1>I am child component!</h1>
            <GrandChild/>
        </div>;
    }
}


class Demo extends Component {
    // eslint-disable-next-line no-undef
    state = {
        name: "Tom",
        number: 0
    }

    // eslint-disable-next-line no-undef
    handleChange = () => {
        this.setState(preState => {
            const newNumber = preState.number + 1;
            return {name: preState.name + newNumber, number: newNumber}
        })
    }

    render() {
        return <mContext.Provider value={this.state}>
            <button onClick={this.handleChange}>change</button>
            <Child/>
        </mContext.Provider>
    }
}

export default Demo;
