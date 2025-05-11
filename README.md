# Agency Server 🚀

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

A customizable **Soft ware firm website with recruitment system** dashboard built with **Node.js**, **Express**, **MongoDB**, and **TypeScript**. This server provides features for managing job applications, user roles, and automating email notifications for an efficient hiring process.

## 🚀 Features
- **Role-based Access Control**: Different roles including `User`, `Admin`, and `Superadmin` to ensure proper permission management.
- **Job Applications**: Manage job applications with email notifications for recruiters and applicants.
- **JWT Authentication**: Secure authentication using JSON Web Tokens (JWT) with both access and refresh tokens.
- **Content Management Dashboard**: Easily manage job listings, user roles, and other application data from a central dashboard.
- **Automated Emails**: Send confirmation emails, updates, and other notifications via Nodemailer integration.

## 💻 Tech Stack
- **Backend**: Node.js, Express.js, TypeScript
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT, Bcrypt (for password hashing)
- **Validation**: ZOD schema validation for secure data handling
- **Email Service**: Nodemailer for automated email notifications
- **Environment Variables**: `.env` for managing sensitive data (e.g., JWT secrets, email credentials)

## 🛠️ Quick Start

To get started with this project, follow the steps below:

### 1. Clone the Repository
Clone the repository to your local machine:
```bash
git clone https://github.com/your-repo/agency-server.git
cd agency-server
```

### 2. Install Dependencies
Install the required packages using npm:
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root of the project and configure the following environment variables:

```env
NODE_ENV=development      # Set to 'production' in production environment
PORT=3000                 # Port the server will run on
DB_URL=mongodb://localhost:27017/agency-db  # MongoDB connection string
BCRYPT_SALT=             # Salt rounds for bcrypt password hashing
WEBSITE_LINK=https://www.yourwebsite.com  # Your website link (for emails, etc.)
JWT_ACCESS_SECRET=your_access_jwt_secret  # Secret for access token
JWT_REFRESH_SECRET=your_refresh_jwt_secret  # Secret for refresh token
RECRUITER_GMAIL= 
GMAIL_AUTH_PASS=your_gmail_auth_password  # Gmail authentication password for Nodemailer
```


### 4. Run the Development Server
Start the development server:
```bash
npm run dev
```
The server will be running at `http://localhost:3000`.

## 📂 Project Structure

The project structure follows a modular approach for scalability and maintainability. Here's a quick overview of the folder structure:

```
src/
├── modules/           # Feature modules
│   ├── auth/          # Authentication routes and services
│   ├── applications/  # Job applications management
│   └── ...            # Other features such as notifications, admin panel
├── middlewares/       # Authentication and permission middlewares
├── utils/             # JWT, email utilities for system functions
├── app.ts             # Main Express application configuration
└── server.ts          # Server entry point to start the application
```

### 📜 Key Files:
- **`app.ts`**: Contains the main Express configuration, including middlewares and routes.
- **`server.ts`**: The entry point for starting the server.
- **`modules/`**: Contains all feature modules such as authentication, job applications, etc.
- **`utils/`**: Houses utility functions like JWT signing, email sending logic, etc.

## ⚙️ Configuration
### JWT Authentication:
- Access token expiration: 1 day (`JWT_EXPIRES_IN=1d`)
- Refresh token handling is also implemented for persistent login.

### Nodemailer:
- Set up the SMTP email configuration in the `.env` file (`EMAIL_HOST`, `EMAIL_USER`, `EMAIL_PASS`) to enable email functionality.

## 📑 API Documentation
To interact with the API, you can use the following endpoints:

1. **POST /auth/login** - User login to get an access token.
2. **POST /auth/register** - User registration (requires admin privileges).
3. **GET /applications** - Fetch all job applications.
4. **POST /applications** - Submit a job application.
5. **GET /users** - Get a list of users (admin only).

Refer to the API documentation (will be provided later) for complete details on endpoints, request parameters, and responses.

## 🔒 Security
- **JWT Authentication**: Ensures secure access to protected routes and resources.
- **Bcrypt Password Hashing**: Protects user passwords by hashing them before storage.
- **Environment Variables**: Sensitive data like JWT secret and email credentials are stored securely.


## 📬 Contact
If you have any questions or suggestions, feel free to reach out at:
- **Email**: tanvir.dev3@gmail.com
- **Website**: [Tanvir](https://tanvir3.vercel.app/)

---


