DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

DROP DATABASE IF EXISTS bars;
CREATE DATABASE bars;

CREATE TABLE happyHour (
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	address varchar(255) NOT NULL,
	phone varchar(255) NOT NULL,
	time varchar(255) NOT NULL,
	deal varchar(255) NOT NULL,
	image varchar(255) NOT NULL,
	website varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE cheapDrinks (
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	address varchar(255) NOT NULL,
	phone varchar(255) NOT NULL,
	image varchar(255) NOT NULL,
	website varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE uniqueDrinks (
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	address varchar(255) NOT NULL,
	phone varchar(255) NOT NULL,
	image varchar(255) NOT NULL,
	website varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

