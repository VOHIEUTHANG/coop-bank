import { MigrationInterface, QueryRunner } from 'typeorm';

export class Update130320241710325517614 implements MigrationInterface {
  name = 'Update130320241710325517614';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`contract\`
            ADD \`first_period_money\` int NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`contract\`
            ADD \`last_period_money\` int NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`contract\`
            ADD \`funds_money\` int NOT NULL
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`contract\` DROP COLUMN \`funds_money\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`contract\` DROP COLUMN \`last_period_money\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`contract\` DROP COLUMN \`first_period_money\`
        `);
  }
}
