import React, { Component } from 'react';
import PopUp from '../PopUp/popUp.js'
import './ViewCard.css';


class ViewCard extends Component {

  handleClick(url2){
    window.open(url2)
  }

  render() {

    const processed_name = this.props.event.name;
    const processed_street = !this.props.event.place || !this.props.event.place.location || !this.props.event.place.location.street ? 'Address Not Stated' : this.props.event.place.location.street;
    const processed_location = !this.props.event.place || !this.props.event.place.name ? 'Location Name Not Stated' : this.props.event.place.name;
    const processed_cover = !this.props.event.cover ? "https://x.kinja-static.com/assets/images/logos/placeholders/default.png" : this.props.event.cover.source;
    const processed_description = !this.props.event.description ? "No Description Has Been Added" : this.props.event.description;
    const processed_owner_name = !this.props.event.owner || !this.props.event.owner.name ? "Unknown" : this.props.event.owner.name;
    const myURL = "http://localhost:3000/event?id="+ this.props.event.id;
    const processed_date = new Date(this.props.event.start_time).toLocaleString('en-US')
    return (
      <div class="block-card">
        <img class = "cover-photo" key = {this.props.event.id + 'cover'} src = {processed_cover} height = '210' width = '400' alt = "Cover Photo"/>
          <div class="title-content">
            <h3><a href={myURL}  key = {this.props.event.id}>{processed_name}</a></h3>

              <div class="intro">
                <a key = {this.props.event.id}>{processed_location}</a><br></br>
                <a key = {this.props.event.id}>{processed_street}</a><br></br>
                <a key = {this.props.event.id}>{processed_date}</a>
              </div>
              <div class="card-info">
                  <button id = "Create" className="initButton" onClick={() => this.handleClick(myURL)}>View On Chyp!</button>
              </div>
          </div>

      </div>
    );
  }

}

export default ViewCard;
