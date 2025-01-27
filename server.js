const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
    try {
        // Create
        // const newUser = await prisma.user.create({
        //     data: {
        //         name: "Anukool",
        //         email: "ascmailing0@gmail.com",
        //     }
        // })

        // Read 
        // const users = await prisma.user.findMany()
        // console.log(users)

        // Update
        const data = await prisma.user.update({
            where:{
                id: 1
            }, data: {
                name: "Anukool Singh Chauhan",
            }
        })
        console.log(data)
    } catch (err) {
        console.log(err);
    } finally {
        await prisma.$disconnect()
    }
}

main();