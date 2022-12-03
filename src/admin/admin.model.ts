import { Module } from "@nestjs/common";
import { AdminController } from "./admin.controller";
import { AdminRepository } from "./admin.repository";
import { AdminService } from "./admin.service";

@Module({
    imports: [],
    controllers: [AdminController],
    providers: [AdminService, AdminRepository],
})
export class AdminModule {}