import { MigrationInterface, QueryRunner } from 'typeorm';

export class Update150320241710479981608 implements MigrationInterface {
  name = 'Update150320241710479981608';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`gift\` DROP COLUMN \`gift_content\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`gift\` DROP COLUMN \`gift_description\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`affiliate_unit\`
            ADD \`affiliate_contract_code\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`gift\`
            ADD \`gifts\` varchar(2000) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`gift\`
            ADD \`proposed_date\` datetime NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`gift\`
            ADD \`gift_image_4\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`gift\`
            ADD \`proposed_user_id\` int NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`gift\`
            ADD CONSTRAINT \`FK_d91c83b92344deea391bb8177fd\` FOREIGN KEY (\`proposed_user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`gift\` DROP FOREIGN KEY \`FK_d91c83b92344deea391bb8177fd\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`gift\` DROP COLUMN \`proposed_user_id\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`gift\` DROP COLUMN \`gift_image_4\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`gift\` DROP COLUMN \`proposed_date\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`gift\` DROP COLUMN \`gifts\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`affiliate_unit\` DROP COLUMN \`affiliate_contract_code\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`gift\`
            ADD \`gift_description\` varchar(255) NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`gift\`
            ADD \`gift_content\` varchar(255) NOT NULL
        `);
  }
}
