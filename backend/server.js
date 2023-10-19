const db = require("./db.js");
const express = require('express');
const mongoose = require("mongoose");
const app = express();
const searchRouter = require('./routes/searchRoutes.js') // Adjust the path

// Add any necessary middleware and configurations here

// Use the search router
app.use('/api', searchRouter); // This assumes the route should be accessible at /api/search

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
