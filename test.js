
//////////////////////////////// Create ///////////////////////////////// Prisma
// import { PrismaClient } from "@prisma/client"

// const prisma = new PrismaClient();

// async function main() {
//     const customer = await prisma.customer.create({
//         data: {
//             name: "Anukool",
//             email: "anukool@postgresUser.com"
//         }
//     });

//     console.log(customer);
// }

// main()
//     .catch(console.error)
//     .finally(() => prisma.$disconnect());
/////////////////////////// Read ///////////////////////////////////////
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// async function main() {
//     // const uniqueCustomer = await prisma.customer.findUnique({ where: { id: 3 } }); // finding a unique customer
//     const allCustomers = await prisma.customer.findMany() // fetching all customers
//     console.log(allCustomers);
// }

// main()
//     .catch(console.error)
//     .finally(() => prisma.$disconnect());

///////////////////////////// Update ///////////////////////////////////
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const customer = await prisma.customer.update({
        where: { id: 1 },
        data: { name: "new name" }
    })
}

// update throws an error if no value is found in the "where" object make sure how you use the function
