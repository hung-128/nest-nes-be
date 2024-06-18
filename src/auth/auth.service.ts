import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

@Injectable()
export class AuthService {
    googleLogin(data){
        //check mail existed
        const user = prisma.user.findFirst({
            where: {
                email: data.email,
                type: data.type
            },
            select: {
                name: true,
                email: true,
                type: true
            }
        })
        if (!user) {
            const newUser = prisma.user.create({
                select:{},
                data: data
            }) 
        }
    }
}
