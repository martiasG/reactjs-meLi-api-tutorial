import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <div>
        <div>
          {this.props.children}

          <div>PRICE: {this.props.product_detail.price}</div>
          <div>PRODUCTO: {this.props.product_detail.title}</div>
          <div>DISPONIBILIDAD: {this.props.product_detail.available_quantity}</div>
          <div className="footer">
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;