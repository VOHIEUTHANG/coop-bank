import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitSchema1706764856047 implements MigrationInterface {
  name = 'InitSchema1706764856047';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`report\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`price\` int NOT NULL,
                \`make\` varchar(255) NOT NULL,
                \`model\` varchar(255) NOT NULL,
                \`year\` int NOT NULL,
                \`lng\` int NOT NULL,
                \`lat\` int NOT NULL,
                \`mileage\` int NOT NULL,
                \`review_status\` tinyint NOT NULL DEFAULT 0,
                \`userUsername\` varchar(255) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            CREATE TABLE \`user\` (
                \`username\` varchar(255) NOT NULL,
                \`email\` varchar(255) NOT NULL,
                \`password\` varchar(255) NOT NULL,
                \`is_admin\` tinyint NOT NULL DEFAULT 0,
                PRIMARY KEY (\`username\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`report\`
            ADD CONSTRAINT \`FK_2576183a2b08c02f7a04a295d80\` FOREIGN KEY (\`userUsername\`) REFERENCES \`user\`(\`username\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`report\` DROP FOREIGN KEY \`FK_2576183a2b08c02f7a04a295d80\`
        `);
    await queryRunner.query(`
            DROP TABLE \`user\`
        `);
    await queryRunner.query(`
            DROP TABLE \`report\`
        `);
  }
}
