import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


class verticalModal extends React.Component {
    render() {

        const styling = {
            width: '100%'
        }

      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {this.props.imagetitle}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Owner: {this.props.owner}</h4>
            <Col xs={12} md={12} lg={12}>
                <Image src={this.props.source} alt={this.props.owner} style={styling} />
            </Col>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }

  export default verticalModal;