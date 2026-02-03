import { PrismaClient } from '@prisma/client'
import { products, users, blogPosts, pages, orders } from '../lib/data'

const prisma = new PrismaClient()

async function main() {
    console.log('Start seeding...')

    // Clear existing data
    await prisma.order.deleteMany()
    await prisma.user.deleteMany()
    await prisma.product.deleteMany()
    await prisma.blogPost.deleteMany()
    await prisma.page.deleteMany()

    // Seed Users
    for (const u of users) {
        await prisma.user.create({
            data: {
                id: u.id,
                email: u.email,
                name: u.name,
                role: u.role as any,
                createdAt: new Date(u.createdAt),
            },
        })
    }
    console.log('Users seeded.')

    // Seed Products
    for (const p of products) {
        await prisma.product.create({
            data: {
                id: p.id,
                name: p.name,
                slug: p.slug,
                description: p.description,
                price: p.price,
                category: p.category,
                image: p.image,
                featured: p.featured,
                downloads: p.downloads,
                rating: p.rating,
                fileType: p.fileType,
                fileSize: p.fileSize,
                createdAt: new Date(p.createdAt),
            },
        })
    }
    console.log('Products seeded.')

    // Seed Blog Posts
    for (const b of blogPosts) {
        await prisma.blogPost.create({
            data: {
                id: b.id,
                title: b.title,
                slug: b.slug,
                excerpt: b.excerpt,
                content: b.content,
                author: b.author,
                image: b.image,
                published: b.published,
                createdAt: new Date(b.createdAt),
            },
        })
    }
    console.log('Blog posts seeded.')

    // Seed Pages
    for (const pg of pages) {
        await prisma.page.create({
            data: {
                id: pg.id,
                title: pg.title,
                slug: pg.slug,
                content: pg.content,
                updatedAt: new Date(pg.updatedAt),
            },
        })
    }
    console.log('Pages seeded.')

    // Seed Orders
    for (const o of orders) {
        await prisma.order.create({
            data: {
                id: o.id,
                userId: o.userId,
                customerName: o.customerName,
                customerEmail: o.customerEmail,
                items: o.items as any,
                total: o.total,
                status: o.status as any,
                paymentStatus: o.paymentStatus as any,
                createdAt: new Date(o.createdAt),
            },
        })
    }
    console.log('Orders seeded.')

    console.log('Seeding finished.')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
