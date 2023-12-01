const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const path = (`F:\\Projects\\PI LIFE\\Client\\index.ejs`);
app.get("", (req, res) => {
    res.render(path);
});
app.listen(5500);