function showArticle(id, callbackSuccess, callbackError) {
  if (true) {
    callbackSuccess('Callback Functions', 'Callback Functions in JS!');
  } else {
    callbackError('Data recovery error!');
  }
};

var callbackSuccess = function(title, description) {
  document.write(`<h1> ${title} </h1>`);
  document.write('<hr/>');
  document.write(`<h3> ${description} </h3>`);
};

var callbackError = function(error) {
  document.write(`<h3> <b>Error:<b> ${error} </h3>`);
};

showArticle(1, callbackSuccess, callbackError);