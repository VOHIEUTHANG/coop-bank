import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initial1708828959412 implements MigrationInterface {
  name = 'Initial1708828959412';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`bank_representative\` (
                \`bank_representative_id\` varchar(255) NOT NULL,
                \`bank_representative_name\` varchar(255) NOT NULL,
                \`bank_representative_email\` varchar(255) NULL,
                \`bank_representative_position\` int NOT NULL,
                \`phone_number\` varchar(255) NOT NULL,
                \`address\` varchar(255) NULL,
                \`gender\` int NOT NULL,
                \`birth_date\` datetime NULL,
                \`id_number\` varchar(255) NOT NULL,
                \`id_issued_by\` varchar(255) NOT NULL,
                \`id_issued_date\` datetime NOT NULL,
                \`deleted_at\` timestamp(6) NULL,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`created_}user\` int NULL,
                UNIQUE INDEX \`IDX_783989c306664053f1f008f1b1\` (\`id_number\`),
                PRIMARY KEY (\`bank_representative_id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            CREATE TABLE \`branch\` (
                \`branch_id\` varchar(255) NOT NULL,
                \`branch_name\` varchar(255) NOT NULL,
                \`address\` varchar(255) NULL,
                \`branch_province\` varchar(255) NULL,
                \`interest_rate\` int NOT NULL,
                \`bank_number\` varchar(255) NOT NULL,
                \`branch_fax\` varchar(255) NOT NULL,
                \`phone_number_main\` varchar(255) NOT NULL,
                \`phone_number_sub\` varchar(255) NULL,
                \`fax\` varchar(255) NULL,
                \`deleted_at\` timestamp(6) NULL,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`created_user\` int NULL,
                PRIMARY KEY (\`branch_id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            CREATE TABLE \`user\` (
                \`user_id\` int NOT NULL AUTO_INCREMENT,
                \`username\` varchar(255) NOT NULL,
                \`email\` varchar(255) NOT NULL,
                \`phone_number\` varchar(255) NOT NULL,
                \`full_name\` varchar(255) NOT NULL,
                \`password\` varchar(255) NOT NULL,
                \`is_admin\` tinyint NOT NULL DEFAULT 0,
                \`is_active\` tinyint NOT NULL DEFAULT 1,
                \`deleted_at\` timestamp(6) NULL,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`branch_id\` varchar(255) NULL,
                UNIQUE INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` (\`username\`),
                PRIMARY KEY (\`user_id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            CREATE TABLE \`individual\` (
                \`individual_id\` varchar(255) NOT NULL,
                \`individual_fullname\` varchar(255) NOT NULL,
                \`phone_number\` varchar(255) NULL,
                \`current_address\` varchar(255) NULL,
                \`origin_address\` varchar(255) NULL,
                \`gender\` int NOT NULL,
                \`birth_date\` datetime NULL,
                \`id_number\` varchar(255) NOT NULL,
                \`id_front_image\` varchar(255) NULL,
                \`id_back_image\` varchar(255) NULL,
                \`id_issued_by\` varchar(255) NOT NULL,
                \`id_issued_date\` datetime NOT NULL,
                \`export_data\` varchar(1000) NULL,
                \`salary_file\` varchar(255) NULL,
                \`marriage_file\` varchar(255) NULL,
                \`appoint_file\` varchar(255) NULL,
                \`deleted_at\` timestamp(6) NULL,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`affiliate_unit_id\` varchar(255) NULL,
                \`created_user\` int NULL,
                UNIQUE INDEX \`IDX_c3a72905b4e81d5a3969f37f48\` (\`id_number\`),
                PRIMARY KEY (\`individual_id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            CREATE TABLE \`affiliate_unit\` (
                \`affiliate_unit_id\` varchar(255) NOT NULL,
                \`affiliate_unit_name\` varchar(255) NOT NULL,
                \`affiliate_unit_code\` varchar(255) NOT NULL,
                \`affiliate_unit_level\` int NULL,
                \`affiliate_unit_address\` varchar(255) NULL,
                \`affiliate_unit_phone\` varchar(255) NOT NULL,
                \`affiliate_unit_fax\` varchar(255) NULL,
                \`paid_date\` int NULL,
                \`affiliate_unit_image_1\` varchar(255) NULL,
                \`affiliate_unit_image_2\` varchar(255) NULL,
                \`affiliate_unit_paycheck\` varchar(255) NULL,
                \`founding_date\` datetime NULL,
                \`deleted_at\` timestamp(6) NULL,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`created_user\` int NULL,
                PRIMARY KEY (\`affiliate_unit_id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            CREATE TABLE \`representative\` (
                \`representative_id\` varchar(255) NOT NULL,
                \`representative_name\` varchar(255) NOT NULL,
                \`representative_email\` varchar(255) NULL,
                \`representative_position\` int NULL,
                \`phone_number\` varchar(255) NULL,
                \`address\` varchar(255) NULL,
                \`gender\` int NOT NULL,
                \`bank_number\` varchar(255) NOT NULL,
                \`bank_name\` varchar(255) NOT NULL,
                \`tax_code\` varchar(255) NOT NULL,
                \`birth_date\` datetime NOT NULL,
                \`id_number\` varchar(255) NOT NULL,
                \`id_front_image\` varchar(255) NULL,
                \`id_back_image\` varchar(255) NULL,
                \`id_issued_by\` varchar(255) NOT NULL,
                \`id_issued_date\` datetime NOT NULL,
                \`decision_number\` varchar(255) NOT NULL,
                \`decision_date\` datetime NOT NULL,
                \`effective_date_from\` datetime NOT NULL,
                \`effective_date_to\` datetime NOT NULL,
                \`decision_district\` varchar(255) NULL,
                \`decider_name\` varchar(255) NULL,
                \`decider_position\` varchar(255) NULL,
                \`deleted_at\` timestamp(6) NULL,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`created_user\` int NULL,
                UNIQUE INDEX \`IDX_b277a9b3df18bc65824fed9f5d\` (\`id_number\`),
                PRIMARY KEY (\`representative_id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            CREATE TABLE \`gift\` (
                \`gift_id\` varchar(255) NOT NULL,
                \`gift_content\` varchar(255) NOT NULL,
                \`gift_description\` varchar(255) NOT NULL,
                \`gift_date\` datetime NULL,
                \`gift_image_1\` varchar(255) NULL,
                \`gift_image_2\` varchar(255) NULL,
                \`gift_image_3\` varchar(255) NULL,
                \`deleted_at\` timestamp(6) NULL,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`affiliate_unit_id\` varchar(255) NULL,
                \`giver_user_id\` int NULL,
                \`created_user\` int NULL,
                PRIMARY KEY (\`gift_id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            CREATE TABLE \`affiliate_unit_file\` (
                \`affiliate_unit_file_id\` int NOT NULL AUTO_INCREMENT,
                \`affiliate_unit_file_name\` varchar(255) NOT NULL,
                \`affiliate_unit_file_extension\` varchar(255) NOT NULL,
                PRIMARY KEY (\`affiliate_unit_file_id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            CREATE TABLE \`bank_representative_branch\` (
                \`bankRepresentativeBankRepresentativeId\` varchar(255) NOT NULL,
                \`branchBranchId\` varchar(255) NOT NULL,
                INDEX \`IDX_8bf2b32edeb946473b5c88d10a\` (\`bankRepresentativeBankRepresentativeId\`),
                INDEX \`IDX_9eef66661ea193f964fa4c872d\` (\`branchBranchId\`),
                PRIMARY KEY (
                    \`bankRepresentativeBankRepresentativeId\`,
                    \`branchBranchId\`
                )
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            CREATE TABLE \`representative_affiliate_unit\` (
                \`representativeRepresentativeId\` varchar(255) NOT NULL,
                \`affiliateUnitAffiliateUnitId\` varchar(255) NOT NULL,
                INDEX \`IDX_201cd8a78e54b1f8334a6f6813\` (\`representativeRepresentativeId\`),
                INDEX \`IDX_b6ceb745b305427086cbf6ba4a\` (\`affiliateUnitAffiliateUnitId\`),
                PRIMARY KEY (
                    \`representativeRepresentativeId\`,
                    \`affiliateUnitAffiliateUnitId\`
                )
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`bank_representative\`
            ADD CONSTRAINT \`FK_2197a0b35f34e6a4e0641d6520b\` FOREIGN KEY (\`created_}user\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`branch\`
            ADD CONSTRAINT \`FK_2ee86747029c67d39d46f6eddb8\` FOREIGN KEY (\`created_user\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD CONSTRAINT \`FK_09210cab0384d041d5f3b337e8e\` FOREIGN KEY (\`branch_id\`) REFERENCES \`branch\`(\`branch_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\`
            ADD CONSTRAINT \`FK_bd7a3298b32fcc35fdfe62ad7f0\` FOREIGN KEY (\`affiliate_unit_id\`) REFERENCES \`affiliate_unit\`(\`affiliate_unit_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\`
            ADD CONSTRAINT \`FK_ca95d02095bc6f76f75c8eaf506\` FOREIGN KEY (\`created_user\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`affiliate_unit\`
            ADD CONSTRAINT \`FK_1c4a0ec91e2f25b257ea154b16d\` FOREIGN KEY (\`created_user\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`representative\`
            ADD CONSTRAINT \`FK_3dd5381c26784586c23b354a642\` FOREIGN KEY (\`created_user\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`gift\`
            ADD CONSTRAINT \`FK_20e3291e131290f852be8ac003b\` FOREIGN KEY (\`affiliate_unit_id\`) REFERENCES \`affiliate_unit\`(\`affiliate_unit_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`gift\`
            ADD CONSTRAINT \`FK_8881717c0700484e98e40b635ff\` FOREIGN KEY (\`giver_user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`gift\`
            ADD CONSTRAINT \`FK_b531fd607fa25503e34a0ce57fb\` FOREIGN KEY (\`created_user\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`bank_representative_branch\`
            ADD CONSTRAINT \`FK_8bf2b32edeb946473b5c88d10ac\` FOREIGN KEY (\`bankRepresentativeBankRepresentativeId\`) REFERENCES \`bank_representative\`(\`bank_representative_id\`) ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE \`bank_representative_branch\`
            ADD CONSTRAINT \`FK_9eef66661ea193f964fa4c872dc\` FOREIGN KEY (\`branchBranchId\`) REFERENCES \`branch\`(\`branch_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`representative_affiliate_unit\`
            ADD CONSTRAINT \`FK_201cd8a78e54b1f8334a6f6813c\` FOREIGN KEY (\`representativeRepresentativeId\`) REFERENCES \`representative\`(\`representative_id\`) ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE \`representative_affiliate_unit\`
            ADD CONSTRAINT \`FK_b6ceb745b305427086cbf6ba4a0\` FOREIGN KEY (\`affiliateUnitAffiliateUnitId\`) REFERENCES \`affiliate_unit\`(\`affiliate_unit_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`representative_affiliate_unit\` DROP FOREIGN KEY \`FK_b6ceb745b305427086cbf6ba4a0\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`representative_affiliate_unit\` DROP FOREIGN KEY \`FK_201cd8a78e54b1f8334a6f6813c\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`bank_representative_branch\` DROP FOREIGN KEY \`FK_9eef66661ea193f964fa4c872dc\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`bank_representative_branch\` DROP FOREIGN KEY \`FK_8bf2b32edeb946473b5c88d10ac\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`gift\` DROP FOREIGN KEY \`FK_b531fd607fa25503e34a0ce57fb\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`gift\` DROP FOREIGN KEY \`FK_8881717c0700484e98e40b635ff\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`gift\` DROP FOREIGN KEY \`FK_20e3291e131290f852be8ac003b\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`representative\` DROP FOREIGN KEY \`FK_3dd5381c26784586c23b354a642\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`affiliate_unit\` DROP FOREIGN KEY \`FK_1c4a0ec91e2f25b257ea154b16d\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\` DROP FOREIGN KEY \`FK_ca95d02095bc6f76f75c8eaf506\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\` DROP FOREIGN KEY \`FK_bd7a3298b32fcc35fdfe62ad7f0\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_09210cab0384d041d5f3b337e8e\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`branch\` DROP FOREIGN KEY \`FK_2ee86747029c67d39d46f6eddb8\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`bank_representative\` DROP FOREIGN KEY \`FK_2197a0b35f34e6a4e0641d6520b\`
        `);
    await queryRunner.query(`
            DROP INDEX \`IDX_b6ceb745b305427086cbf6ba4a\` ON \`representative_affiliate_unit\`
        `);
    await queryRunner.query(`
            DROP INDEX \`IDX_201cd8a78e54b1f8334a6f6813\` ON \`representative_affiliate_unit\`
        `);
    await queryRunner.query(`
            DROP TABLE \`representative_affiliate_unit\`
        `);
    await queryRunner.query(`
            DROP INDEX \`IDX_9eef66661ea193f964fa4c872d\` ON \`bank_representative_branch\`
        `);
    await queryRunner.query(`
            DROP INDEX \`IDX_8bf2b32edeb946473b5c88d10a\` ON \`bank_representative_branch\`
        `);
    await queryRunner.query(`
            DROP TABLE \`bank_representative_branch\`
        `);
    await queryRunner.query(`
            DROP TABLE \`affiliate_unit_file\`
        `);
    await queryRunner.query(`
            DROP TABLE \`gift\`
        `);
    await queryRunner.query(`
            DROP INDEX \`IDX_b277a9b3df18bc65824fed9f5d\` ON \`representative\`
        `);
    await queryRunner.query(`
            DROP TABLE \`representative\`
        `);
    await queryRunner.query(`
            DROP TABLE \`affiliate_unit\`
        `);
    await queryRunner.query(`
            DROP INDEX \`IDX_c3a72905b4e81d5a3969f37f48\` ON \`individual\`
        `);
    await queryRunner.query(`
            DROP TABLE \`individual\`
        `);
    await queryRunner.query(`
            DROP INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` ON \`user\`
        `);
    await queryRunner.query(`
            DROP TABLE \`user\`
        `);
    await queryRunner.query(`
            DROP TABLE \`branch\`
        `);
    await queryRunner.query(`
            DROP INDEX \`IDX_783989c306664053f1f008f1b1\` ON \`bank_representative\`
        `);
    await queryRunner.query(`
            DROP TABLE \`bank_representative\`
        `);
  }
}
