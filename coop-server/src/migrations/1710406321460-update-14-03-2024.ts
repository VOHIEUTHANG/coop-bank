import { MigrationInterface, QueryRunner } from 'typeorm';

export class Update140320241710406321460 implements MigrationInterface {
  name = 'Update140320241710406321460';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`transaction_room\` DROP COLUMN \`transaction_room_fax\`
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`transaction_room\`
            ADD \`transaction_room_fax\` varchar(255) NOT NULL
        `);
  }
}
