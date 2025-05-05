# Airplane Booking Website

An airplane booking website built with the MERN stack (MongoDB, Express, React, Node.js). This platform allows users to search and book flights, manage bookings, and view their travel history, all through a responsive, user-friendly interface.

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
4. [Environment Variables](#environment-variables)
5. [Usage](#usage)
6. [Folder Structure](#folder-structure)
7. [API Endpoints](#api-endpoints)
8. [Contributing](#contributing)
9. [License](#license)

---

## Features

- User authentication and authorization
- Search for flights by destination, date, and time
- Filter and sort flights by price, duration, and airline
- Real-time seat availability and fare updates
- Secure booking and payment processing
- User profile management, including booking history and preferences
- Admin panel for managing flights, bookings, and user data

## Tech Stack

- **Frontend**: React, Redux, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Integration**: (Optional) Payment gateway integration (Stripe or PayPal)

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v12+)
- [MongoDB](https://www.mongodb.com/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/airplane-booking-website.git
   cd airplane-booking-website
   ```

2. **Install dependencies**:
   - For backend:
     ```bash
     cd server
     npm install
     ```
   - For frontend:
     ```bash
     cd client
     npm install
     ```

3. **Start MongoDB**: Ensure MongoDB is running on your system.

## Environment Variables

Create a `.env` file in the `server` folder and add the following environment variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PAYMENT_GATEWAY_SECRET=your_payment_gateway_secret (optional)
```

## Usage

1. **Start the server**:
   ```bash
   cd server
   npm run dev
   ```

2. **Start the client**:
   ```bash
   cd client
   npm start
   ```

The server will run on `http://localhost:5000` and the client will run on `http://localhost:3000`.

## Folder Structure

```plaintext
airplane-booking-website/
├── client/               # React frontend code
├── server/               # Express backend code
├── .env                  # Environment variables
└── README.md             # Project documentation
```

## API Endpoints

| Endpoint             | Method | Description                        |
|----------------------|--------|------------------------------------|
| `/api/flights`       | GET    | Retrieve all available flights    |
| `/api/flights/:id`   | GET    | Retrieve details of a flight      |
| `/api/bookings`      | POST   | Book a flight                     |
| `/api/users/profile` | GET    | Get user profile information      |
| `/api/users/login`   | POST   | User login                        |
| `/api/users/register`| POST   | User registration                 |

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
