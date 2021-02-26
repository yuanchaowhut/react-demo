import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
    // eslint-disable-next-line no-undef
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.arrayOf(PropTypes.node)
        ]).isRequired
    }

    // eslint-disable-next-line no-undef
    state = {
        hasError: false,
        error: null,
        errorInfo: null
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if (this.state.hasError) {
            return <div>{this.props.render(this.state.error, this.state.errorInfo)}</div>
        } else {
            return this.props.children;
        }
    }
}

class Hello extends Component {
    // eslint-disable-next-line no-undef
    state = {
        persons: [
            {id: 0, name: "Tom", age: 20},
            {id: 1, name: "Jerry", age: 22},
            {id: 2, name: "Kate", age: 24}
        ]
    }

    render() {
        return <ul>
            {this.state.persons.map((item, index) => <li key={index}>{item.name}---{item.age}</li>)}
        </ul>;
    }
}


class App extends Component {

    render() {
        return <ErrorBoundary render={(error, errorInfo) => {
            return <p>Error: {error.toString()}</p>
        }
        }>
            <Hello/>
        </ErrorBoundary>
    }
}

export default App;
