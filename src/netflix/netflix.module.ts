import { Module } from "@nestjs/common";
import { NetflixController } from "./netflix.controller";
import { NetflixRepository } from "./netflix.repository";
import { NetflixService } from "./netflix.service";

@Module({
    imports: [],
    controllers: [NetflixController],
    providers: [NetflixService, NetflixRepository],
})
export class NetflixModule {}