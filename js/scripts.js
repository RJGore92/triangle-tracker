var sideA = null;
var sideB = null;
var sideC = null;

var testEqual = function(sideA, sideB, sideC) {
  if ((sideA == sideB) && (sideB == sideC)) {
    return true;
  }
  else {
    return false;
  }
}

var testIso = function(sideA, sideB, sideC) {
  if ((sideA == sideB) && (sideA != sideC)) {
    return true;
  }
  else if ((sideA == sideC) && (sideA != sideB)) {
    return true;
  }
  else if ((sideB == sideC) && (sideA != sideB)) {
    return true;
  }
  else {
    return false;
  }
}

var testScal = function(sideA, sideB, sideC) {
  if ((sideA != sideB) && (sideB != sideC)) {
    return true;
  }
  else {
    return false;
  }
}

var testInvalidTriangle = function(sideA, sideB, sideC) {
  if (((sideA + sideB) > sideC) || ((sideA + sideC) > sideB) || ((sideB + sideC) > sideA)) {
    return false;
  }
  else {
    return true;
  }
}

$(document).ready(function() {
  $("form#form-a").submit(function(event) {
    sideA = parseInt($("#input-a").val());
    sideB = parseInt($("#input-b").val());
    sideC = parseInt($("#input-c").val());

    if((sideA == 0) || (sideB == 0) || (sideC == 0))
    {
      alert("Please make sure all values are above Zero.");
    }

    if (testEqual(sideA, sideB, sideC)) {
      $("h4#result-head").after(
        "<div class='row'>" +
          "<div class='col-md-3'>" +
            "<p>Sides:</p>" +
          "</div>" +
        "</div>"
      );
    }
    else if (testIso(sideA, sideB, sideC)) {

    }
    else if (testScal(sideA, sideB, sideC)) {

    }
    else if (testInvalidTriangle(sideA, sideB, sideC)) {

    }
    else {
      alert("Something went wrong.  Please recheck your values.")
    }

  });
  $("form#new-form-reset").submit(function(event) {

  });
});
