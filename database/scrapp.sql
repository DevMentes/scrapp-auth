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