# 🔐 RBAC Admin Dashboard

A Role-Based Access Control (RBAC) admin dashboard built with **Next.js App Router**.  
It helps manage **users, roles, and permissions** in a clean, scalable, and secure way.

---

## 📖 What is RBAC?

RBAC decides **who can do what** in an application.

- Users are assigned **roles**
- Roles contain **permissions**
- Permissions define **allowed actions**

This keeps access control simple and maintainable.

---

## 🚀 Features

- JWT-based Authentication  
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
├── api/ # Backend APIs
├── dashboard/ # Admin dashboard pages
├── components/ # UI & layouts
├── store/ # RBAC state management
├── hooks/ # Custom hooks
├── lib/ # Prisma & utilities
├── middleware.ts # Auth guard


---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/rbac_db
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=24h

##▶️ Run Locally
npm install
npx prisma migrate dev
npm run dev

**📄 License**
MIT
