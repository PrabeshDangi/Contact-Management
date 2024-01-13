const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv");
const contact_routes = require("./Routes/contact_routes");
const user_routes = require("./Routes/user_routes");
const connectDB = require("./config/dbConnection");

dotenv.config({ path: './config.env' });

// Connect to the database
connectDB();

// Create Express app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json()); //terminal ma request body log garauna ko lagi parse garnu parne hunchha. so this will be helpful at that case.
app.use("/api/contacts", contact_routes); // Define routes for contacts
app.use("/api/users", user_routes); // Define routes for users
app.use(errorHandler); // Handle errors

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
