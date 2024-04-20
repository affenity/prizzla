import type { PrizzlaColumn } from "./PrizzlaColumn.ts";

export type IndexType = "unique" | "index" | "fts";
export type IndexColType = "single" | "multi";
export type IndexConfig = {
    type: IndexType;
    colType: IndexColType;
};

export class PrizzlaIndex<Conf extends IndexConfig> {
    constructor(public __def: Conf) {
    }

    multi() {
        return new PrizzlaIndex<Conf & { colType: "multi" }>({
            ...this.__def,
            colType: "multi"
        });
    }

    fts() {
        return new PrizzlaIndex<Conf & { type: "fts"; }>({
            ...this.__def,
            type: "fts"
        });
    }

    on<Column extends PrizzlaColumn<any>>(...columns: Column[]) {
        return new PrizzlaIndex<Conf>({
            ...this.__def
        });
    }
}
