let vis1 = document.querySelector("#option1");
let vis2 = document.querySelector("#option2");
let vis3 = document.querySelector("#option3");
// var output="false";

const mainOption1 = document.querySelector("#mainOpt1");
mainOption1.addEventListener("click", display1);
function display1() {
  if (vis1.style.display === 'none') {
    vis1.style.display = 'block';
    vis2.style.display = 'none';
    vis3.style.display = 'none';
  }
  else {
    vis1.style.display = 'none';
  }
}

const mainOption2 = document.querySelector("#mainOpt2");
mainOption2.addEventListener("click", display2);
function display2() {
  if (vis2.style.display === 'none') {
    vis2.style.display = 'block';
    vis1.style.display = 'none';
    vis3.style.display = 'none';
  }
  else {
    vis2.style.display = 'none';
  }
}

const mainOption3 = document.querySelector("#mainOpt3");
mainOption3.addEventListener("click", display3);
function display3() {
  if (vis3.style.display === 'none') {
    vis3.style.display = 'block';
    vis2.style.display = 'none';
    vis1.style.display = 'none';
  }
  else {
    vis3.style.display = 'none';
  }
}

var bigbang = []
async function fetchText() {
  let response = await fetch('task.json');
  let data = await response.json();
  bigbang = data;
}
fetchText();


function theory1(seasonnum, epinum) {
  let seasonin = parseInt(seasonnum)
  let epiin = parseInt(epinum)
  let len1 = bigbang._embedded.episodes.length

  for (let c = 0; c <= len1; c++) {
    if (bigbang._embedded.episodes[c].season == seasonin && bigbang._embedded.episodes[c].number == epiin) {
      var visibil = document.getElementById("card");
      if (visibil.style.visibility === 'hidden') {
        visibil.style.visibility = 'visible';
      }

      document.getElementById("image").src = bigbang._embedded.episodes[c].image.original;
      document.getElementById("head").innerHTML = bigbang._embedded.episodes[c].name;
      document.getElementById("desc").innerHTML = bigbang._embedded.episodes[c].summary;

    }
  }
  document.getElementById("card").innerHTML = "No Record found!! Enter a valid Season number and Episode number  ";
  var visibil = document.getElementById("card");
  if (visibil.style.visibility === 'hidden') {
    visibil.style.visibility = 'visible';
  }
}


function theory2(epi_Id) {
  let epiid = parseInt(epi_Id)
  let len1 = bigbang._embedded.episodes.length
  for (let c = 0; c <= len1; c++) {
    console.log("inside for loop");
    if (bigbang._embedded.episodes[c].id == epiid) {
      var visibil = document.getElementById("card");
      if (visibil.style.visibility === 'hidden') {
        visibil.style.visibility = 'visible';
      }
      document.getElementById("image").src = bigbang._embedded.episodes[c].image.original;
      document.getElementById("head").innerHTML = bigbang._embedded.episodes[c].name;
      document.getElementById("desc").innerHTML = bigbang._embedded.episodes[c].summary;

    }
  }
}


function theory3(epi_name) {
  var output="false";
  let len1 = bigbang._embedded.episodes.length
  for (let c = 0; c <= len1; c++) {
    if (bigbang._embedded.episodes[c].name.toUpperCase() == epi_name.toUpperCase()) {
      var visibil = document.getElementById("card");
      if (visibil.style.visibility === 'hidden') {
        visibil.style.visibility = 'visible';
      }
      console.log(output);
      output="true";
      console.log(output);
      document.getElementById("image").src = bigbang._embedded.episodes[c].image.original;
      document.getElementById("head").innerHTML = bigbang._embedded.episodes[c].name;
      document.getElementById("desc").innerHTML = bigbang._embedded.episodes[c].summary;

    }
  }
  return output;
}




function type1() {
  let season = document.getElementById("ses").value;
  let episode = document.getElementById("epi").value;
  theory1(season, episode);
}
function type2() {
  let episodeId = document.getElementById("epiId").value;
  console.log(episodeId);
  theory2(episodeId);
}
function type3() {
  let episodeName = document.getElementById("epiname").value;
  let op=theory3(episodeName);
  console.log(op);
  if (op == "false") {
    alert("enter correct value");
}}