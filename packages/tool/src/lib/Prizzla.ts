import { AdapterDrizzle, AdapterPrisma } from "../adapters";
import { PrizzlaTable, type PrizzlaTableConfig } from "./PrizzlaTable.ts";

/**
 * This is the main class for interacting, managing and creating schemas
 */
export class Prizzla {
    public drizzle = new AdapterDrizzle(this);
    public prisma = new AdapterPrisma(this);

    constructor() {
    }

    table<Name extends string>(name: Name) {
        return new PrizzlaTable<PrizzlaTableConfig & { name: Name; }>({
            name,
            schema: {},
            indexes: {},
            metadata: {}
        });
    }
}
