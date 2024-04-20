import { PrizzlaColumn } from "./PrizzlaColumn.ts";
import { PrizzlaIndex } from "./PrizzlaIndex.ts";
import { PrizzlaRelation, type PrizzlaRelationConfig } from "./PrizzlaRelation.ts";
import type { PrizzlaTable } from "./PrizzlaTable.ts";

export class ColumnBuilder {
    text(name: string) {
        return new PrizzlaColumn({
            name,
            type: "text"
        });
    }

    bool(name: string) {
        return new PrizzlaColumn({
            name,
            type: "bool"
        });
    }

    int(name: string) {
        return new PrizzlaColumn({
            name,
            type: "int"
        });
    }

    bigint(name: string) {
        return new PrizzlaColumn({
            name,
            type: "bigint"
        });
    }

    varchar(name: string) {
        return new PrizzlaColumn({
            name,
            type: "varchar"
        });
    }

    decimal(name: string) {
        return new PrizzlaColumn({
            name,
            type: "decimal"
        });
    }

    json(name: string) {
        return new PrizzlaColumn({
            name,
            type: "json"
        });
    }

    datetime(name: string) {
        return new PrizzlaColumn({
            name,
            type: "datetime"
        });
    }

    date(name: string) {
        return new PrizzlaColumn({
            name,
            type: "date"
        });
    }
}

export class IndexBuilder {
    unique() {
        return new PrizzlaIndex({
            type: "unique",
            colType: "single",
        });
    }

    index() {
        return new PrizzlaIndex({
            type: "index",
            colType: "single"
        });
    }

    fts() {
        return new PrizzlaIndex({
            type: "fts",
            colType: "single"
        });
    }
}


export class RelationBuilder {
    many<Cb extends (() => (PrizzlaTable<any> | any)), Tar extends ReturnType<Cb> = ReturnType<Cb>>(target: Tar) {
        return new PrizzlaRelation<PrizzlaRelationConfig & { target: Tar; }>({
            target,
            type: "one",
            references: [],
            source: []
        });
    }

    one<Cb extends (() => (PrizzlaTable<any> | any)), Tar extends ReturnType<Cb> = ReturnType<Cb>>(target: Tar) {
        return new PrizzlaRelation<PrizzlaRelationConfig & { target: Tar; }>({
            target: target,
            type: "one",
            references: [],
            source: []
        });
    }
}

export const column = new ColumnBuilder();
export const index = new IndexBuilder();
