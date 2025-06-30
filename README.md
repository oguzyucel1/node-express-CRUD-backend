# 📇 Contact Management API

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)

## 📋 Overview
A simple **Contact Management** backend API built with **Node.js**, **Express**, and **MongoDB**, providing CRUD operations for contacts. Perfect as a starter boilerplate or to integrate with frontend apps.

---

## 🚀 Features
- **Create**, **Read**, **Update**, **Delete** contacts  
- **RESTful** endpoints  
- **Validation** with **JWT** and and **error handling**  
- **CORS** enabled  
- **Environment-based** configuration  

---

## 📁 Project Structure

```text
contact-api/
├── controllers/               # Route handlers
│   ├── contactController.js
│   └── userController.js
├── models/                    # Mongoose schemas
│   ├── ContactModel.js
│   └── UserModel.js
├── routes/                    # Express routers
│   ├── contactRoutes.js
│   └── userRoutes.js
├── config/                    # DB & app config
│   └── dbConnection.js
├── middleware/                # Custom middleware (error, validation)
│   ├── errorHandler.js
│   └── validateTokenHandler.js
├── .env.example
├── server.js                  # App entry point
├── package.json
├── constants.js
└── README.md
```
---




