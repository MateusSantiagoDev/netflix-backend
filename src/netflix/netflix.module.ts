import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { NetflixController } from "./netflix.controller";
import { NetflixRepository } from "./netflix.repository";
import { NetflixService } from "./netflix.service";

@Module({
    imports: [PrismaModule],
    controllers: [NetflixController],
    providers: [NetflixService, NetflixRepository],
})
export class NetflixModule {}