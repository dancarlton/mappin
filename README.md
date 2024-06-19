# Mappin

Mappin is a full-stack MERN application that lets users add and discover cool locations on an interactive map.

## Table of Contents

- [Mappin](#mappin)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Usage](#usage)
  - [Contributing](#contributing)

## Features

- Interactive map interface for browsing and adding locations.
- User authentication for managing personal spots.
- Dynamic markers with detailed information about each location.
- Real-time updates and responsive design.

## Installation

### Prerequisites

- Node.js
- MongoDB

### Steps

1. **Clone the repository:**

   ```sh
   git clone https://github.com/dancarlton/mappin.git
   cd mappin
   ```

2. **Install server dependencies:**

   ```sh
   cd server
   npm install
   ```

3. **Install client dependencies:**

   ```sh
   cd ../client
   npm install
   ```

4. **Set up environment variables:**
   Create a `.env` file in the `server` directory with the following content:

   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

5. **Run the application:**

   ```sh
   # Start the server
   cd server
   npm start

   # Start the client
   cd ../client
   npm start
   ```

6. **Access the application:**
   Open your browser and go to `http://localhost:8800`

## Usage

1. **Sign up or log in:**

   - Create an account or log in with your existing credentials.

2. **Browse the map:**

   - Explore the map to find interesting locations added by other users.

3. **Add a new location:**

   - Click on the map to add a new location.
   - Fill in the details about the place and save.

4. **Manage your spots:**
   - View and manage the locations you have added.

## Contributing

We welcome contributions to Mappin! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
   ```sh
   git checkout -b feature-name
   ```
3. Commit your changes.
   ```sh
   git commit -m 'Add some feature'
   ```
4. Push to the branch.
   ```sh
   git push origin feature-name
   ```
5. Open a pull request.
