//susan added some code here just to be able to test the navbar link to this page; the javascript below may need to be updated -- LEAH & JORDAN Pls let's chat about this page/animals page. 
import React, { Component } from 'react';
import './habitats.css';
import Navbar from '../../components/Navbar';
import Searchbar from '../../components/searchbar/searchbar.js';
import Searchresults from '../../components/searchresults/searchresults.js';

export default class Habitats extends Component {
  render() {
    return (
      <div>
        <Searchbar />
        <Searchresults />
      </div>
    );
  }
}

$("#find-habitat").on("click", (load()) {
  event.preventDefault()
}

const habitat= $("#habitat-input").val();
const queryURL = "https://www.pixabay.com/api/animals?q=" + type +
  "&apikey=10803476-df1ba506200da6c7fb26617df";

$.ajax({
  url:
    "https://developer.nps.gov/api/v1/parks?parkCode?=acad" + type +
    "&apikey=zYdsfwFeQt0yMJiXZvdaOpYMnsoZIKwulws6voUn",

  method: "GET"
}).then(function (response) {
  $("display").empty();

  for (var i = 0; i <
    response.Search.length; i++) {

    const habitat= $("").text(response.Search[i].Habitat);
    const myNewImage = $("img srce='../assets/habitatpics/.. " + response);

    $("display").append(habitat);
    $("display").append(myNewImage);

    $.ajax({
      type: "POST",
      url: 
      "https://developer.nps.gov/api/v1/parks?parkCode?=acad" + type +
        "&apikey=zYdsfwFeQt0yMJiXZvdaOpYMnsoZIKwulws6voUn",
      data: data,
      success: success,
      dataType: dataType
    })
  }
});