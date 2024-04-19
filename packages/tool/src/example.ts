import { col, prizzla } from "./index.ts";

const baseDef = {
    createdAt: col.datetime(),
    updatedAt: col.datetime(),
    id: col.text(),
};
export const user = prizzla
    .table("user")
    .define({
        hello: col.datetime()
    })
    .index(d => ({
        hi: d.hello
    }));

export const workspace = prizzla
    .table("workspace")
    .define({
        userId: user
    });
