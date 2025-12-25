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

- Next.js (App Router)  
- TypeScript  
- Tailwind CSS  
- shadcn/ui  
- PostgreSQL  
- Prisma ORM  
- JWT + bcrypt  

---

## 📂 Project Structure

```txt
app/
├── api/          # Backend APIs
├── dashboard/    # Admin pages
├── components/   # UI & layouts
├── store/        # RBAC state
├── hooks/        # Custom hooks
├── lib/          # Prisma & utilities
└── middleware.ts # Auth guard
🔧 Environment Variables
Create a .env file:

env
Copy code
DATABASE_URL=postgresql://user:password@localhost:5432/rbac_db
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=24h
▶️ Run Locally
bash
Copy code
npm install
npx prisma migrate dev
npm run dev
📝 License
MIt