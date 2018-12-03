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
  if (((sideA + sideB) <= sideC) || ((sideA + sideC) <= sideB) || ((sideB + sideC) <= sideA)) {
    return true;
  }
  else {
    return false;
  }
}

$(document).ready(function() {
  $("form#form-a").submit(function(event) {
    sideA = parseInt($("#input-a").val());
    sideB = parseInt($("#input-b").val());
    sideC = parseInt($("#input-c").val());
    event.preventDefault();
    if((sideA == 0) || (sideB == 0) || (sideC == 0))
    {
      alert("Please make sure none of your values are at zero.");
      return false;
    }

    if (testInvalidTriangle(sideA, sideB, sideC)) {
      $("h4#result-head").after(
        "<div><h5>The inputs provided do not form a valid triangle.</h5></div>" +
        "<div class='row'>" +
          "<div class='col-md-3'>" +
            "<p>Sides:</p>" +
          "</div>" +
          "<div class='col-md-3'>" +
            "<p>A = " + sideA + "</p>" +
          "</div>" +
          "<div class='col-md-3'>" +
            "<p>B = " + sideB + "</p>" +
          "</div>" +
          "<div class='col-md-3'>" +
            "<p>C = " + sideC + "</p>" +
          "</div>" +
        "</div>"
      );
      $("div#input-form").hide();
      $("div#reset-form").show();
      $("div#result-div").show();
    }
    else if (testEqual(sideA, sideB, sideC)) {
      $("h4#result-head").after(
        "<div><h5>This input creates an equalateral triangle.</h5></div>" +
        "<div class='row'>" +
          "<div class='col-md-3'>" +
            "<p>Sides:</p>" +
          "</div>" +
          "<div class='col-md-3'>" +
            "<p>A = " + sideA + "</p>" +
          "</div>" +
          "<div class='col-md-3'>" +
            "<p>B = " + sideB + "</p>" +
          "</div>" +
          "<div class='col-md-3'>" +
            "<p>C = " + sideC + "</p>" +
          "</div>" +
        "</div>"
      );
      $("div#input-form").hide();
      $("div#reset-form").show();
      $("div#result-div").show();
    }
    else if (testIso(sideA, sideB, sideC)) {
      $("h4#result-head").after(
        "<div><h5>This input creates an isosceles triangle.</h5></div>" +
        "<div class='row'>" +
          "<div class='col-md-3'>" +
            "<p>Sides:</p>" +
          "</div>" +
          "<div class='col-md-3'>" +
            "<p>A = " + sideA + "</p>" +
          "</div>" +
          "<div class='col-md-3'>" +
            "<p>B = " + sideB + "</p>" +
          "</div>" +
          "<div class='col-md-3'>" +
            "<p>C = " + sideC + "</p>" +
          "</div>" +
        "</div>"
      );
      $("div#input-form").hide();
      $("div#reset-form").show();
      $("div#result-div").show();
    }
    else if (testScal(sideA, sideB, sideC)) {
      $("h4#result-head").after(
        "<div><h5>This input creates a scalene triangle.</h5></div>" +
        "<div class='row'>" +
          "<div class='col-md-3'>" +
            "<p>Sides:</p>" +
          "</div>" +
          "<div class='col-md-3'>" +
            "<p>A = " + sideA + "</p>" +
          "</div>" +
          "<div class='col-md-3'>" +
            "<p>B = " + sideB + "</p>" +
          "</div>" +
          "<div class='col-md-3'>" +
            "<p>C = " + sideC + "</p>" +
          "</div>" +
        "</div>"
      );
      $("div#input-form").hide();
      $("div#reset-form").show();
      $("div#result-div").show();
    }
    else {
      alert("Something went wrong.  Please recheck your values.")
      return false;
    }

  });
  $("form#new-form-reset").submit(function(event) {
    event.preventDefault();
    sideA = null;
    sideB = null;
    sideC = null;
    $("div#input-form").show();
    $("div#reset-form").hide();
    $("#form-a")[0].reset();
  });
});
