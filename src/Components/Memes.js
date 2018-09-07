import React, { Component } from 'react';
import {setMemes} from '../redux/reducer';
import axios from 'axios';
import { connect } from 'react-redux';

class Memes extends Component {
    componentDidMount() {
        axios.get('/api/memes').then(res => {
            this.props.setMemes(res.data)
        }).catch(err => console.log('err', err));
    }
    render() {
        const {memesList} = this.props;
        const mappedList = memesList.map(meme => {
            return <img key={meme.url} src={meme.url} />;
        });

        return (
            <div>
                <h1>Memes</h1>
                {mappedList}
            </div>
        )
    }
}
const mapStateToProps = state => {
    const { memesList } = state;
    // return {memesList};
    return {
        memesList
    }
}

const mapDispatchToProps = {
    setMemes
}

export default connect(mapStateToProps, mapDispatchToProps) (Memes);