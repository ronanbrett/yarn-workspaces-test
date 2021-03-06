import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    CatsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: '../../models/server-schema.gql',
      installSubscriptionHandlers: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
