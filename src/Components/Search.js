import React from 'react'
import goods  from '../js/getGoods';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      searchResult: [],
    }

  }

  searchChange = (e) => {
    this.setState({
      searchValue: e.target.value,
    })
  }
  search = (e) => {
    const { searchValue } = this.state;
    this.setState({
      searchResult: goods.filter(item => item.name.indexOf(searchValue) !== -1),
    })
  }

  render() {
    const { searchValue, searchResult } = this.state;

    return (
      <div className="goods-search">
        <div className="header">
          <input type="text" value={searchValue} onInput={this.searchChange}/>
          <button onClick={this.search}>search</button>
        </div>
        <ul className="content">
          {
            searchResult.map(item => (
              <li>
                <span className="goods name">{ item.name }</span>
                <span className="goods price">{ item.price }</span>
              </li>

            ))
          }
        </ul>
      </div>
    )
  }
}

export default Search;