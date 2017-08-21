CREATE TABLE shopping (
  ID SERIAL PRIMARY KEY,
  item VARCHAR (255) NOT NULL,
  done BOOLEAN DEFAULT FALSE,
  uid VARCHAR (255) NOT NULL
);

CREATE TABLE postit (
  ID SERIAL PRIMARY KEY,
  content VARCHAR (255) NOT NULL,
  uid VARCHAR (255) NOT NULL
);

CREATE TABLE photos (
  ID SERIAL PRIMARY KEY,
  url VARCHAR (255) NOT NULL,
  title VARCHAR (255),
  uid VARCHAR (255) NOT NULL
);

INSERT INTO shopping (item, done, uid)
  VALUES ('exampleItem', TRUE, 'exampleID');

INSERT INTO postit(content, uid)
  VALUES ('examplePostit', 'exampleID');

INSERT INTO photos(url, title, uid)
  VALUES ('http://lorempicsum.com/futurama/800/600/1', 'Test image', 'exampleID');
