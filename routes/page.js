var get = {};

// Route /, test home page
get['/'] = function (req, res) {
  res.set('Content-Type', 'text/html');
  res.render('partial/index', req.content);
};


// Route /, home page
get['/node'] = function (req, res) {
  res.set('Content-Type', 'text/html');
  res.render('partial/node', req.content);
};

// Route /, test home page
get['/angular'] = function (req, res) {
  res.set('Content-Type', 'text/html');
  res.render('partial/angular', req.content);
};

// Route /, test home page
get['/openshift'] = function (req, res) {
  res.set('Content-Type', 'text/html');
  res.render('partial/openshift', req.content);
};

// Route /, test home page
get['/foundation'] = function (req, res) {
  res.set('Content-Type', 'text/html');
  res.render('partial/foundation', req.content);
};


exports.route = function(serv) {
  for (var r in get) {
    serv.get(r, get[r]);
  }
};
