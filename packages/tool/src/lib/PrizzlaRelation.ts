import type { PrizzlaColumn } from "./PrizzlaColumn.ts";
import type { PrizzlaTable } from "./PrizzlaTable.ts";

export type PrizzlaRelationType = "one" | "many";
export type PrizzlaRelationConfig = {
    target: PrizzlaTable<any>;
    type: PrizzlaRelationType;
    source: PrizzlaColumn<any>[];
    references: PrizzlaColumn<any>[];
};

export class PrizzlaRelation<Conf extends PrizzlaRelationConfig> {
    constructor(public __def: Conf) {
    }
}
