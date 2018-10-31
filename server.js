const express = require('express');
const app = new express();
app.use(express.static('dist/weChat'));
app.listen(3000)