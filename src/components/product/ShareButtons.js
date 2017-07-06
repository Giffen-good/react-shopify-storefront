import React, {Component} from 'react';

export default class ShareButtons extends Component {

  render(){
    const product = this.props.product;
    const url = location.protocol + '//' + location.host + product.url;
    return (
      <div className="share-buttons">
        <a target="_blank" href={`//twitter.com/share?url=${url}`} className="share-button" rel="noopener noreferrer">
        </a>
        <a target="_blank" href={`//www.facebook.com/sharer.php?u=${url}`} className="share-button facebook" rel="noopener noreferrer">
        </a>
        <a target="_blank" href={`//pinterest.com/pin/create/button/?url=${url}&media=${product.featured_image}&description=${product.title}`} className="share-button pinterest" rel="noopener noreferrer">
        </a>
        <a target="_blank" href={`http://www.fancy.com/fancyit?ItemURL=${url}&Title=${product.title}&Category=Other&ImageURL=${product.featured_image}`} className="share-button fancy" rel="noopener noreferrer">
        </a>
      </div>
    )
  }
}