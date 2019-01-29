import React from 'react'
import Modal from './productDetailModal.js';
import $ from 'jquery'

class ProductRow extends React.Component{

    constructor(props) {
      super(props);

      this.state = { 
                    isOpen: false,
                    product_detail : null
                  };
    }

    viewProduct(){
        console.log("view Product")
        console.log(this.props.product.title)

        const url_endpoint = "https://api.mercadolibre.com/items/"+this.props.product.id

        $.ajax({
            url: url_endpoint,
            success: (productDetail) => {
              console.log("SUSSCESS DATA")
              console.log("Detail: "+productDetail)
              console.log("PRICE: "+productDetail.price)
              this.toggleModal(productDetail)
            },
            error: (xhr, status, err) => {
              console.log("Failed to get the data")
            }
          })
    }

    toggleModal = (productDetail) => {
        this.setState({
          isOpen: !this.state.isOpen,
          product_detail : productDetail
        });
    }

    render(){
        return ( <div>
                <table key = {this.props.product.id}>
                    <tbody>
                      <tr>
                        <td>
                          <img alt="thumbnail" width="100" src={this.props.product.thumbnail}/>
                        </td>
                        <td>
                          {this.props.product.title}
                          <input type="button" onClick={this.viewProduct.bind(this)} value="View"/>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <Modal
                    show={this.state.isOpen}
                    onClose={this.toggleModal}
                    product_detail = {this.state.product_detail}>
                  </Modal>
          </div>
          );
    }
}

export default ProductRow