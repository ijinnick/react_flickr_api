import React, {PureComponent} from 'react';
import Masonry from 'react-masonry-component';
import axios from 'axios';

import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


import './App.css';

// const masonryOptions = {
//   transitionDuration: 0
// };

// const imagesLoadedOptions = { background: '.my-bg-image-el' }

class App extends PureComponent {
  state = {
    searchItem: 'Singapore',
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
    axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b774407c29ba83c911aef10b448862dd&tags=travel%2Coutdoor%2Cbeautiful%2Cbeauty&text='+this.state.searchItem+'&sort=interestingness-desc&extras=&per_page=30&page=&format=json&nojsoncallback=1')
    .then(response => {
      this.setState({
        imageData: response.data.photos
      });
    });
  }

  searchQueryBTN = () => {
    let targetValue = document.getElementById('searchInput').value;

    axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b774407c29ba83c911aef10b448862dd&tags=travel%2Coutdoor%2Cbeautiful%2Cbeauty&text='+targetValue+'&sort=interestingness-desc&extras=&per_page=30&page=&format=json&nojsoncallback=1')
    .then(response => {
      this.setState({
        imageData: response.data.photos,
        searchItem: targetValue,
        isActive: true
      });
    });
  }

  render(){
    const photos = (
          Array.isArray(this.state.imageData.photo) ? 
          this.state.imageData.photo.map((data) => {
            let imageSrc = 'https://farm'+data.farm+'.staticflickr.com/'+data.server+'/'+data.id+'_'+data.secret+'.jpg';
            return <Col xs={6} md={6} lg={3} key={data.id}><Image src={imageSrc} alt={data.user} onClick={() => this.modalClick(imageSrc,data.owner,data.title)} key={data.id} fluid rounded/></Col>
          })
          : null
    );

    return (
        <div className="App">
        <Header title={this.state.searchItem}/>
          <Navbar search={this.searchQueryBTN} searchResult={this.state.searchItem}/>
          <Masonry className={'masonry-styling'}>
            {photos}
          </Masonry>
          <Modal show={this.state.modalShow} onHide={() => this.setState({modalShow: false})} 
          source={this.state.imgSource} owner={this.state.imgOwner} imagetitle={this.state.imgTitle}  />
          <Footer /> 
        </div>
    );
  }
}

export default App;
