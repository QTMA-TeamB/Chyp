import React, { Component } from 'react';
import PopUp from '../PopUp/popUp.js'

class CreateCard extends Component {

  handleClick(){
    <PopUp />
  }

  render() {

    const processed_name = this.props.event.name;
    const processed_street = !this.props.event.place || !this.props.event.place.location || !this.props.event.place.location.street ? 'Address Not Stated' : this.props.event.place.location.street;
    const processed_location = !this.props.event.place || !this.props.event.place.name ? 'Location Name Not Stated' : this.props.event.place.name;
    const processed_cover = !this.props.event.cover ? "https://x.kinja-static.com/assets/images/logos/placeholders/default.png" : this.props.event.cover.source;


    return (
      <div class="block-card">
        <img class = "cover-photo" key = {this.props.event.id + 'cover'} src = {processed_cover} height = '210' width = '400' alt = "Cover Photo"/>
          <div class="title-content">
            <h3><a href="#"  key = {this.props.event.id}>{processed_name}</a></h3>

              <div class="intro">
                <a key = {this.props.event.id}>{processed_location}</a><br></br>
                <a key = {this.props.event.id}>{processed_street}</a><br></br>
                <a key = {this.props.event.id}>{this.props.event.end_time}</a>
              </div>
          </div>
          <div class="card-info">
            <PopUp event={this.props.event} />
          </div>
      </div>
    );
  }

}

export default CreateCard;
