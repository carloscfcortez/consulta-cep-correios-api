const express = require('express');
const app = express();
const routes = require('./src/routes');
const PORT = process.PORT || 4000

app.use('/api', routes);
app.listen(PORT);

console.log(`Start on port: http://localhost:${ PORT }`)