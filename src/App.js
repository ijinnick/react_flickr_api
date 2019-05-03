import React, {PureComponent} from 'react';
import Masonry from 'react-masonry-component';

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
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b774407c29ba83c911aef10b448862dd&tags=travel%2Coutdoor%2Cbeautiful%2Cbeauty&text='+this.state.searchItem+'&sort=interestingness-desc&extras=&per_page=30&page=&format=json&nojsoncallback=1')
    .then(response => response.json())
    .then(function(data){

      let picArray = data.photos.photo.map((imgdata,index) => {
          let srcPath = 'https://farm'+imgdata.farm+'.staticflickr.com/'+imgdata.server+'/'+imgdata.id+'_'+imgdata.secret+'.jpg';
          return <Col xs={6} md={6} lg={3} key={index}><Image src={srcPath} alt={imgdata.user} onClick={() => this.modalClick(srcPath,imgdata.owner,imgdata.title)} key={index} fluid rounded/></Col>
      });

      this.setState({
        imageData: picArray,
        isActive: false
      });
    }.bind(this));
  }

  searchQueryBTN = () => {
    let targetValue = document.getElementById('searchInput').value;
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b774407c29ba83c911aef10b448862dd&tags=travel%2Coutdoor%2Cbeautiful%2Cbeauty&text='+targetValue+'&sort=interestingness-desc&extras=&per_page=30&page=&format=json&nojsoncallback=1')
    .then(response => response.json())
    .then(function(data){

      let picArray = data.photos.photo.map((imgdata,index) => {
          let srcPath = 'https://farm'+imgdata.farm+'.staticflickr.com/'+imgdata.server+'/'+imgdata.id+'_'+imgdata.secret+'.jpg';
          return <Col xs={6} md={6} lg={3} key={index}><Image src={srcPath} alt={imgdata.user} onClick={() => this.modalClick(srcPath,imgdata.owner,imgdata.title)} key={index} fluid rounded/></Col>
      });

      this.setState({
        imageData: picArray,
        searchItem: targetValue,
        isActive: true
      });
    }.bind(this));
  }

  render(){

    return (
        <div className="App">
        <Header title={this.state.searchItem}/>
          <Navbar search={this.searchQueryBTN} searchResult={this.state.searchItem}/>
          <header className="App-header">
          </header>
          <Masonry className={'masonry-styling'}>
            {this.state.imageData}
          </Masonry>
          
          <Modal show={this.state.modalShow} onHide={() => this.setState({modalShow: false})} source={this.state.imgSource} owner={this.state.imgOwner} imagetitle={this.state.imgTitle}  />

          <Footer /> 
        </div>
    );
  }
}

export default App;
