import React from 'react';
import unsplash from '../api/unsplash' // axios is a package which make easier to fetch data (Request API)
import SearchBar from './SearchBar.js';
import ImageList from './ImageList.js';


class App extends React.Component {
	state = { images: []};

	// allow to communicate with children component
	onSearchSubmit = async (term) => { // async key word to use Async Await syntaxe
	  // API REQUEST
	  const response = await unsplash.get('/search/photos', { // put await whit Async Await syntax
		  params: {query: term}, // query params to search photos which take the term submit by the searchbar	  
	  });
	  this.setState({images: response.data.results});
	}

	render () {
	  return (
	    <div className="ui container" style={{marginTop: '10px'}}>
	      <SearchBar onSubmit={this.onSearchSubmit}/> 
	      <ImageList images= {this.state.images} /> 
	    </div>
	  ) // onSubmit will be call is the children component SearchBar
	}
}

export default App;