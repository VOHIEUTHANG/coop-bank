"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./modules/app/app.module");
const dotenv_1 = require("dotenv");
const enviroment_helper_1 = require("./helper/enviroment.helper");
const serialize_data_interceptor_1 = require("./interceptors/serialize-data.interceptor");
const express_1 = require("express");
const path_1 = require("path");
(0, dotenv_1.config)({ path: (0, enviroment_helper_1.getEnvPath)() });
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { abortOnError: false });
    app.enableCors();
    app.setGlobalPrefix('api');
    app.useGlobalInterceptors(new serialize_data_interceptor_1.SerializeData());
    app.use((0, express_1.json)({ limit: '50mb' }));
    app.use((0, express_1.urlencoded)({ extended: true, limit: '50mb' }));
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'), {
        prefix: '/public/'
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Coop Bank')
        .setDescription('The coop bank API description')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/', app, document);
    await app.listen(process.env.PORT || 3000);
    console.log(`Nest app started at http://localhost:${process.env.PORT || 3000} [${enviroment_helper_1.enviroment}]`);
}
bootstrap();
//# sourceMappingURL=main.js.map