import type { PrizzlaColumn } from "./PrizzlaColumn.ts";
import type { PrizzlaIndex } from "./PrizzlaIndex.ts";

type TableSchemaDef = Record<string, PrizzlaColumn<any>>;
type TableIndexDef = Record<string, PrizzlaIndex<any>>;
export type PrizzlaTableConfig = {
    name: string;
    schema: TableSchemaDef;
    indexes: TableIndexDef;
    metadata: Record<string, any>;
};

export class PrizzlaTable<Conf extends PrizzlaTableConfig> {
    constructor(public __def: Conf) {

    }

    define<
        Schema extends TableSchemaDef
    >(schema: Schema) {
        return new PrizzlaTable<Conf & { schema: Schema; }>({
            ...this.__def,
            schema: schema
        });
    }

    index<
        CB extends ((d: Conf["schema"]) => TableIndexDef),
        Indexes extends ReturnType<CB> = ReturnType<CB>
    >(cb: CB) {
        return new PrizzlaTable<Conf & { indexes: Indexes; }>({
            ...this.__def,
            indexes: cb(this.__def.schema) as Indexes
        });
    }

    metadata<Metadata extends Record<string, any>>(metadata: Metadata) {
        return new PrizzlaTable<Conf & { metadata: Metadata; }>({
            ...this.__def,
            metadata
        });
    }
}
