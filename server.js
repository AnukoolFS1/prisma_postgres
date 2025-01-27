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

        // Read 
        const users = await prisma.user.findMany({
            include: {
                posts: true
            }
        })
        console.log(JSON.stringify(users, null, 2));


        // Update
        // const data = await prisma.user.update({
        //     where:{
        //         id: 3  //always remember that there should be atleast one constraint in {where} which is either @unique or @id
        //     }, data: {
        //         email: "anukool26@gmail.com",
        //     }
        // })
        // console.log(data)

        // Delete
        // const deletedUser = await prisma.user.delete({
        //     where: {
        //         email: "ascmailing0@gmail.com",
        //         name: "Anukool"
        //     }
        // })
        // console.log(deletedUser)
    } catch (err) {
        console.log(err);
    } finally {
        await prisma.$disconnect()
    }
}


async function posts() {
    // const newPost = await prisma.posts.createMany({
    //     data: [{
    //         title: "post-one",
    //         content: "hello post one",
    //         userId: 3
    //     }, {
    //         title: "post-two",
    //         content: "hello post two",
    //         userId: 3
    //     }]
    // })

    // console.log(newPost)

    const posts = await prisma.posts.findMany({
        include: {
            user: true
        }
    })
    console.log(posts)
}

main();
// posts().catch(err => {
//     throw err
// }).finally(() => {
//     prisma.$disconnect();
// })