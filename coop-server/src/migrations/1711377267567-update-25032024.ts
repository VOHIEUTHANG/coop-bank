import { MigrationInterface, QueryRunner } from 'typeorm';

export class Update250320241711377267567 implements MigrationInterface {
  name = 'Update250320241711377267567';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`affiliate_unit\`
            ADD \`affiliate_note\` varchar(1000) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`contract\` DROP COLUMN \`total_money\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`contract\`
            ADD \`total_money\` bigint NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`contract\` DROP COLUMN \`loan_money\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`contract\`
            ADD \`loan_money\` bigint NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`contract\` DROP COLUMN \`funds_money\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`contract\`
            ADD \`funds_money\` bigint NOT NULL
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`contract\` DROP COLUMN \`funds_money\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`contract\`
            ADD \`funds_money\` int NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`contract\` DROP COLUMN \`loan_money\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`contract\`
            ADD \`loan_money\` int NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`contract\` DROP COLUMN \`total_money\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`contract\`
            ADD \`total_money\` int NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`affiliate_unit\` DROP COLUMN \`affiliate_note\`
        `);
  }
}
