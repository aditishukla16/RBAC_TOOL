🔐 RBAC Admin Dashboard

A Role-Based Access Control (RBAC) admin dashboard built using Next.js App Router.
It helps manage users, roles, and permissions in a structured and secure way.

📖 What is RBAC?

RBAC controls who can do what in an application.

Users are assigned roles

Roles contain permissions

Permissions define allowed actions

This makes access control scalable and easy to manage.

🚀 Features

JWT-based Authentication

User Management

Role Management

Permission Management

Role–Permission Assignment

User–Role Assignment

Protected API Routes

Admin Dashboard UI

🛠 Tech Stack

Next.js (App Router)

TypeScript

Tailwind CSS

shadcn/ui

PostgreSQL

Prisma ORM

JWT + bcrypt

📂 Project Structure
app/
├── api/                # Backend APIs
├── dashboard/          # Admin dashboard pages
├── components/         # Layout & UI components
├── store/              # RBAC state management
├── hooks/              # Custom hooks
├── lib/                # Prisma & utilities
└── middleware.ts       # Auth middleware

🔧 Environment Variables
DATABASE_URL=postgresql://user:password@localhost:5432/rbac_db
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=24h

▶️ Run Locally
npm install
npx prisma migrate dev
npm run dev

📝 License

MIT License