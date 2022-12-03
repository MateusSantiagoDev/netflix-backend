import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movies/movie.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [MovieModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
