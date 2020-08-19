BEGIN;

INSERT INTO "motive"
    ("description")
VALUES
    ('toto tata'),
    ('Tonya se plaint trop alors qu’elle a une vie parfaite, que tout le monde l’aime. alors que Lily, même ses parents n’en n’ont rien à faire d’elle. Lily avoue vouloir prendre sa place. Tonya dit à lily qu’elle est folle, qu’elle ne s’approche plus d’elle. Lily c est énerve, et la attraper. Tonya c est débatue et est parvenue à se libérer de l étreinte de lily et a commencer à s’éloigner rapidement. Lily a sortie un couteau de son sac et a courue après tonya pour lui enfonce dans le dos au niveau des poumons.');

INSERT INTO "weapon"
    ("name")
VALUES
    ('Couteau');

INSERT INTO "character"
    ("name", "picture", "is_guilty", "is_suspect" "alibi", "motive_id", "weapon_id")
VALUES
    ('Dorian', 'photo', false, false,'Pas d’alibi, il était retourné dans sa chambre au moment du meurtre.', 1, 1);
--     ('Tonya', 'photo', 'Mort.'),
--     ('Yann', 'photo', 'Entrain de boir un verre de St Emilion 1900 avec Baptiste dans le salon.
-- On apprend après, qu’il cherchait le tire-bouchon dans la cuisine puis son bureau.
-- '),
--     ('Baptiste', 'photo', 'Buvait un verre de vin avec Yann dans le salon, mais yann est parti pendant un certain temps pour chercher un tire-bouchon.'),
--     ('Claire', 'photo', 'Claire accompagnait valentine dans la salle-de-bain du haut comme elle l’a voyait malade, elle est parti 10mn chercher des médicaments dans la chambre.'),
--     ('Valentine', 'photo', 'Etait en train de vomir dans la salle de bain du haut.
-- Plus tard, on apprend qu’elle avait trop bu pour noyer sa tristesse
-- claire s’est absentée quelque temps.
-- '),
--     ('Lily', 'photo', 'Est sensée être dans la maison voisine avec son frère.'),
--     ('Maxime', 'photo', 'Dans la maison voisine avec sa soeur.');

INSERT INTO "place"
    ("name", "picture")
VALUES
    ('Cuisine', 'photo'),
    ('Salon', 'photo'),
    ('Chambre de Dorian', 'photo'),
    ('Chambre de Claire et Julien', 'photo'),
    ('Chambre de Tonya et Yann', 'photo'),
    ('Sale de bain de Tonya et Yann', 'photo'),
    ('Plage', 'photo'),
    ('Photo Accueil', 'photo');

INSERT INTO "chapter"
    ("name")
VALUES
    ('Chapitre 1'),
    ('Chapitre 2'),
    ('Chapitre 3'),
    ('Chapitre 4'),
    ('Chapitre 5'),
    ('Chapitre 6'),
    ('Chapitre 7');

INSERT INTO "question"
    ("description", "response")
VALUES
    ('description 1', 'reponse 1'),
    ('description 2', 'reponse 2'),
    ('description 3', 'reponse 3'),
    ('description 4', 'reponse 4');

INSERT INTO "storytelling"
    ("sentence", "chapter_id")
VALUES
    ('histoire', 1);

-- On enregistre les transactions en BDD si est seulement si tout c'est bien passé.
-- Cette instruction signe la fin du fichier.

COMMIT;