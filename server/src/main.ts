import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: "http://localhost:3000",
    methods: "*",
    credentials: true,
  });
  console.log('server started at 5000')
  await app.listen(5000);
}
bootstrap();