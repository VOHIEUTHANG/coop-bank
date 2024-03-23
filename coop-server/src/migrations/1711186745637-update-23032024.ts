import { MigrationInterface, QueryRunner } from 'typeorm';

export class Update230320241711186745637 implements MigrationInterface {
  name = 'Update230320241711186745637';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`document_file\` (
                \`document_file_id\` int NOT NULL AUTO_INCREMENT,
                \`document_file_url\` varchar(255) NOT NULL,
                \`document_file_name\` varchar(255) NOT NULL,
                \`document_file_extension\` varchar(255) NOT NULL,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`document_id\` varchar(255) NULL,
                PRIMARY KEY (\`document_file_id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            CREATE TABLE \`document\` (
                \`document_id\` varchar(255) NOT NULL,
                \`document_name\` varchar(255) NOT NULL,
                \`deleted_at\` timestamp(6) NULL,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`created_user\` int NULL,
                PRIMARY KEY (\`document_id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`document_file\`
            ADD CONSTRAINT \`FK_451c4ffa00abea5f7e548c91038\` FOREIGN KEY (\`document_id\`) REFERENCES \`document\`(\`document_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`document\`
            ADD CONSTRAINT \`FK_99ace8eff522d360d392e191281\` FOREIGN KEY (\`created_user\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`document\` DROP FOREIGN KEY \`FK_99ace8eff522d360d392e191281\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`document_file\` DROP FOREIGN KEY \`FK_451c4ffa00abea5f7e548c91038\`
        `);
    await queryRunner.query(`
            DROP TABLE \`document\`
        `);
    await queryRunner.query(`
            DROP TABLE \`document_file\`
        `);
  }
}
