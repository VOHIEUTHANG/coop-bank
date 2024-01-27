import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class BranchRepository {
  async findOne(id: string) {
    const contents = await readFile('branch.json', 'utf-8');
    const branchs = JSON.parse(contents);
    console.log('🚀 ~ BranchRepository ~ findOne ~ branchs:', branchs);

    return branchs?.find((branch: any) => branch.id === id);
  }
  async findAll() {
    const contents = await readFile('branch.json', 'utf-8');
    const branchs = contents ? JSON.parse(contents) : null;
    return branchs;
  }
  async create(name: string) {
    const contents = await readFile('branch.json', 'utf-8');
    const branchs = contents ? JSON.parse(contents) : [];
    const id = String(Math.floor(Math.random() * 1000));
    branchs?.push({
      id,
      name
    });
    await writeFile('branch.json', JSON.stringify(branchs));
  }
}
