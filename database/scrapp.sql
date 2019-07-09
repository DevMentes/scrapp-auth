CREATE TABLE "users" (
	"id" varchar(36) NOT NULL,
	"email" varchar(30) NOT NULL UNIQUE,
	"password" varchar(200) NOT NULL,
	"created_at" TIMESTAMP NOT NULL,
	"updated_at" TIMESTAMP NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "projects" (
	"id" varchar(36) NOT NULL,
	"title" varchar(30) NOT NULL,
	"created_at" TIMESTAMP NOT NULL,
	"updated_at" TIMESTAMP NOT NULL,
	"user_id" varchar(36) NOT NULL,
	CONSTRAINT projects_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "projects" ADD CONSTRAINT "projects_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");

