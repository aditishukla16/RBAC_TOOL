import "dotenv/config";
import  { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from "@prisma/client";
import { DATABASE_URL } from "@/config";

console.log("DataBase Connected")
const connectionString = `${DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })


const prisma = new PrismaClient({ adapter });

export default prisma;