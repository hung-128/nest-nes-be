import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

@Injectable()
export class ProjectService {
	create(createProjectDto: CreateProjectDto) {
		return 'This action adds a new project';
	}

	async findAll() {
		const projects = await prisma.roles.findMany()
		return 'projects';
	}

	findOne(id: number) {
		return `This action returns a #${id} project`;
	}

	update(id: number, updateProjectDto: UpdateProjectDto) {
		return `This action updates a #${id} project`;
	}

	remove(id: number) {
		return `This action removes a #${id} project`;
	}
}
