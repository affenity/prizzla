import { PrizzlaColumn } from "./PrizzlaColumn.ts";

export class ColumnBuilder {
    text(name: string) {
        return new PrizzlaColumn({
            name,
            type: "text"
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

    }

    name() {

    }

    fts() {

    }
}

export const column = new ColumnBuilder();
export const index = new IndexBuilder();
