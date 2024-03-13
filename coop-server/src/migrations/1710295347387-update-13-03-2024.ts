import { MigrationInterface, QueryRunner } from 'typeorm';

export class Update130320241710295347387 implements MigrationInterface {
  name = 'Update130320241710295347387';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`bank_representative\` DROP FOREIGN KEY \`FK_2197a0b35f34e6a4e0641d6520b\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_f882f8b977f7ca03ead0aa8d73a\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`transaction_room\` DROP FOREIGN KEY \`FK_231ee7a8a27a29a2b9de808745b\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`transaction_room\` DROP FOREIGN KEY \`FK_ee951ae9e4372ae15887a77dedf\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`bank_representative_transaction_room\` DROP FOREIGN KEY \`FK_827d53e4a8bae98034567e9ed03\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\` CHANGE \`transaction_room_di\` \`transaction_room_id\` varchar(255) NULL
        `);
    await queryRunner.query(`
            CREATE TABLE \`individual_file\` (
                \`individual_file_id\` int NOT NULL AUTO_INCREMENT,
                \`individual_file_url\` varchar(255) NOT NULL,
                \`individual_file_name\` varchar(255) NOT NULL,
                \`individual_file_extension\` varchar(255) NOT NULL,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`individual_id\` varchar(255) NULL,
                PRIMARY KEY (\`individual_file_id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            CREATE TABLE \`contract\` (
                \`contract_id\` varchar(255) NOT NULL,
                \`contract_number\` varchar(255) NOT NULL,
                \`is_qualified\` int NOT NULL,
                \`loan_purpose\` varchar(255) NOT NULL,
                \`loan_bank_number\` varchar(255) NOT NULL,
                \`total_money\` int NOT NULL,
                \`loan_money\` int NOT NULL,
                \`total_income\` int NOT NULL,
                \`interest_rate\` int NOT NULL,
                \`month_count\` int NOT NULL,
                \`period_count\` int NOT NULL,
                \`declared_total_income\` int NOT NULL,
                \`estimated_total_income\` int NOT NULL,
                \`paid_date\` int NOT NULL,
                \`individual_bank_number\` varchar(255) NOT NULL,
                \`individual_cic\` varchar(255) NOT NULL,
                \`individual_cic_rank\` varchar(255) NOT NULL,
                \`individual_cic_score\` int NOT NULL,
                \`contract_date\` datetime NULL,
                \`start_date\` datetime NULL,
                \`end_date\` datetime NULL,
                \`first_pay_date\` datetime NULL,
                \`deleted_at\` timestamp(6) NULL,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`created_user\` int NULL,
                \`individual_id\` varchar(255) NULL,
                PRIMARY KEY (\`contract_id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\` DROP COLUMN \`salary_file\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\` DROP COLUMN \`marriage_file\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\` DROP COLUMN \`appoint_file\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`bank_representative\`
            ADD \`authoritative_number\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`bank_representative\`
            ADD \`authoritative_date\` datetime NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\`
            ADD \`individual_code\` varchar(255) NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\`
            ADD \`individual_bank_number\` varchar(255) NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\`
            ADD \`individual_cic\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\`
            ADD \`individual_cic_rank\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\`
            ADD \`individual_cic_score\` int NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\`
            ADD \`total_income\` int NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\`
            ADD \`individual_position\` varchar(255) NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\`
            ADD \`heir_full_name\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\`
            ADD \`heir_id_number\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\`
            ADD \`heir_birth_date\` datetime NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\`
            ADD \`heir_address\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\`
            ADD \`heir_phone\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`affiliate_unit_file\`
            ADD \`affiliate_unit_file_url\` varchar(255) NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`affiliate_unit_file\`
            ADD \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
        `);
    await queryRunner.query(`
            ALTER TABLE \`affiliate_unit_file\`
            ADD \`affiliate_unit_id\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`affiliate_unit\`
            ADD \`affiliate_unit_email\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`affiliate_unit\`
            ADD \`affiliate_unit_image_3\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`affiliate_unit\`
            ADD \`affiliate_unit_image_4\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`transaction_room_id\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`transaction_room_id\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\` DROP COLUMN \`export_data\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\`
            ADD \`export_data\` varchar(2000) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`affiliate_unit\` DROP COLUMN \`affiliate_unit_level\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`affiliate_unit\`
            ADD \`affiliate_unit_level\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`representative\` DROP COLUMN \`representative_position\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`representative\`
            ADD \`representative_position\` varchar(255) NOT NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`bank_representative\`
            ADD CONSTRAINT \`FK_c27cc7b19d83ea39847024892f3\` FOREIGN KEY (\`created_user\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD CONSTRAINT \`FK_90594dd2aa77ca48c910279d1b9\` FOREIGN KEY (\`transaction_room_id\`) REFERENCES \`transaction_room\`(\`transaction_room_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`transaction_room\`
            ADD CONSTRAINT \`FK_ee951ae9e4372ae15887a77dedf\` FOREIGN KEY (\`created_user\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`transaction_room\`
            ADD CONSTRAINT \`FK_231ee7a8a27a29a2b9de808745b\` FOREIGN KEY (\`branch_id\`) REFERENCES \`branch\`(\`branch_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual_file\`
            ADD CONSTRAINT \`FK_019e6abc9b97713c386bb00e196\` FOREIGN KEY (\`individual_id\`) REFERENCES \`individual\`(\`individual_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`contract\`
            ADD CONSTRAINT \`FK_7f593e04628c5b45836ada7ebeb\` FOREIGN KEY (\`created_user\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`contract\`
            ADD CONSTRAINT \`FK_91b022b1c06c7a9bee3d73c5cc7\` FOREIGN KEY (\`individual_id\`) REFERENCES \`individual\`(\`individual_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`affiliate_unit_file\`
            ADD CONSTRAINT \`FK_2c0c934a11fd3b9f7d6eea1fab3\` FOREIGN KEY (\`affiliate_unit_id\`) REFERENCES \`affiliate_unit\`(\`affiliate_unit_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`bank_representative_transaction_room\`
            ADD CONSTRAINT \`FK_827d53e4a8bae98034567e9ed03\` FOREIGN KEY (\`transactionRoomTransactionRoomId\`) REFERENCES \`transaction_room\`(\`transaction_room_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`bank_representative_transaction_room\` DROP FOREIGN KEY \`FK_827d53e4a8bae98034567e9ed03\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`affiliate_unit_file\` DROP FOREIGN KEY \`FK_2c0c934a11fd3b9f7d6eea1fab3\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`contract\` DROP FOREIGN KEY \`FK_91b022b1c06c7a9bee3d73c5cc7\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`contract\` DROP FOREIGN KEY \`FK_7f593e04628c5b45836ada7ebeb\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual_file\` DROP FOREIGN KEY \`FK_019e6abc9b97713c386bb00e196\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`transaction_room\` DROP FOREIGN KEY \`FK_231ee7a8a27a29a2b9de808745b\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`transaction_room\` DROP FOREIGN KEY \`FK_ee951ae9e4372ae15887a77dedf\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_90594dd2aa77ca48c910279d1b9\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`bank_representative\` DROP FOREIGN KEY \`FK_c27cc7b19d83ea39847024892f3\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`representative\` DROP COLUMN \`representative_position\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`representative\`
            ADD \`representative_position\` int NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`affiliate_unit\` DROP COLUMN \`affiliate_unit_level\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`affiliate_unit\`
            ADD \`affiliate_unit_level\` int NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\` DROP COLUMN \`export_data\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\`
            ADD \`export_data\` varchar(1000) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`transaction_room_id\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`transaction_room_id\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`affiliate_unit\` DROP COLUMN \`affiliate_unit_image_4\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`affiliate_unit\` DROP COLUMN \`affiliate_unit_image_3\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`affiliate_unit\` DROP COLUMN \`affiliate_unit_email\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`affiliate_unit_file\` DROP COLUMN \`affiliate_unit_id\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`affiliate_unit_file\` DROP COLUMN \`created_at\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`affiliate_unit_file\` DROP COLUMN \`affiliate_unit_file_url\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\` DROP COLUMN \`heir_phone\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\` DROP COLUMN \`heir_address\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\` DROP COLUMN \`heir_birth_date\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\` DROP COLUMN \`heir_id_number\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\` DROP COLUMN \`heir_full_name\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\` DROP COLUMN \`individual_position\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\` DROP COLUMN \`total_income\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\` DROP COLUMN \`individual_cic_score\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\` DROP COLUMN \`individual_cic_rank\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\` DROP COLUMN \`individual_cic\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\` DROP COLUMN \`individual_bank_number\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\` DROP COLUMN \`individual_code\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`bank_representative\` DROP COLUMN \`authoritative_date\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`bank_representative\` DROP COLUMN \`authoritative_number\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\`
            ADD \`appoint_file\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\`
            ADD \`marriage_file\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`individual\`
            ADD \`salary_file\` varchar(255) NULL
        `);
    await queryRunner.query(`
            DROP TABLE \`contract\`
        `);
    await queryRunner.query(`
            DROP TABLE \`individual_file\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\` CHANGE \`transaction_room_id\` \`transaction_room_di\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`bank_representative_transaction_room\`
            ADD CONSTRAINT \`FK_827d53e4a8bae98034567e9ed03\` FOREIGN KEY (\`transactionRoomTransactionRoomId\`) REFERENCES \`transaction_room\`(\`transaction_room_id\`) ON DELETE RESTRICT ON UPDATE RESTRICT
        `);
    await queryRunner.query(`
            ALTER TABLE \`transaction_room\`
            ADD CONSTRAINT \`FK_ee951ae9e4372ae15887a77dedf\` FOREIGN KEY (\`created_user\`) REFERENCES \`user\`(\`user_id\`) ON DELETE RESTRICT ON UPDATE RESTRICT
        `);
    await queryRunner.query(`
            ALTER TABLE \`transaction_room\`
            ADD CONSTRAINT \`FK_231ee7a8a27a29a2b9de808745b\` FOREIGN KEY (\`branch_id\`) REFERENCES \`branch\`(\`branch_id\`) ON DELETE RESTRICT ON UPDATE RESTRICT
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD CONSTRAINT \`FK_f882f8b977f7ca03ead0aa8d73a\` FOREIGN KEY (\`transaction_room_di\`) REFERENCES \`transaction_room\`(\`transaction_room_id\`) ON DELETE RESTRICT ON UPDATE RESTRICT
        `);
    await queryRunner.query(`
            ALTER TABLE \`bank_representative\`
            ADD CONSTRAINT \`FK_2197a0b35f34e6a4e0641d6520b\` FOREIGN KEY (\`created_user\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }
}
