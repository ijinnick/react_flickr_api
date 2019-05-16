import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './Modal.css';


class verticalModal extends React.Component {
    render() {

      return (
        <Modal
          {...this.props}
          size="lg"
          dialogClassName="modal_styling"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <h4 style={{marginLeft: '15px'}}>{this.props.imagetitle}</h4>
            <Col xs={12} md={12} lg={12}>
                <Image src={this.props.source} alt={this.props.owner} className="modal_img_styling" />
            </Col>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }

  export default verticalModal;