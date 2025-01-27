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
        // const data = await prisma.user.update({
        //     where:{
        //         id: 1  //always remember that there should be atleast one constraint in {where} which is either @unique or @id
        //     }, data: {
        //         name: "Anukool Chauhan",
        //     }
        // })
        // console.log(data)

        // Delete
        // const deletedUser = await prisma.user.delete({
        //     where: {
        //         email: "ascmailing0@gmail.com",
        //         name: "Anukool Chauhan"
        //     }
        // })
        // console.log(deletedUser)
    } catch (err) {
        console.log(err);
    } finally {
        await prisma.$disconnect()
    }
}

main();