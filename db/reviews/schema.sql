CREATE DATABASE IF NOT EXISTS ratings_reviews;
use ratings_reviews;

CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT,
  rating INT NULL,
  summary VARCHAR NULL,
  recommend TINYINT NULL,
  body VARCHAR NULL,
  date CHAR NULL,
  reviewer_name CHAR NULL,
  helpfulness INT,
  product_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY(product_id) REFERENCES products(id)
);

DROP TABLE IF EXISTS characteristics;

CREATE TABLE characteristics (
  id INT NOT NULL AUTO_INCREMENT,
  size INT NOT NULL,
  width INT NULL,
  comfort INT NULL,
  product_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY(product_id) REFERENCES products(id)
);

DROP TABLE IF EXISTS photos;

CREATE TABLE photo (
  id INT NOT NULL AUTO_INCREMENT,
  location VARCHAR NULL,
  reviews_id INT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(product_id) REFERENCES products(id)
)