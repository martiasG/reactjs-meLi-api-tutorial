import React, { Component } from 'react';
import './App.css';
import ProductRow from './productRow.js';
import $ from 'jquery';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}

    console.log("CONSOLE LOG INIT")

    this.perforSearch("nintedo switch")
  }

  perforSearch(search_term) {
    console.log('INIT SEARCH API ML')
    const url_endpoint = "https://api.mercadolibre.com/sites/MLA/search?q="+search_term+"&limit=10"
    $.ajax({
      url: url_endpoint,
      success: (searchResults) => {
        console.log("SUSSCESS DATA")
        console.log(searchResults)
        const results = searchResults.results
        console.log(results[0])

        var productsRows = []
        results.forEach((product) => {
          console.log(product.title)
          console.log(product.id)
          const productRow = <ProductRow product = {product}/>
          productsRows.push(productRow)
        })

        this.setState({rows: productsRows})
      },
      error: (xhr, status, err) => {
        console.log("Failed to get the data")
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const searchTerm = event.target.value
    this.perforSearch(searchTerm)
  }

  render() {
    return (
      <div className="App">

        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50" src="flourish-heart.svg"/>
              </td>
              <td width="8">
                <h1>E-comerce ML API</h1>
              </td>
            </tr>
          </tbody>
        </table>

      <input stype={{
          fontSize: 16,
          display: 'block',
          width: "100%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16,
          paddingRight: 16
      }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term"/>

      {this.state.rows}

      </div>
    );
  }
}

export default App;
