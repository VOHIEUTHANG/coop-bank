import { DataSource } from 'typeorm';
export declare const DATABASE_CONFIG: {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    entities: string[];
    migrations: string[];
    autoLoadEntities: boolean;
    synchronize: boolean;
    migrationsRun: boolean;
};
declare const _default: (() => any) & import("@nestjs/config").ConfigFactoryKeyHost<any>;
export default _default;
export declare const connectionSource: DataSource;
