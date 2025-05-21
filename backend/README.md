# Cheetah E-commerce Backend

## Overview
Cheetah E-commerce Backend is a Node.js application built with TypeScript and Express. It serves as the backend for the Cheetah E-commerce platform, providing APIs to manage products and interact with a Supabase database.

## Features
- RESTful API for product management
- Integration with Supabase for database operations
- TypeScript for type safety and better development experience

## Project Structure
```
cheetah_ecommerce_backend
├── src
│   ├── app.ts                # Entry point of the application
│   ├── controllers           # Contains controllers for handling requests
│   ├── routes                # Defines application routes
│   ├── services              # Contains services for database interactions
│   └── types                 # Type definitions for the application
├── package.json              # NPM package configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cheetah_ecommerce_backend.git
   cd cheetah_ecommerce_backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Supabase**
   - Create a Supabase account and project.
   - Obtain your Supabase URL and API key.
   - Update the `src/services/supabaseService.ts` file with your Supabase credentials.

4. **Run the application**
   ```bash
   npm start
   ```

## API Usage

### Get Products
- **Endpoint:** `GET /products`
- **Description:** Fetches a list of products from the database.

### Create Product
- **Endpoint:** `POST /products`
- **Description:** Adds a new product to the database.
- **Request Body:**
  ```json
  {
    "name": "Product Name",
    "price": 100,
    "description": "Product Description"
  }
  ```

## License
This project is licensed under the MIT License. See the LICENSE file for more details.