import { core } from "./index.ts";

export const baseColumns = {
    id: core.id("id"),
    createdAt: core.datetime("createdAt"),
    updatedAt: core.datetime("updatedAt"),
    deleted: core.bool("deleted")
};
const User = core.table(
    "User",
    {
        ...baseColumns,
        name: core.text("name"),
        email: core.text("email"),
        clerkId: core.text("clerkId"),
        marketingId: core.text("marketingId")
            .ref(() => UserMarketing.id)
    },
    i => ({
        clerkIdx: core.index("clerkIdx", i.clerkId)
    })
);
