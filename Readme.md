# Online Food Ordering Backend

A comprehensive backend system for an online food ordering application built with Node.js, Express, TypeScript, and MongoDB.

## Project Overview

This application serves as the backend for a food delivery platform supporting multiple user types:

1. **Customers** - Can browse food items, place orders, and track deliveries
2. **Vendors** - Restaurant owners who can manage their menu and fulfill orders 
3. **Delivery Users** - Handle the food delivery process
4. **Admin** - Manage vendors, transactions, and system configurations

## Technologies Used

- Node.js
- Express.js
- TypeScript
- MongoDB with Mongoose
- JWT for Authentication
- Class Validator & Class Transformer for DTOs
- Bcrypt for Password Hashing
- Multer for File Uploads
- Twilio for OTP Services

## Features

- **Authentication & Authorization**
  - JWT-based authentication
  - Role-based access control
  - Password hashing with bcrypt

- **Customer Features**
  - Account creation and verification
  - OTP verification
  - Food browsing and searching
  - Cart management
  - Order placement and tracking
  - Payment processing

- **Vendor Features**
  - Restaurant profile management
  - Menu management (add/edit food items)
  - Order management
  - Service availability toggle
  - Offer creation and management

- **Delivery User Features**
  - Account creation and verification
  - Order delivery management
  - Availability status management
  - Location tracking

- **Admin Features**
  - Vendor management
  - Transaction management
  - Delivery user verification

## API Structure

The API is organized into routes for different user types:

- `/admin/*` - Admin routes
- `/vendor/*` - Vendor routes  
- `/customer/*` - Customer routes
- `/delivery/*` - Delivery user routes
- `/*` - Shopping routes for public access

## Getting Started

### Prerequisites

- Node.js (v14.15.2 recommended)
- npm (v6.14.9 recommended)
- MongoDB

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/online-food-ordering-backend.git
cd online-food-ordering-backend
```
2. Install dependencies
```
npm install
```

3. Create a .env file in the root directory with the following variables:
```bash
MONGO_URI=mongodb://localhost:27017/online_food_delivery
APP_SECRET=your_secret_key
PORT=8000
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
```

4. Start the development server
```bash
npm run dev
```

5. Production Deployment
```bash
npm run build
npm start
```
API Documentation
The repository includes a Postman collection file (FoodOrders.postman_collection.json) with sample API requests for testing the endpoints.

Project Structure
src/
├── config/             # Configuration variables
├── controllers/        # Request handlers
├── dto/                # Data Transfer Objects
├── middleware/         # Express middleware
├── models/             # Mongoose models
├── routes/             # Express routes
├── services/           # Service layer
├── utility/            # Helper functions
└── index.ts            # Application entry point