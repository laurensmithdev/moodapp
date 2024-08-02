// testPrisma.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // test creating a new user
    const newUser = await prisma.user.create({
        data: {
            name: 'Test User',
            email: 'test@email.com',
            hashedPassword: 'password',
        },
    });

    console.log('Created new user:', newUser);

    // test retrieving users
    const users = await prisma.user.findMany();
    console.log('All users:', users);
}

main()
    .catch(e => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
