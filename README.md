# Nordstil: E-commerce Project

A full-stack e-commerce application built with **Vite**, **React 19**, **TypeScript**, **Node.js**, **Express**, and **SQLite**.

This project focuses on clean architecture, type safety, and practical features that reflect real product workflows.

---

## Overview

Nordstil is a modern online **clothing store** with both a **public storefront** and an **admin dashboard**.

The app uses a **repository pattern** with SQLite for data persistence, separating concerns between the frontend React application and the backend API.

The admin dashboard includes tools for managing products, categories, publishing state, and provides the essential **CRUD operations** you'd expect in a real e-commerce system.

---

## Features

### 🛍 Public Storefront

- **Product catalog** with filtering and search
- **Product detail pages** with image galleries
- **Shopping cart** with add/remove functionality
- **Checkout flow** with order creation
- **Responsive design** using Tailwind CSS and shadcn/ui components
- **Client-side routing** with React Router

### 🛠 Admin Dashboard

- Complete **CRUD interface** for **products** and **categories**
- **Publish / unpublish** products
- **Image management** for product galleries
- **Category assignment** to products
- **Real-time search and filtering**
- **Data visualization** with product and category statistics

### 💾 Backend & Data Layer

- **RESTful API** with Express
- **SQLite + better-sqlite3** for fast, local queries
- **Repository pattern** separating data access from business logic
- **Many-to-many** relationships between categories and products
- **Order management** with customer and order item tracking
- **Type-safe** data models

---

## 📂 Project Structure

```
nordstil/
├── server/
│   ├── features/           # Feature modules (products, categories, orders)
│   │   ├── */routes.js    # API route definitions
│   │   ├── */controller.js # Request handlers
│   │   ├── */service.js    # Business logic
│   │   └── */repository.js # Data access layer
│   ├── data/              # SQLite database
│   └── app.js             # Express server setup
│
└── client/
    ├── src/
    │   ├── components/    # React components
    │   ├── hooks/         # Custom hooks
    │   ├── lib/           # Utilities and helpers
    │   └── app/           # Main React app, routes & CSS
    └── public/            # Static assets
```

---

## 🛠 Tech Stack

### Frontend

- **Vite** - Build tool
- **React 19** - UI framework
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library

### Backend

- **Node.js** - Runtime
- **Express** - Web framework
- **better-sqlite3** - Database driver
- **SQLite** - Database

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
   git clone <repository-url>
   cd nordstil
```

2. **Install backend dependencies**

```bash
   cd server
   npm install
```

3. **Install frontend dependencies**

```bash
   cd ../client
   npm install
```

4. **Start the backend server**

```bash
   cd server
   npm run dev
```

5. **Start the frontend dev server**

```bash
   cd server
   npm run dev
```

The frontend will be available at `http://localhost:3000` and the backend API at `http://localhost:8000`.

---

## 🌱 Future Plans

### 🗄️ Features

- [ ] User authentication and authorization
- [ ] Inventory tracking and stock management
- [x] Order creation and management
- [ ] Order history for customers
- [ ] Payment integration

### 🧰 Tooling & Quality

- [ ] Unit and integration tests
- [ ] Seed script for demo data
- [ ] API documentation (Swagger/OpenAPI)
- [ ] Environment-based configuration

### 🎨 UI/UX Enhancements

- [ ] Dark mode
- [ ] Image upload with preview
- [ ] Customer accounts and profiles
- [ ] Product reviews and ratings
- [ ] Wishlist functionality

---

## 🤔 About This Project

I created Nordstil to practice building a full-stack e-commerce system from scratch, focusing on:

- **Clean architecture** with separation of concerns
- **Type safety** across the stack
- **Modern tooling** and best practices
- **Real-world features** like cart management and checkout flows

The project demonstrates how to structure a scalable application with proper data modeling, API design, and component architecture.

---

## 📝 License

This project is open source and available for educational purposes.
