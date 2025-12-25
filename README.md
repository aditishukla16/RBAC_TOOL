# 🔐 RBAC Admin Dashboard

A **Role-Based Access Control (RBAC)** admin dashboard built with **Next.js App Router**.  
It allows admins to manage **users, roles, and permissions** securely from one place.

---
## 📖 What is RBAC?

RBAC decides **who can do what** in an application.

- Users get **roles**
- Roles have **permissions**
- Permissions control actions

This keeps access control **simple, secure, and scalable**.

---
## 🚀 Features

- JWT Authentication  
- User Management  
- Role Management  
- Permission Management  
- Role–Permission Assignment  
- User–Role Assignment  
- Protected API Routes  
- Admin Dashboard UI
  
---
## 🛠 Tech Stack

**Frontend & Backend**
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui

**Database**
- PostgreSQL
- Prisma ORM

**Authentication**
- JWT
- bcrypt

---

## 📁 Project Structure

app/
├── api/ # Backend API routes
├── dashboard/ # Admin dashboard pages
├── components/ # UI components & layouts
├── store/ # RBAC state management
├── hooks/ # Custom React hooks
├── lib/ # Prisma client & utilities
├── middleware.ts # Authentication middleware


## 🔧 Environment Variables

Create a `.env` file in the root directory:
DATABASE_URL=postgresql://user:password@localhost:5432/rbac_db
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=24h

▶️ Run Locally
npm install
npx prisma migrate dev
npm run dev

📝 License
MIT
