import React, { Component } from "react";

class Header extends Component {
  render() {
    return(
        <div className="Header">
          
            <div>movienite</div>
            <div>
              <input className="SearchBar" type="text"></input>
              <button className="SearchButton"><i class="fa fa-search"></i>Search</button>
            </div>
            <div>Saved Movies</div>
        
        </div>
    )
  }
}

export default Header;