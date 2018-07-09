import {MigrationInterface, QueryRunner} from "typeorm";

export class GuestTypeMigration1531179341497 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TYPE "guest_guesttype_enum" AS ENUM('Day', 'Night')`);
        await queryRunner.query(`ALTER TABLE "guest" ADD "guestType" "guest_guesttype_enum" NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "guest" DROP COLUMN "guestType"`);
        await queryRunner.query(`DROP TYPE "guest_guesttype_enum"`);
    }

}
