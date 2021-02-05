import React from 'react';

 

class SearchBar extends React.Component {
  state = {term: ''}; // this is an object

  onFormSubmit = event => { // Arrow function here allows to bind "this" ES6 
  	event.preventDefault(); // to prevent automic submit
  	this.props.onSubmit(this.state.term) // props.onSubmit refer to SearchBar in App component
  }

  render() {
    return (
      <div className="ui segment">
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label>Image Search</label>
      	    <input 
      	        type="text" 
      	        placeholder="Put something here" 
      	        value={this.state.term} // use this to have controlled component, the component is stored on react world
      	        onChange={e => this.setState({term: e.target.value})}  
      	    /> 
      	  </div>
      	</form>
      </div>	
    )
  }
}

export default SearchBar;