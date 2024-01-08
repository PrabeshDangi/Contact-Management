const express = require("express");
const dotenv = require("dotenv");
const contact_routes = require("./Routes/contact");
const connectDB = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");

dotenv.config({ path: './config.env' });

// Connect to the database
connectDB();

// Create Express app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse JSON requests
app.use("/api/contacts", contact_routes); // Define routes for contacts
app.use(errorHandler); // Handle errors

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
