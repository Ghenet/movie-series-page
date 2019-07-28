import React, { Component } from 'react'
import { searchMovie } from '../../actions/searchActions';
import { connect } from 'react-redux';

class SearchForm extends Component {

onChange = e => {
    this.props.searchMovie(e.target.value);
}

    render() {
        return (
            <div className='jambotron jumbotron-fluid mt-5 text-center'>
                <div className='container'>
                    <h1 className='display-6 mb-3'>
                        <i className='fa fa-search' /> Search for a movie, TV series ..
                    </h1>
                    <form id='searchForm'>
                        <input 
                        type='text'
                        className='form-control'
                        name='searchText'
                        placeholder='Search Movies, TV Series ...' 
                        onChange={this.onChange}
                        />
                        <button type='submit' className='btn btn-primary btn-bg mt-3'>Search</button>
                    </form>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    text: state.movies.text
})

export default connect(mapStateToProps,{searchMovie})(SearchForm);