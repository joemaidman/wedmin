import {MigrationInterface, QueryRunner} from "typeorm";

export class GuestAndPartyMigration1531177956174 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "party" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_e6189b3d533e140bb33a6d2cec1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "guest" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "emailAddress" character varying, "songChoice" character varying, "attending" boolean, "isChild" boolean, "partyId" integer, CONSTRAINT "PK_57689d19445de01737dbc458857" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "guest" ADD CONSTRAINT "FK_cd9cf995ab2cfd4f3817c5ec57a" FOREIGN KEY ("partyId") REFERENCES "party"("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "guest" DROP CONSTRAINT "FK_cd9cf995ab2cfd4f3817c5ec57a"`);
        await queryRunner.query(`DROP TABLE "guest"`);
        await queryRunner.query(`DROP TABLE "party"`);
    }

}
