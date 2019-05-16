import React, {PureComponent} from 'react';
import axios from 'axios';
import api from '../../api/Api';

import Modal from '../../components/Modal';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

import './Main.css';

class Main extends PureComponent {
  state = {
    imageData: [],
    imgSource: '',
    imgOwner: '',
    imgTitle: '',
    dataCounter: 0,
    modalShow: false,
    isActive: true,
    hasData: false
  }
  
  modalClick = (imgSource,imgOwner,imgTitle) => {
    this.setState({ 
      imgSource: imgSource,
      imgOwner: imgOwner,
      imgTitle: imgTitle,
      modalShow: true 
    });
  }

  componentDidUpdate(){
    this.setState({isActive: false});
  }

  componentDidMount(){
    axios.get(api+this.props.searchItem)
    .then(response => {
      this.setState({
        imageData: response.data.photos
      });
    });
  }

  render(){

    const photos = (
          Array.isArray(this.state.imageData.photo) ? 
          this.state.imageData.photo.map((data) => {
            let imageSrc = 'https://farm'+data.farm+'.staticflickr.com/'+data.server+'/'+data.id+'_'+data.secret+'.jpg';
            return (
              <Card key={data.id} className="card_styling">
                <Card.Img variant="top" src={imageSrc} alt={data.user} onClick={() => this.modalClick(imageSrc,data.owner,data.title)} key={data.id} />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                </Card.Body>
              </Card>
            )
          })
          : null
    );

    return (
        <div className="Main">
          <header className="Main-header" />
          <CardColumns>
            {photos}
          </CardColumns>
          <Modal show={this.state.modalShow} onHide={() => this.setState({modalShow: false})} 
          source={this.state.imgSource} owner={this.state.imgOwner} imagetitle={this.state.imgTitle}  />
        </div>
    );
  }
}

export default Main;
