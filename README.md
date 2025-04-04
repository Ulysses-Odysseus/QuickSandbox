# QuickSandbox - Technical Interview Preparation Environment

A comprehensive development environment designed for technical interview preparation and practice. This project provides a structured environment to demonstrate and practice various technical skills across different technology stacks.

## Project Structure

```
quicksandbox/
├── core/                 # Core server functionality
│   ├── server.js        # Main server configuration
│   ├── middleware/      # Custom middleware
│   ├── routes/          # Route definitions
│   ├── services/        # Business logic services
│   ├── models/          # Data models
│   ├── repositories/    # Data access layer
│   └── config/          # Configuration files
├── public/              # Static files and landing page
│   ├── css/
│   ├── js/
│   ├── images/
│   └── index.html
├── js-envs/            # JavaScript environments
│   ├── vanilla/        # Vanilla JavaScript exercises
│   ├── react/          # React exercises
│   ├── node/           # Node.js exercises
│   └── typescript/     # TypeScript exercises
├── microservices/      # Microservices examples
│   ├── auth-service/   # Authentication service
│   ├── data-service/   # Data processing service
│   └── api-gateway/    # API Gateway
├── tests/              # Test suites
├── docs/               # Documentation
├── docker/             # Docker configuration
└── kubernetes/         # Kubernetes configuration
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- pnpm for reduced dependencies but you can use yarn or npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ulysses-Odysseus/QuickSandbox
   cd quicksandbox
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create a .env file in the root directory:
   ```
   PORT=3000
   NODE_ENV=development
   ```

4. Start the development server:
   ```bash
   pnpm run dev
   ```

The server will start on http://localhost:3000

### Development Features

- **Hot Reloading**: The server automatically restarts when changes are detected in the `core/`, `js-envs/`, and `public/` directories.
- **Environment Variables**: Configuration through `.env` file.
- **Static File Serving**: Files in the `public/` directory are served statically with caching disabled in development mode.

## Available Environments

### Vanilla JavaScript
- DOM manipulation
- Event handling
- Async programming
- ES6+ features

### React
- Component architecture
- State management
- Hooks
- Context API

### React Native
- Expo
- React Native CLI
- React Native Navigation
- React Native Elements
- React Native Paper
- React Native Reanimated

### Node.js
- Server setup
- Middleware implementation
- Database integration
- Authentication

### TypeScript
- Type system
- Interfaces
- Generics
- Decorators

### License

This project is licensed under the MIT License.
