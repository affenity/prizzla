export type PrizzlaColumnType = "text" | "int" | "bigint" | "varchar" | "decimal" | "json" | "datetime" | "date";
export type PrizzlaColumnConfig = {
    name: string;
    type: PrizzlaColumnType;
    unique?: boolean;
    array?: boolean;
    index?: boolean;
};

export class PrizzlaColumn<Conf extends PrizzlaColumnConfig> {
    constructor(public __def: Conf) {

    }

    unique() {
        return new PrizzlaColumn<Conf & { unique: true; }>({
            ...this.__def,
            unique: true
        });
    }
}
