export type IndexType = "unique" | "index" | "fts";
export type IndexColType = "single" | "multi";
export type IndexConfig = {
    type: IndexType;
    colType: IndexColType;
};

export class PrizzlaIndex<Conf extends IndexConfig> {
    constructor(public __def: Conf) {
    }
}
