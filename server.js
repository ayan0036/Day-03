 const http = require('http');

const server = http.createServer((req, res) => {

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  switch (req.url) {
    case '/company':
      res.statusCode = 200;
      res.end('Webteam node server me aapka swagat hai!');
      break;

    case '/about':
      res.statusCode = 200;
      res.end('Ye About page hai ');
      break;

    case '/contact':
      res.statusCode = 200;
      res.end('Contact us at asadshaikh786888@gmail.com'); 
      break;

    default:
      res.statusCode = 404;
      res.end('404 Page Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server chal raha hai at http://localhost:3000');
});
