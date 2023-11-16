CREATE DATABASE perndb;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    role VARCHAR(255),
    name VARCHAR(255),
    firstname VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE client(
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    lastname VARCHAR(255),
    number VARCHAR(255),
    address VARCHAR(255),
    compaddress VARCHAR(255),
    postalcode VARCHAR(255),
    country VARCHAR(255),
    city VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);