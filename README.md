# 🛒 Urbanfit - Next.js E-commerce

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0-green?logo=mongodb)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-blue?logo=tailwindcss)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

A modern full-stack **E-commerce web application** built with **Next.js 15 (App Router)**, **MongoDB**, and **NextAuth.js**.  
It includes **product listing, product details, authentication, dark/light mode, toast notifications**, and much more.

---

## 🚀 Features

- ✅ **Next.js 15 (App Router)**
- ✅ **MongoDB Database** connection (`dbConnect`)
- ✅ **Authentication** with NextAuth (Google, GitHub, Credentials)
- ✅ **Products Page** with:
  - Product listing  
  - Pagination & Search  
  - Product details (stock, discount, brand, rating)
- ✅ **Image Optimization** with `next/image`
- ✅ **Toast Notifications** (`react-toastify`)
- ✅ **Loading Page** & **Custom 404 Page**
- ✅ **Responsive UI** with TailwindCSS
- ✅ **Dark / Light Theme Toggle**

---

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/) – React Framework  
- [MongoDB](https://www.mongodb.com/) – NoSQL Database  
- [NextAuth.js](https://next-auth.js.org/) – Authentication  
- [TailwindCSS](https://tailwindcss.com/) – Styling  
- [React Icons](https://react-icons.github.io/react-icons/) – Icons  
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction) – Notifications  

---

## 📂 Project Structure

```bash
├── app/               # Next.js App Router pages
│   ├── products/      # Products listing & details
│   ├── api/           # API routes (auth, products)
│   └── layout.js      # Root layout
├── components/        # Reusable UI components
├── lib/               # Database connection, helpers
├── public/            # Static assets (images, icons)
└── styles/            # Global styles (Tailwind)
```
##1.⚡ Getting Started
```
git clone https://github.com/Abdulal-Roman09/urbanfit.git
cd urbanfit

```
##2.Install dependencies
```
npm install

```
##3️. Setup Environment Variables
```
MONGODB_URI=your-mongodb-uri
NEXTAUTH_SECRET=your-secret
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret
GOOGLE_ID=your-google-client-id
GOOGLE_SECRET=your-google-client-secret

```
##4️.Run the Development Server
```
npm run dev
```
