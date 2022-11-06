create database orange;

CREATE TABLE IF NOT EXISTS usuarios (
	id SERIAL PRIMARY KEY,
  	nome TEXT NOT NULL,
  	email TEXT NOT NULL UNIQUE,
  	senha TEXT NOT NULL,
  	isAdmin BOOLEAN DEFAULT false
);

CREATE TABLE IF NOT EXISTS trilhas(
	id SERIAL PRIMARY KEY,
  	nome TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS incricoes(
	id SERIAL PRIMARY KEY,
  	id_trilha INTEGER NOT NULL,
  	id_usuario INTEGER NOT NULL,
  	FOREIGN KEY (id_trilha) REFERENCES trilhas (id),
  	FOREIGN KEY (id_usuario) REFERENCES usuarios (id)
);

CREATE TYPE tipo AS ENUM ('video', 'artigo', 'curso', 'podcast'); 
CREATE TABLE IF NOT EXISTS conteudos(
	id SERIAL PRIMARY KEY,
  	id_trilha INTEGER NOT NULL,
  	modulo INTEGER NOT NULL,
  	tipo tipo,
  	autor TEXT NOT NULL,
  	link TEXT NOT NULL,
  	FOREIGN KEY (id_trilha) REFERENCES trilhas (id)
);