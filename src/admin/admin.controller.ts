import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags, ApiOperation } from "@nestjs/swagger";
import { AdminService } from "./admin.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateadminDto } from "./dto/update-admin.dto";

@ApiTags("Admin")
@Controller("admin")
export class AdminController {
    constructor(private readonly service: AdminService) {}

    @ApiOperation({
        summary: "Vizualizar todos os adminitradores"
    })
    @Get()
    findAll() {
        return this.service.findAll()
    }

    @ApiOperation({
        summary: "Adicionar um novo administrador"
    })
    @Post()
    create(@Body() dto: CreateAdminDto) {
        return this.service.create(dto)
    }

    @ApiOperation({
        summary: "Buscar um administrador pelo ID"
    })
    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.service.findOne(id);
    }

    @ApiOperation({
        summary: "Editar um administrador pelo ID"
    })
    @Patch(":id")
    update(@Param("id") id: string, @Body() dto: UpdateadminDto) {
        return this.service.update(id, dto)
    }

}