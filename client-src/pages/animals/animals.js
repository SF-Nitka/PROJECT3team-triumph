//susan added some code here just to be able to test the navbar link to this page; the javascript below may need to be updated -- LEAH & JORDAN Pls let's chat about this page/habitats page. 
import React, { Component } from 'react';
import './animals.css';
import Navbar from '../../components/Navbar'
import Searchbar from '../../components/searchbar/searchbar.js'
import Searchresults from '../../components/searchresults/searchresults.js'


export default class Animals extends Component {
  render() {
    return (
      <div>
        <Searchbar />
        <Searchresults />
      </div>

    );
  }
}

$("#find-animal").on("click", (load()) {
  event.preventDefault()
}

const animal = $("#animal-input").val();
const queryURL = "https://www.pixabay.com/api/animals?q=" + type +
  "&apikey=10803476-df1ba506200da6c7fb26617df";

$.ajax({
  url:
    "https://www.pixabay.com/api/animals?q=" + type +
    "&apikey=10803476-df1ba506200da6c7fb26617df",

  method: "GET"
}).then(function (response) {
  $("display").empty();

  for (var i = 0; i <
    response.Search.length; i++) {

   const animal = $("").text(response.Search[i].Animal);
   const myNewImage = $("img srce='../assets/animalpics/.. " + response);

    $("display").append(animal);
    $("display").append(myNewImage);

    $.ajax({
      type: "POST",
      url: "https://www.pixabay.com/api/animals?q=" + type +
        "&apikey=10803476-df1ba506200da6c7fb26617df",
      data: data,
      success: success,
      dataType: dataType
    })}});