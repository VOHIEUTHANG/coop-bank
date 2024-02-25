import { MiddlewareConsumer } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
export declare class AppModule {
    private config;
    constructor(config: ConfigService);
    configure(consumer: MiddlewareConsumer): void;
}
