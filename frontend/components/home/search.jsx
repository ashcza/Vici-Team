import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchString: "",
      location: "San Francisco, CA",
      distance: "any distance"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateDistance = this.updateDistance.bind(this);
    this.update = this.update.bind(this);
  }

  update(property, e) {
    if (property === "searchString" && e.target.value === "") {
      this.props.requestGroups("", this.state.location, "any distance");
    }
    this.setState({[property]: e.target.value});

  }

  updateDistance(newDistance) {
    this.setState({distance: newDistance});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.requestGroups(this.state.searchString, this.state.location, this.state.distance);
  }

 render() {
   let miles = "miles";
   if (this.state.distance === 'any distance') {
     miles = "";
   }
   return(
      <div className="search-bar">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <label className="search-field">
          <input placeholder="All Groups" type="text" value={this.state.searchString}
            onChange={this.update.bind(null, "searchString")} className="search-field"/>
          </label>

          <div className="dropdown">
            <button className="dropbtn1">{this.state.distance} {miles}</button>
            <div className="dropdown-content">
              <a onClick={this.updateDistance.bind(null, 2)} >2 miles</a>
              <a onClick={this.updateDistance.bind(null, 5)} >5 miles</a>
              <a onClick={this.updateDistance.bind(null, 10)} >10 miles</a>
              <a onClick={this.updateDistance.bind(null, 100)} >100 miles</a>
              <a onClick={this.updateDistance.bind(null, "any distance")} >any distance</a>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn2">{this.state.location}</button>
            <div className="dropdown-content">
              <input type="text" value={this.state.location}
                onChange={this.update.bind(null, "location")} className="search-field"/>
            </div>
          </div>

          <div className="button-holder">
            <input type="submit" value="Search" className="search-button"/>
          </div>

        </form>
      </div>
    );
 }
}

export default Search;
