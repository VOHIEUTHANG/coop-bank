import { Injectable } from '@nestjs/common';
import { BranchRepository } from './branch.repository';

@Injectable()
export class BranchService {
  constructor(private readonly branchRepository: BranchRepository) {}

  findOne(id: string) {
    return this.branchRepository.findOne(id);
  }

  findAll() {
    return this.branchRepository.findAll();
  }

  create(name: string) {
    return this.branchRepository.create(name);
  }
}
