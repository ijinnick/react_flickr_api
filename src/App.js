import React, {PureComponent} from 'react';
import { BrowserRouter} from 'react-router-dom';

import Routing from './components/Routing';

import './App.css';

class App extends PureComponent {
  
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
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    );
  }
}

export default App;
