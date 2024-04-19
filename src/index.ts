class SchemaBuilder {
    table(name: string, def: any, extra?: any) {
        return {};
    }

    index(name: string, def: any) {

    }

    datetime(name: string, def?: any) {

    }

    date(name: string, def?: any) {

    }

    text(name: string, def?: any) {

    }

    int(name: string, def: any) {

    }

    bigint(name: string, def: any) {

    }

    json(name: string, def: any) {

    }

    id(name: string, def: any) {

    }

    bool(name: string, def: any) {
    }

    decimal(name: string, def: any) {

    }

    byte(name: string, def: any) {

    }
}

class ColumnBuilder {
    constructor(public name: string, public columns: string[]) {
    }
}


export const core = new SchemaBuilder();
