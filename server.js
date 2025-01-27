const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
    try {
        // Create
        // const newUser = await prisma.user.createMany({
        //     data: [{
        //         name: "Anukool",
        //         email: "ascmailing0@gmail.com",
        //     }, {
        //         name: "Anukool Singh Chauhan",
        //         email:"anukool26@outlook.com"
        //     }]
        // })
        // console.log(newUser)

        Read 
        const users = await prisma.user.findMany()
        console.log(users)

        // Update
        const data = await prisma.user.update({
            where:{
                id: 3  //always remember that there should be atleast one constraint in {where} which is either @unique or @id
            }, data: {
                email: "anukool26@gmail.com",
            }
        })
        console.log(data)

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