import { col, idx, prizzla } from "./index.ts";

const baseDef = {
    createdAt: col.datetime("createdAt"),
    updatedAt: col.datetime("updatedAt"),
    id: col.text("id"),
};
export const user = prizzla
    .table("user")
    .define({
        ...baseDef,
        email: col.text("email"),
        name: col.text("name"),
        clerkId: col.text("clerkId"),
        marketingEnabled: col.bool("marketingEnabled")
    })
    .index(d => ({
        email: idx.index().on(d.email)
    }))
    .relations(r => ({
        workspaces: r.many(() => workspace)
    }));

export const workspace = prizzla
    .table("workspace")
    .define({
        ...baseDef,
        name: col.text("name"),
        userId: col.text("userId"),
        slug: col.text("slug").unique()
    })
    .index(t => ({
        userIdx: idx.index().on(t.userId)
    }))
    .relations(r => ({
        user: r.one(() => user)
    }));

export const idxFtsWorkspace = prizzla
    .index("fts_workspace_name")
    .fts()
    .on(workspace.col("name"));
