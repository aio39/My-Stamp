-- CREATE TABLE stamps (
--   id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
--   title VARCHAR(200) NOT NULL,
--   path VARCHAR(200) NOT NULL,
--   content TEXT,
-- );

CREATE TABLE stamps_tags (
  stamp_id INTEGER NOT NULL,
  tag_id INTEGER NOT NULL
); 

CREATE TABLE tags (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(200) NOT NULL
);

-- fulltext index on content
CREATE VIRTUAL TABLE stamps USING fts4(title, content, path);
