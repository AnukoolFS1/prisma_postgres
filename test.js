import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
//////////////////////////////// Create ///////////////////////////////// Prisma

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

// async function main() {
//     // const uniqueCustomer = await prisma.customer.findUnique({ where: { id: 3 } }); // finding a unique customer
//     const allCustomers = await prisma.customer.findMany() // fetching all customers
//     console.log(allCustomers);
// }



///////////////////////////// Update ///////////////////////////////////

// async function main() {
//     const customer = await prisma.customer.update({
//         where: { id: 1 },
//         data: { name: "new name" }
//     })
// }
// update throws an error if no value is found in the "where" object make sure how you use the function

// async function main() {
//     const customer = await prisma.customer.updateMany({
//         data: { name: "Anukoole" },
//         where: { name: "new name" }
//     })

//     console.log(customer)
// }


main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());