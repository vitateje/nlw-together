import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateCompliments1624721063692 implements MigrationInterface {
    name = 'CreateCompliments1624721063692'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_compliments" ("id" uuid PRIMARY KEY NOT NULL, "user_sender" uuid NOT NULL, "user_receiver" uuid NOT NULL, "tag_id" uuid NOT NULL, "message" varchar NOT NULL, "created_at" timestamp NOT NULL DEFAULT (now()))`);
        await queryRunner.query(`INSERT INTO "temporary_compliments"("id", "user_sender", "user_receiver", "tag_id", "message", "created_at") SELECT "id", "user_sender", "user_receiver", "tag_id", "message", "created_at" FROM "compliments"`);
        await queryRunner.query(`DROP TABLE "compliments"`);
        await queryRunner.query(`ALTER TABLE "temporary_compliments" RENAME TO "compliments"`);
        await queryRunner.query(`CREATE TABLE "temporary_tags" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`INSERT INTO "temporary_tags"("id", "name", "created_at", "updated_at") SELECT "id", "name", "created_at", "updated_at" FROM "tags"`);
        await queryRunner.query(`DROP TABLE "tags"`);
        await queryRunner.query(`ALTER TABLE "temporary_tags" RENAME TO "tags"`);
        await queryRunner.query(`CREATE TABLE "temporary_users" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "admin" boolean NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "password" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_users"("id", "name", "email", "admin", "created_at", "updated_at", "password") SELECT "id", "name", "email", "admin", "created_at", "updated_at", "password" FROM "users"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`ALTER TABLE "temporary_users" RENAME TO "users"`);
        await queryRunner.query(`CREATE TABLE "temporary_compliments" ("id" varchar PRIMARY KEY NOT NULL, "user_sender" varchar NOT NULL, "user_receiver" varchar NOT NULL, "tag_id" varchar NOT NULL, "message" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`INSERT INTO "temporary_compliments"("id", "user_sender", "user_receiver", "tag_id", "message", "created_at") SELECT "id", "user_sender", "user_receiver", "tag_id", "message", "created_at" FROM "compliments"`);
        await queryRunner.query(`DROP TABLE "compliments"`);
        await queryRunner.query(`ALTER TABLE "temporary_compliments" RENAME TO "compliments"`);
        await queryRunner.query(`CREATE TABLE "temporary_compliments" ("id" varchar PRIMARY KEY NOT NULL, "user_sender" varchar NOT NULL, "user_receiver" varchar NOT NULL, "tag_id" varchar NOT NULL, "message" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT "FK_cd4e6c54f85a02905a11897e91e" FOREIGN KEY ("user_sender") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_47922731571b285347daed32941" FOREIGN KEY ("user_receiver") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_3e32d250792f1db0b4dde4bc90a" FOREIGN KEY ("tag_id") REFERENCES "tags" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_compliments"("id", "user_sender", "user_receiver", "tag_id", "message", "created_at") SELECT "id", "user_sender", "user_receiver", "tag_id", "message", "created_at" FROM "compliments"`);
        await queryRunner.query(`DROP TABLE "compliments"`);
        await queryRunner.query(`ALTER TABLE "temporary_compliments" RENAME TO "compliments"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "compliments" RENAME TO "temporary_compliments"`);
        await queryRunner.query(`CREATE TABLE "compliments" ("id" varchar PRIMARY KEY NOT NULL, "user_sender" varchar NOT NULL, "user_receiver" varchar NOT NULL, "tag_id" varchar NOT NULL, "message" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`INSERT INTO "compliments"("id", "user_sender", "user_receiver", "tag_id", "message", "created_at") SELECT "id", "user_sender", "user_receiver", "tag_id", "message", "created_at" FROM "temporary_compliments"`);
        await queryRunner.query(`DROP TABLE "temporary_compliments"`);
        await queryRunner.query(`ALTER TABLE "compliments" RENAME TO "temporary_compliments"`);
        await queryRunner.query(`CREATE TABLE "compliments" ("id" uuid PRIMARY KEY NOT NULL, "user_sender" uuid NOT NULL, "user_receiver" uuid NOT NULL, "tag_id" uuid NOT NULL, "message" varchar NOT NULL, "created_at" timestamp NOT NULL DEFAULT (now()))`);
        await queryRunner.query(`INSERT INTO "compliments"("id", "user_sender", "user_receiver", "tag_id", "message", "created_at") SELECT "id", "user_sender", "user_receiver", "tag_id", "message", "created_at" FROM "temporary_compliments"`);
        await queryRunner.query(`DROP TABLE "temporary_compliments"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME TO "temporary_users"`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "admin" boolean NOT NULL DEFAULT (false), "created_at" timestamp NOT NULL DEFAULT (now()), "updated_at" timestamp NOT NULL DEFAULT (now()), "password" varchar)`);
        await queryRunner.query(`INSERT INTO "users"("id", "name", "email", "admin", "created_at", "updated_at", "password") SELECT "id", "name", "email", "admin", "created_at", "updated_at", "password" FROM "temporary_users"`);
        await queryRunner.query(`DROP TABLE "temporary_users"`);
        await queryRunner.query(`ALTER TABLE "tags" RENAME TO "temporary_tags"`);
        await queryRunner.query(`CREATE TABLE "tags" ("id" uuid PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "created_at" timestamp NOT NULL DEFAULT (now()), "updated_at" timestamp NOT NULL DEFAULT (now()))`);
        await queryRunner.query(`INSERT INTO "tags"("id", "name", "created_at", "updated_at") SELECT "id", "name", "created_at", "updated_at" FROM "temporary_tags"`);
        await queryRunner.query(`DROP TABLE "temporary_tags"`);
        await queryRunner.query(`ALTER TABLE "compliments" RENAME TO "temporary_compliments"`);
        await queryRunner.query(`CREATE TABLE "compliments" ("id" uuid PRIMARY KEY NOT NULL, "user_sender" uuid NOT NULL, "user_receiver" uuid NOT NULL, "tag_id" uuid NOT NULL, "message" varchar NOT NULL, "created_at" timestamp NOT NULL DEFAULT (now()), CONSTRAINT "FK_3e32d250792f1db0b4dde4bc90a" FOREIGN KEY ("tag_id") REFERENCES "tag" ("id") ON DELETE SET NULL ON UPDATE SET NULL, CONSTRAINT "FK_47922731571b285347daed32941" FOREIGN KEY ("user_receiver") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE SET NULL, CONSTRAINT "FK_cd4e6c54f85a02905a11897e91e" FOREIGN KEY ("user_sender") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE SET NULL)`);
        await queryRunner.query(`INSERT INTO "compliments"("id", "user_sender", "user_receiver", "tag_id", "message", "created_at") SELECT "id", "user_sender", "user_receiver", "tag_id", "message", "created_at" FROM "temporary_compliments"`);
        await queryRunner.query(`DROP TABLE "temporary_compliments"`);
    }

}
