import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
class SearchForm extends Component {

  constructor(){
    super();
    this.state = {
      submitButtonClass : ''
    }
  }

  handleClickOutside = evt => {
    this.setState({
      submitButtonClass: ''
    })
  };

  clickHandle = () => {
    if ( this.state.submitButtonClass === '' ){
      this.setState({
        submitButtonClass: 'search--focus'
      });
    } else {
      if ( this.searchTo.value !== '' ) {
        this.props.history.push('/find?q=' + this.searchTo.value);
      }
    }
  };

  render(){
    return (
      <div className="site-header__search small--hide">
        <div className={`search-header ${this.state.submitButtonClass}`} role="search">
          <input className="search-header__input"
                 name="q"
                 placeholder="Search"
                 aria-label="Search"
                 ref={input => this.searchTo = input}
            />
          <button className="search-header__submit" onClick={this.clickHandle}>
            <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-search" viewBox="0 0 37 40"><path d="M35.6 36l-9.8-9.8c4.1-5.4 3.6-13.2-1.3-18.1-5.4-5.4-14.2-5.4-19.7 0-5.4 5.4-5.4 14.2 0 19.7 2.6 2.6 6.1 4.1 9.8 4.1 3 0 5.9-1 8.3-2.8l9.8 9.8c.4.4.9.6 1.4.6s1-.2 1.4-.6c.9-.9.9-2.1.1-2.9zm-20.9-8.2c-2.6 0-5.1-1-7-2.9-3.9-3.9-3.9-10.1 0-14C9.6 9 12.2 8 14.7 8s5.1 1 7 2.9c3.9 3.9 3.9 10.1 0 14-1.9 1.9-4.4 2.9-7 2.9z"></path>
            </svg>
          </button>
        </div>
      </div>
    )
  }
}
export default onClickOutside(SearchForm);