# LootBox - Backend

## Overview
The backend of LootBox is built using Express and MongoDB. It provides RESTful API endpoints for managing products, including filtering by price range and fetching product details. MongoDB Atlas is used as the database.

## Project Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm (version 6 or higher)
- MongoDB Atlas account (for the database)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Ahnabu/lootbox-server.git
  
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root of the project and add the following environment variables:
    ```env
    PORT=5000
    MONGODB_URI=<your_mongodb_atlas_uri>
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. The backend API will be running at `http://localhost:5000`.

### Project Structure


  - **index.js/**: Functions to handle the API requests.


### API Endpoints

- `GET /api/products`: Fetch all products.
- `GET /api/products?minPrice=&maxPrice=`: Fetch products within a specific price range.


### Scripts

- `npm run dev`: Runs the server in development mode with hot reloading.
- `npm start`: Runs the server in production mode.
- `npm run lint`: Lints the codebase for style and syntax issues.

### Technologies Used
- Express
- MongoDB Atlas
- Mongoose
- dotenv (for environment variable management)

### Additional Notes
- Ensure that your MongoDB Atlas connection string (`MONGODB_URI`) is correctly configured in the `.env` file.
- For production deployment, consider using a process manager like PM2 or deploying to a service like Heroku.

## Contributing
Please feel free to contribute by submitting a pull request or opening an issue.

## License
This project is licensed under the MIT License.
