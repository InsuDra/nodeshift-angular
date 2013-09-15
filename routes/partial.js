var get = {};

// Route /, home page
get['/partial/'] = function (req, res) {
  req.content.layout = false;
  res.set('Content-Type', 'text/html');
  res.render('partial/index', req.content);
};


// Route /node, Node.js Info
get['/partial/node'] = function (req, res) {
  req.content.layout = false;
  res.set('Content-Type', 'text/html');
  res.render('partial/node', req.content);
};

// Route /angular, Angular Info
get['/partial/angular'] = function (req, res) {
  req.content.layout = false;
  res.set('Content-Type', 'text/html');
  res.render('partial/angular', req.content);
};

// Route /openshift, Open Shift Info
get['/partial/openshift'] = function (req, res) {
  req.content.layout = false;
  res.set('Content-Type', 'text/html');
  res.render('partial/openshift', req.content);
};

// Route /foundation, Foundation Info
get['/partial/foundation'] = function (req, res) {
  req.content.layout = false;
  res.set('Content-Type', 'text/html');
  res.render('partial/foundation', req.content);
};


// Route /404, lets angular report bad routing requests
get['/partial/404'] = function (req, res) {
  req.content.layout = false;
  req.content.error = {
    status: 404,
    message: 'Route not found!'
  }
  res.set('Content-Type', 'text/html');
  res.render('partial/error', req.content);
};

exports.route = function(serv) {
  for (var r in get) {
    serv.get(r, get[r]);
  }
};
