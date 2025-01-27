const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
    try {
        const newUser = await prisma.user.create({
            data: {
                name: "Anukool",
                email: "ascmailing0@gmail.com",
            }
        })
    } catch (err) {
        console.log(err);
    } finally {
        await prisma.$disconnect()
    }
}

main();