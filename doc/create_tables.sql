/* Première table : List */

-- On démarre une transaction afin de s'assurer de la cohérence gloabale de la BDD
BEGIN;

-- D'abord on supprime les table 'si elle existe"
DROP TABLE IF EXISTS "", "", "";

-- Ensuite on la (re)crée

CREATE TABLE "" (
  -- on utilise le nouveau type qui est un standart SQL alors que SERIAL est un pseudo-type de PG
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL DEFAULT '',
  
);


/* 2ème table : Card */

CREATE TABLE "card" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "content" TEXT NOT NULL DEFAULT '',
  -- si l'on veut pouvoir supprimer une liste qui contient des cartes, on est obligé de rajouter "ON DELETE CASCADE" qui aura pour conséquence de supprimer toutes les cartes qui font référence à la liste
  -- par défaut, la liste ne pourra être supprimée que si elle ne contient plus aucune carte
  "_id" INTEGER NOT NULL REFERENCES quelquechose("id") ON DELETE CASCADE,
);



/* On oublie pas la table de liaison s'il y a ! */

CREATE TABLE "_has_" (
  -- si l'on veut pouvoir supprimer une carte ou un tag, on est obligé de rajouter "ON DELETE CASCADE" qui aura pour conséquence de supprimer les associations qui font référence a la carte ou le tag supprimé.
  "_id" INTEGER NOT NULL REFERENCES quelquechose("id") ON DELETE CASCADE,
  "t_id" INTEGER NOT NULL REFERENCES autrechose("id") ON DELETE CASCADE,
 
  -- ici pas d'updated_at car une relation ne se met pas à jour, soit on l'ajoute soit on la supprime
);

/* une fois les tables crées, on va les remplir */

INSERT INTO "" ("name")
VALUES ('');

INSERT INTO "" ("", "", "_id")
VALUES ('', '', ),
       ('', '', );



-- et on oublie pas la table de liaison !
INSERT INTO "_has_" ("_id", "_id")
VALUES (number, number);

COMMIT;