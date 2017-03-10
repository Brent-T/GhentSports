const express = require('express');
const app = express();
const path = require('path');
const port = (process.env.PORT || 3000);

// Serve dist static
app.use(express.static('dist'));

// Redirect every reques to index.html
app.get('*', (req, res) => {
	res.sendFile(path.resolve('dist', 'index.html'));
});

app.listen(port);
