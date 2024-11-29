
# **MERN Blog Application**

A full-stack blog application built using the MERN stack (MongoDB, Express, React, Node.js) with user authentication, post creation, editing functionality, and file upload support.

---

## **Features**
- **User Authentication:**
  - Register and login functionality using JWT.
  - Password encryption with bcrypt.
  - Protected routes allowing only authors to edit their posts.

- **Post Management:**
  - Create, read, update, and delete (CRUD) blog posts.
  - Upload cover images for posts using Multer.
  - Display posts sorted by creation date.

- **Responsive Design:**
  - User-friendly interface optimized for both desktop and mobile devices.
  - Layout and design improvements using Flexbox, Grid, and CSS media queries.

- **File Uploads:**
  - Image uploads handled with FormData and Fetch API.
  - Backend file handling with Multer and storage in MongoDB.

---

## **Tech Stack**

### **Frontend:**
- **React.js**
  - React Router for navigation.
  - Context API for state management.

### **Backend:**
- **Node.js** with **Express.js**
  - RESTful API endpoints for handling CRUD operations.
  - User authentication using JWT.

### **Database:**
- **MongoDB Atlas**
  - Mongoose ODM for database modeling.

### **Additional Libraries:**
- **Multer** (file uploads)
- **Bcrypt** (password hashing)
- **Cors** (cross-origin resource sharing)
- **Axios** or **Fetch API** (data fetching)

---

## **Installation Instructions**

### **1. Clone the repository:**
\`\`\`bash
git clone https://github.com/yourusername/mern-blog-app.git
cd mern-blog-app
\`\`\`

### **2. Backend Setup:**
\`\`\`bash
cd backend
npm install
\`\`\`

#### **Create a \`.env\` file in the backend directory:**
\`\`\`plaintext
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
\`\`\`

#### **Start the Backend Server:**
\`\`\`bash
npm start
\`\`\`

### **3. Frontend Setup:**
\`\`\`bash
cd ../frontend
npm install
\`\`\`

#### **Start the Frontend Server:**
\`\`\`bash
npm start
\`\`\`

---

## **Project Structure**

\`\`\`plaintext
mern-blog-app/
│
├── backend/
│   ├── models/           # Mongoose models (User, Post)
│   ├── routes/           # Express routes (Auth, Posts)
│   ├── controllers/      # Route logic for CRUD operations
│   ├── middleware/       # Authentication middleware
│   └── uploads/          # Directory for uploaded images
│
└── frontend/
    ├── public/           # Static files
    ├── src/
    │   ├── components/   # Reusable React components (Header, Post)
    │   ├── pages/        # Page components (Home, Login, Register)
    │   ├── context/      # User Context for authentication
    │   └── services/     # API service functions
\`\`\`

---

## **Endpoints**

### **User Routes:**
- **POST /api/register:** Register a new user.
- **POST /api/login:** Authenticate and get a token.
- **GET /api/profile:** Fetch user profile details.

### **Post Routes:**
- **GET /api/posts:** Fetch all posts.
- **POST /api/posts:** Create a new post (requires authentication).
- **PUT /api/posts/:id:** Update a post (only by the author).
- **DELETE /api/posts/:id:** Delete a post (only by the author).

---

## **Future Improvements**
- Add commenting functionality.
- Implement rich-text editing for posts.
- Deploy the application on a cloud platform (e.g., Heroku, Vercel).

---

## **Contributing**
Contributions are welcome! Please fork the repository and submit a pull request.

---



**Happy coding! 🚀**
