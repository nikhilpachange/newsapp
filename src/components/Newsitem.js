import React, { Component } from 'react'

export class Newsitem extends Component {
   
  render() {
    let {title,description, imageUrl,newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
            <img src={"https://t3.ftcdn.net/jpg/02/23/38/64/240_F_223386472_g3ZlTnCCTRD9jtcvXML9F3HUNu91UAa0.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}....</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more </a>
            </div>
            </div> 
      </div>
    )
  }
}

export default Newsitem
