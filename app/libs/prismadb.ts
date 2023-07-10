import { PrismaClient } from "@prisma/client"

declare global {
    var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
if(process.env.NODE_ENV !== 'production') globalThis.prisma = client

export default client

/* next 13 create a lot of prisma client instances during hot reload
so by doing like this we will assign just only 
1 prisma client instance to variable "globalThis" (which is not affect by the 
hot reload) and then using this variable later everywhere */