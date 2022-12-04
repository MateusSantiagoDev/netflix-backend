import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.model';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movies/movie.module';
import { NetflixModule } from './netflix/netflix.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [MovieModule, UserModule, AdminModule, NetflixModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
