    -- On démarre une transaction afin de s'assurer de la cohérence globale de la BDD

BEGIN;

    -- Nous supprimerons ensuite les tables 'si elles existent’, pour pouvoir à chaque fois retravailler sur une base saine.

    DROP TABLE IF EXISTS 
"user",
"chapter",
"storytelling",
"answer",
"question",
"place",
"character",
"motive",
"weapon";

    -- Ensuite on la (re)crée
    CREATE TABLE IF NOT EXISTS "user" (
        "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        "pseudo" TEXT NOT NULL DEFAULT '',
        "mail" TEXT NOT NULL DEFAULT '',
        "pwd" TEXT NOT NULL DEFAULT ''
    );


    CREATE TABLE IF NOT EXISTS "place" (
        "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        "name" TEXT NOT NULL DEFAULT '',
        "picture" TEXT NOT NULL DEFAULT ''
    );

    CREATE TABLE IF NOT EXISTS "motive" (
        "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        "description" TEXT NOT NULL DEFAULT ''
    );

    CREATE TABLE IF NOT EXISTS "weapon" (
        "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        "name" TEXT NOT NULL DEFAULT ''
    );

    CREATE TABLE IF NOT EXISTS "character" (
        "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        "name" TEXT NOT NULL DEFAULT '',
        "picture" TEXT NOT NULL DEFAULT '',
        "is_guilty" BOOLEAN NOT NULL DEFAULT '',
        "is_suspect" BOOLEAN NOT NULL DEFAULT '',
        "alibi" TEXT NOT NULL DEFAULT '',
        "motive_id" INTEGER NOT NULL REFERENCES motive("id") ON DELETE CASCADE,
        "weapon_id" INTEGER NOT NULL REFERENCES weapon("id") ON DELETE CASCADE
    );


    CREATE TABLE IF NOT EXISTS "chapter" (
        "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        "name" TEXT NOT NULL DEFAULT ''
    );

    CREATE TABLE IF NOT EXISTS "answer" (
        "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        "description" TEXT NOT NULL DEFAULT ''
    );

    CREATE TABLE IF NOT EXISTS "question" (
        "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        "description" TEXT NOT NULL DEFAULT '',
        "answer_id" INTEGER NOT NULL REFERENCES answer("id") ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS "chapter_place_character_question" (
        "chapter_id" INTEGER NOT NULL REFERENCES chapter("id") ON DELETE CASCADE,
        "place_id" INTEGER NOT NULL REFERENCES place("id") ON DELETE CASCADE,
        "character_id" INTEGER NOT NULL REFERENCES character("id") ON DELETE CASCADE,
        "question_id" INTEGER NOT NULL REFERENCES question("id") ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS "storytelling" (
        "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        "sentence" TEXT NOT NULL DEFAULT '',
        "chapter_id" INTEGER NOT NULL REFERENCES chapter("id") ON DELETE CASCADE
    );

COMMIT;

