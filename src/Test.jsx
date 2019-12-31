import React, { useState } from 'react';
import { connect } from 'react-redux';
import store from './REDUX/Store';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    componentDidMount() {
        store.dispatch({ type: 'GET_MESSAGE' });
    }

    setString = (e) => {
        this.setState({ title: e.target.value });
    }

    addString = () => {
        store.dispatch({ type: 'ADD_STRING_ASYNC', title: this.state.title })
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.setString} />
                <input type="submit" onClick={this.addString} />
                <span style={{ marginLeft: '20px' }}>{this.props.message}</span>
                <div>
                    <ul>
                        {this.props.strings.length ? this.props.strings.map((x, index) => {
                            return (
                                <li key={index}>{x.title}</li>
                            );
                        }) : <h4>No info... yet</h4>}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        strings: store.firstReducer.strings,
        message: store.secondReducer.message
    }
}

export default connect(mapStateToProps)(Test);
