CREATE TABLE shopping (
  ID SERIAL PRIMARY KEY,
  item VARCHAR (255) NOT NULL,
  done BOOLEAN DEFAULT FALSE,
  uid VARCHAR (255) NOT NULL
);

CREATE TABLE postit (
  ID SERIAL PRIMARY KEY,
  content VARCHAR (255) NOT NULL,
  dt DATE NOT NULL DEFAULT CURRENT_DATE,
  uid VARCHAR (255) NOT NULL
);

INSERT INTO shopping (item, done, uid)
  VALUES ('exampleItem', TRUE, 'exampleID');

INSERT INTO postit(content, uid)
  VALUES ('examplePostit', 'exampleID');
