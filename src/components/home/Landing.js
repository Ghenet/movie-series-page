import React, { Component } from 'react';
import {connect} from 'react-redux';
import SearchForm from './SearchForm';
import Spinner from '../layout/Spinner';
import MoviesContainer from './MoviesContainer';
export class Landing extends Component {
    render() {
//the following line esx structuring is saying we need to pull put loading out of props        
        const {loading} = this.props;
        return (
            <div className='container'>
                <SearchForm />
                {loading ? <Spinner /> : <MoviesContainer />}
            </div>
        )
    }
}

const mapStateToProps = state =>({
    loading: state.movies.loading
})

export default connect(mapStateToProps)(Landing);
