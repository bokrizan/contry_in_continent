# Get country info on click

If you have some web page, and you have many partners on different continent/country you can dynamically show world map, and depending on the clicked continent and country get partner info.

In this feature I use jquery and JS, and also I show how to pass data between jQuery and JavaScript.

## [Demo](http://plnkr.co/edit/ipG0kb?p=preview)

## [Demo video](https://youtu.be/20h-RDZHiLY)

# Usage:

-Get project copy, and get google maps API key
--set API key in index.html and in mapsJquery.js
-When adding a new partner you need to make function and select the correct continent.
**example**

     function addContactTextNorwayJquery() {
        $(".europaContact")
          .empty()
          .append(
            '<div class="row col-xl-12 col-lg-12 col-md-12 col-sm-12">' +
              '<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 text-left pull-left ">' +
              '<div class="kontaktiBox">' +
              '<img src="https://arizonachristian.edu/wp-content/uploads/2017/06/logo-placeholder.png" style="padding-top: 10px; padding-bottom: 10px; width:150px"><br>' +
              "<h5>Title</h5>" +
              "<span>Address</span><br>" +
              "<span>City</span><br>" +
              "<span>Country</span><br>" +
              "<span>123456789</span><br>" +
              "<span>123456789</span><br>" +
              '<a href="mailto:">email</a><br>' +
              '<a target=blank href="">web</a>' +
              "</div>" +
              "</div>" +
              '<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">' +
              '<a class="backToMap pull-left" href="index"><img src="back.png"></a>' +
              "</div>" +
              "</div>"
          );
      }

if you want that contact appear in Africa you nedd to call

> $(".africaContact")
.empty()
.append(...)
or
$(".europaContact")
> .empty()
> .append(...)
> etc..

And at the end, you need to check clicked country and set function with partner data

> google.maps.event.addListener(country, "click", function() {
> if (this.name == "Norway") {
> addContactTextNorway();
> } else if (this.name == "Sweden") {
> addContactTextSweden();
> }
> })
