# Tables du projet oKanban

## list

colonne | type | contraintes
-------|--------|-------
id | int | PK
name | text | NN
position | int | NN DF 0

## card

colonne | type | contraintes
-------|--------|-------
id | int | PK
content | text | NN
color | text | NN DF #fff
list_id | int | NN FK
position | int | NN DF 0

## tag

colonne | type | contraintes
-------|--------|-------
id | int | PK
name | text | NN
color | text | NN DF #fff

## card_has_tag

colonne | type | contraintes
-------|--------|-------
id | int | PK
card_id | int | NN FK
tag_id | int | NN FK