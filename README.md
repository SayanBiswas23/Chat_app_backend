# Pro-Chat

Pro-Chat is the backend component for a real-time chat application. It handles user connections, message broadcasting, and persistent storage of chat messages.

## Features

-   Real-time messaging using Socket.io
-   User authentication (to be implemented)
-   Message history retrieval
-   Room-based chat

## Technologies Used

-   Node.js
-   Express.js
-   Socket.io
-   MongoDB (with Mongoose)
-   Dotenv for environment variables

## Setup Instructions

Follow these steps to get the development environment running.

### Prerequisites

-   Node.js (v14 or higher)
-   npm or yarn
-   MongoDB instance (local or cloud-hosted)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/SayanBiswas23/Chat_app_backend.git
    cd Chat_app_backend
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    ```
    Replace `your_mongodb_connection_string` with your actual MongoDB connection string (e.g., `mongodb://localhost:27017/prochat` or a MongoDB Atlas URI).

### Running the Application

To start the server, run:

```bash
npm start
# or
yarn start
```

The server will run on the port specified in your `.env` file (default: 5000).

## Project Structure

```
.gitignore
package.json
server.js
config/
	db.js
models/
	Message.js
sockets/
	socketmanager.js
views/
	index.ejs
```

## API Endpoints (if any)

Currently, this is primarily a Socket.io based application. Any REST API endpoints will be documented here if added.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
