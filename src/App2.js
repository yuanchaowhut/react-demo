import React, {Component} from 'react';
import PropTypes from 'prop-types';

const withMouse = (WrapperComponent) => {

    return class extends Component {
        // eslint-disable-next-line no-undef
        state = {x: 0, y: 0}

        // eslint-disable-next-line no-undef
        handleMouseMove = (event) => {
            this.setState({x: event.clientX, y: event.clientY})
        }

        render() {
            return <div style={{height: '100%'}} onMouseMove={this.handleMouseMove}>
                <WrapperComponent {...this.props} mouse={this.state}/>;
            </div>
        }
    }
}

const MousePosition = withMouse((props) => {
    const {x, y} = props.mouse;
    return <div style={{height: '100%'}}>
        <h1>The mouse position is ({x}, {y})</h1>
    </div>
})


class Mouse extends Component {
    // eslint-disable-next-line no-undef
    state = {x: 0, y: 0}

    // eslint-disable-next-line no-undef
    handleMouseMove = (event) => {
        this.setState({x: event.clientX, y: event.clientY})
    }

    render() {
        return <div style={{height: '100%'}} onMouseMove={this.handleMouseMove}>
            {this.props.render(this.state)}
        </div>;
    }
}

class App extends Component {

    render() {
        return <Mouse render={({x, y}) => {
            return <div style={{height: '100%'}}>
                <h1>The mouse position is ({x}, {y})</h1>
            </div>
        }
        }/>
    }
}

export default App;
