    --On démarre une transaction afin de s'assurer de la cohérence globale de la BDD
BEGIN;

    -- Nous supprimerons ensuite les tables 'si elles existent’, pour pouvoir à chaque fois retravailler sur une base saine.
    DROP TABLE IF EXISTS 
"chapter",
"storytelling",
"question",
"place",
"caracter",
"motive",
"weapon";

    -- Ensuite on la (re)crée

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
        "alibis" TEXT NOT NULL DEFAULT '',
        "motive_id" INTEGER NOT NULL REFERENCES motive("id") ON DELETE CASCADE,
        "weapon_id" INTEGER NOT NULL REFERENCES weapon("id") ON DELETE CASCADE
    );


    CREATE TABLE IF NOT EXISTS "chapter" (
        "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        "name" TEXT NOT NULL DEFAULT ''
        --ici pas besoin de clé étrangère puisque les info souhaité sont représentées dans la table d'association -> many to many
        -- "place_character_question_id" INTEGER NOT NULL REFERENCES place_character_question("id") ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS "question" (
        "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        "description" TEXT NOT NULL DEFAULT '',
        "response" TEXT NOT NULL DEFAULT '',
        -- idem ici les liens sont déjà représentés dans la table d'assoc
        --"chapter_id" INTEGER NOT NULL REFERENCES chapter("id") ON DELETE CASCADE
        -- "character_id" INTEGER NOT NULL REFERENCES character("id") ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS "place_character_question" (
        "place_id" INTEGER NOT NULL REFERENCES place("id") ON DELETE CASCADE,
        "character_id" INTEGER NOT NULL REFERENCES character("id") ON DELETE CASCADE,
        "question_id" INTEGER NOT NULL REFERENCES question("id") ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS "storytelling" (
        "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        "sentence" TEXT NOT NULL DEFAULT '',
        "chapter_id" INTEGER NOT NULL REFERENCES chapter("id") ON DELETE CASCADE
    );

-- Maintenant on peut créer la référence vers la table question pour le champ "question_id" dans la table "answer" afin de réprésenter notre clé étrangère.
-- On remarquera ici la présence de l'instruction FOREIGN KEY qui dit explicitement que cette colonne sert de clé étrangère faisaint référence à la colonne question de la table question
-- Lors de la création d'une table ce détail est implicite
-- ALTER TABLE "answer"
--  ADD FOREIGN KEY ("question_id") REFERENCES "question" ("id");

-- Pour mettre fin à au bloc de transaction et l'exécuter
COMMIT;

