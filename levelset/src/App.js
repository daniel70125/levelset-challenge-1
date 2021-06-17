import React, { Component } from 'react';
import './App.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cats: [''],
        searchTerm: '',
        selecetdCat: [
          {
            "Name":"",
          "ID":0,
          "thumbnailUrl":"",
          "Birthdate":"",
          "ownerName":"",
          "viewCount":0
          }
        ]
      }
  }
  componentDidMount(){
    this.setState({cats: JSON.parse(localStorage.getItem('cats'))})
    this.setState({
      selecetdCat: JSON.parse(localStorage.getItem('cats'))[0]
    })
  }
  chooseCat(e){
    const selectedElm = JSON.parse(localStorage.getItem('cats'));
    // Add 1 to user viewcount on click
    selectedElm[e].viewCount = selectedElm[e].viewCount + 1;
    // Set new cat array to local storage with updated viewcount
    localStorage.setItem('cats', JSON.stringify(selectedElm))
    this.setState({
      selecetdCat: JSON.parse(localStorage.getItem('cats'))[e]
    })
  }
  search(e){
    // Grab the cats array from local storage
    const selectedElm = JSON.parse(localStorage.getItem('cats'));

    // Filter array depending on search and update cats arr according
    let filteredArr = selectedElm.filter((elm) => {
      return elm.Name.includes(e.target.value)
    })
    this.setState({
      cats: filteredArr
    })
  }
  render() { 
    // If there are no cats array on localStorage make one
    if (!localStorage.cats){
      const catObject = [
        {
          "Name":"Adam",
          "ID":0,
          "thumbnailUrl":"https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "Birthdate":"01-01-2011",
          "Owner Name":"Esther",
          "viewCount":0
        },
        {
          "Name":"Bernard",
          "ID":1,
          "thumbnailUrl":"https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "Birthdate":"02-02-2012",
          "Owner Name":"Darkayla",
          "viewCount":0
        },
        {
          "Name":"Calvin",
          "ID":2,
          "thumbnailUrl":"https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "Birthdate":"03-03-2013",
          "Owner Name":"Cordell",
          "viewCount":0
        },
        {
          "Name":"Daniel",
          "ID":3,
          "thumbnailUrl":"https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "Birthdate":"04-04-2014",
          "Owner Name":"Bishop",
          "viewCount":0
        },
        {
          "Name":"Ezekiel",
          "ID":4,
          "thumbnailUrl":"https://images.pexels.com/photos/236606/pexels-photo-236606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "Birthdate":"05-05-2015",
          "Owner Name":"Alexander",
          "viewCount":0
        }
      ]
      localStorage.setItem('cats', JSON.stringify(catObject))
    }

    // Render cats object
    const cats = this.state.cats.map((elm, index) => {
      return <div onClick={(e) => this.chooseCat(elm.ID)} key={elm.ID} className='left-cat-box'>
        <img alt={elm.Name} className='col-sm-4, left-cat-box-img' src={elm.thumbnailUrl} />
        <span>{elm.Name}</span>
        <p>{elm.Birthdate}</p>
      </div>
      }
    )

    return ( 
      <div className='container'>
        <h1>Cats</h1>
        <div className="row">
          <div id='div-left' className="col-sm-12, col-lg-4">
            <div id='search-div'>
              <input onChange={(e) => this.search(e)} className="form-control" type="text" placeholder="Search.." />
            </div>
            {cats}
          </div>
          <div id='div-right' className="col-sm-12, col-lg-8">
            <div id='cat-details-main'>
              <img id='cat-details-img' alt='alt' src={this.state.selecetdCat.thumbnailUrl} />
              <p>{this.state.selecetdCat.Name}</p>
              <p>{this.state.selecetdCat.Birthdate}</p>
              <p>{this.state.selecetdCat.ownerName}</p>
              <p>Number of views: {this.state.selecetdCat.viewCount} times</p>
            </div>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Home;
