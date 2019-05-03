import React from 'react';
import {Helmet} from 'react-helmet';

class headerTitle extends React.PureComponent{

    render(){
        return(
            <Helmet>
            <title>Search: { this.props.title }</title>
            </Helmet>
        )
    }

}

export default headerTitle;