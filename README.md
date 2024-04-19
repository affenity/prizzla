# prizzla

### What?

Use any or all ORMs that you want, defining your database in one place. Currently, only supports Postgres.

### Why?

Prisma and Drizzle have their own set of amazing features and their unique DX, but only in their own area. Combined,
I believe they are the ultimate superpower. Prisma lacks the ability to make powerful and complex (type-safe) queries,
while Drizzle lack the ability of very common CRUD operations.

I've tried making wrappers around creating the schema in Prisma and Drizzle, but it's turned out to be very hacky,
and isn't really easy to maintain in case of any updated syntaxes. `Prizzla`'s goal is to combine multiple ORMs ine one
syntax.

It is designed to avoid "lock-in" with a specific technology. At any time it's possible to export your entire
schema to another ORM/system.

### Goals?

It's first important to get basic functionality up and running, and ensuring reliability and stability.
However, there are some ambitious goals:

* Declare database schema in one place, use with any* supported ORM/vendor
* Combine multiple ORMs to get the best of multiple worlds
* Make it dead simple to declare schemas for many use-cases, in a type-safe way

## Features

### **Generate schema for your preferred ORM**

Takes your Prizzla schemas and converts them into the DSL of your chosen ORM.

**For Prisma:**

```
prizzla gen prisma
```

**For Drizzle:**

```
prizzla gen drizzle
```

### Full-text search

```typescript
// Declaring your schema
const myFtsTable = prizzla.table(
    "FtsTable",
    {
        name: p.text(),
        description: p.text().fulltext("en") // full-text capability for english
    }
);

// ...generate the changes and deploy to database

// Querying with full-text using prisma
const queried = prizzla.prisma.fts(
    myFtsTable.description,
    {
        content: "hello, world"
    }
);

// Querying with full-text using drizzle
const queried2 = prizzla.drizzle.fts(
    myFtsTable.description,
    {
        content: "hello, world"
    }
);
```
