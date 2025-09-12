# 🛡 React Authentication & Product Management Dashboard

This project is a *React.js dashboard* built with *CoreUI, React Router, Redux/State, and Axios*.  
It includes *JWT authentication* and *product management features* like *categories, subcategories, and products*.  

---

## ✨ Features

### 🔑 Authentication
- Login with JWT token (using [EscuelaJS API](https://api.escuelajs.co/))
- Fetch user profile after login
- Show profile avatar in header
- Logout functionality (token removed, redirect to login)

### 📦 Product Management
- 📂 *Categories* → Add, View, Update, Delete  
- 📂 *Subcategories* → Linked to categories  
- 🛒 *Products* → Add product with category & subcategory mapping  
- 💰 Price handling in *Rupees (₹)*  
- 📊 Dashboard shows total categories, subcategories & products  

---

## 🛠 Tech Stack

- *React.js* (Frontend Framework)  
- *React Router DOM* (Routing & Private Routes)  
- *Axios* (API Calls)  
- *CoreUI React* (UI Components & Styling)  
- *LocalStorage* (Token & User data persistence)  

---

## 🔐 Authentication Flow

1. User logs in → POST /auth/login  
2. Token saved in *localStorage*  
3. Fetch profile → GET /auth/profile  
4. Store user in *localStorage*  
5. Redirect to *Dashboard*  

---

## 📦 Product Flow

- *Category CRUD* (Add/Edit/Delete categories)  
- *Subcategory CRUD* (Linked with categories)  
- *Product CRUD* (Add product with price, category & subcategory)  
- All data fetched from *EscuelaJS API*  

---
