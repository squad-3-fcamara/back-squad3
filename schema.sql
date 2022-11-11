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

CREATE TABLE IF NOT EXISTS inscricoes(
	id SERIAL PRIMARY KEY,
  	id_trilha INTEGER NOT NULL,
  	id_usuario INTEGER NOT NULL,
  	FOREIGN KEY (id_trilha) REFERENCES trilhas (id),
  	FOREIGN KEY (id_usuario) REFERENCES usuarios (id)
);

CREATE TABLE IF NOT EXISTS modulos(
	id SERIAL PRIMARY KEY,
	id_trilha INTEGER NOT NULL,
	ordem INTEGER NOT NULL UNIQUE,
	nome TEXT NOT NULL,
	FOREIGN KEY (id_trilha) REFERENCES trilhas (id)
);

CREATE TABLE IF NOT EXISTS aulas(
	id SERIAL PRIMARY KEY,
	id_modulo INTEGER NOT NULL,
	ordem INTEGER NOT NULL,
	nome TEXT NOT NULL,
	FOREIGN KEY (id_modulo) REFERENCES modulos (id)
);

CREATE TABLE IF NOT EXISTS conteudos(
	id SERIAL PRIMARY KEY,
  	id_aula INTEGER NOT NULL,
	ordem INTEGER NOT NULL,
	nome TEXT,
  	tipo TEXT NOT NULL,
  	autor TEXT NOT NULL,
	descricao TEXT NOT NULL,
  	link TEXT NOT NULL,
  	FOREIGN KEY (id_aula) REFERENCES aulas (id)
);

INSERT INTO trilhas (nome) VALUES ('Desenvolvimento Full Stack');
INSERT INTO trilhas (nome) VALUES ('UX/UI Designer');
INSERT INTO trilhas (nome) VALUES ('Quality Assurance (QA)');

INSERT INTO modulos (id_trilha, ordem, nome) VALUES (2,1,'Introdução ao UX');
INSERT INTO modulos (id_trilha, ordem, nome) VALUES (2,2,'Descoberta');
INSERT INTO modulos (id_trilha, ordem, nome) VALUES (2,3,'Definição');
INSERT INTO modulos (id_trilha, ordem, nome) VALUES (2,4,'Desenvolvimento');
INSERT INTO modulos (id_trilha, ordem, nome) VALUES (2,5,'Ferramentas de UI');
INSERT INTO modulos (id_trilha, ordem, nome) VALUES (2,6,'Entregar');
INSERT INTO modulos (id_trilha, ordem, nome) VALUES (2,7,'Soft Skills');

INSERT INTO aulas (id_modulo, ordem, nome) VALUES (1, 1, 'O que é User Experience');
INSERT INTO aulas (id_modulo, ordem, nome) VALUES (1, 2, 'Duplo Diamante');
INSERT INTO aulas (id_modulo, ordem, nome) VALUES (1, 3, 'Os grandes UX');
INSERT INTO aulas (id_modulo, ordem, nome) VALUES (1, 4, 'Aprofundando User Experience');
INSERT INTO aulas (id_modulo, ordem, nome) VALUES (1, 5, 'Metodologias Ágeis');

INSERT INTO aulas (id_modulo, ordem, nome) VALUES (2, 1, 'O que é o processo de Discovery');
INSERT INTO aulas (id_modulo, ordem, nome) VALUES (2, 2, 'UX research');
INSERT INTO aulas (id_modulo, ordem, nome) VALUES (2, 3, 'Frameworks');
INSERT INTO aulas (id_modulo, ordem, nome) VALUES (2, 4, 'Descobrindo a Persona');
INSERT INTO aulas (id_modulo, ordem, nome) VALUES (2, 5, 'Mapa da Empatia');
INSERT INTO aulas (id_modulo, ordem, nome) VALUES (2, 6, 'Jornada do Usuário');

INSERT INTO aulas (id_modulo, ordem, nome) VALUES (3, 1, 'Definindo a solução');
INSERT INTO aulas (id_modulo, ordem, nome) VALUES (3, 2, 'Brainstorm');
INSERT INTO aulas (id_modulo, ordem, nome) VALUES (3, 3, 'Card Sorting');

INSERT INTO aulas (id_modulo, ordem, nome) VALUES (4, 1, 'Usabilidade e Prototipagem');
INSERT INTO aulas (id_modulo, ordem, nome) VALUES (4, 2, 'Wireframes');
INSERT INTO aulas (id_modulo, ordem, nome) VALUES (4, 3, 'UX Writing');
INSERT INTO aulas (id_modulo, ordem, nome) VALUES (4, 4, 'Design Interativo');
INSERT INTO aulas (id_modulo, ordem, nome) VALUES (4, 5, 'Leis e princípios de UX');

INSERT INTO aulas (id_modulo, ordem, nome) VALUES (5, 1, 'Arquitetura da informação');
INSERT INTO aulas (id_modulo, ordem, nome) VALUES (5, 2, 'Identidade visual');
INSERT INTO aulas (id_modulo, ordem, nome) VALUES (5, 3, 'Design emocional');
INSERT INTO aulas (id_modulo, ordem, nome) VALUES (5, 4, 'Layout e composição');
INSERT INTO aulas (id_modulo, ordem, nome) VALUES (5, 5, 'Cores, tipografia e imagens');

INSERT INTO aulas (id_modulo, ordem, nome) VALUES (6, 1, 'Biblioteca de componentes');
INSERT INTO aulas (id_modulo, ordem, nome) VALUES (6, 2, 'Design responsivo');
INSERT INTO aulas (id_modulo, ordem, nome) VALUES (6, 3, 'Grids');
INSERT INTO aulas (id_modulo, ordem, nome) VALUES (6, 4, 'Guia de estilo');
INSERT INTO aulas (id_modulo, ordem, nome) VALUES (6, 5, 'Protótipos e microinterações');

INSERT INTO aulas (id_modulo, ordem, nome) VALUES (7, 1, 'Construindo liderança e gestão');
INSERT INTO aulas (id_modulo, ordem, nome) VALUES (7, 2, 'Modelos mentais: fixo e expandido');
INSERT INTO aulas (id_modulo, ordem, nome) VALUES (7, 3, 'Inteligência emocional');
INSERT INTO aulas (id_modulo, ordem, nome) VALUES (7, 4, 'Gestão do tempo');
INSERT INTO aulas (id_modulo, ordem, nome) VALUES (7, 5, 'Protagonista da própria história');

INSERT INTO conteudos (id_aula, ordem, tipo, autor, descricao, link) VALUES (1,1, 'vídeo', 'OrangeJuice','Em algum lugar além do arco-íris, o UX Design foi criado para ajudar a entendermos o usuário e melhorar sua experiência, seja ela com um produto, marca ou sistema. Nosso time UX Rainbow, formado por Carla Mendanha, Melody Bruni, Diego Tavares, Karem Carvalho, Carlos Gizbert e Luis Henrique Souto, irão bater um papo para falar sobre a área de UX/UI Design e como trabalham dentro da FCamara.','https://www.youtube.com/watch?v=_RsYz_iKP4k');
INSERT INTO conteudos (id_aula, ordem, nome, tipo, autor, descricao, link) VALUES (1,2,'Mas o que é UX?','artigo','OrangeJuice', 'O UX é um termo relativamente jovem, usado pela primeira vez por Donald Norma em 1996 quando trabalhava na Apple. No Brasil, esse termo começa a ser usado só em 2010 e ganha muita força na pandemia do Corona vírus de 2020. Mas o que seria exatamente UX?', 'https://medium.com/orangejuicefc/mas-o-que-%C3%A9-ux-330edd9c6887');
INSERT INTO conteudos (id_aula, ordem, nome, tipo, autor, descricao, link) VALUES (1,3,'O que é UX e UI', 'artigo', 'Alura','UX e UI: conheça as semelhanças e diferenças entre ambos. Boa parte dos designers mais experientes ainda confunde esses dois conceitos. Entenda a diferença.','https://www.alura.com.br/artigos/ux-e-ui-conheca-as-semelhancas-e-diferencas-entre-ambos');
INSERT INTO conteudos (id_aula, ordem, nome, tipo, autor, descricao, link) VALUES (1,4, 'UX e usabilidade aplicados em Mobile e Web', 'apostila','Alura','Experiência do Usuário (UX) é um tema bastante subjetivo. É difícil de maneira objetiva e direta dizer como desenhar uma experiência do usuário, mas é possível aprendermos como desenhar um produto, serviço ou ambiente que proporcione uma experiência satisfatória para alguém que os use.','https://www.alura.com.br/apostila-ux-usabilidade-mobile-web/experiencia');
INSERT INTO conteudos (id_aula, ordem, nome, tipo, autor, descricao, link) VALUES (1,5,'Design Centrado no Usuário', 'livro', 'Travis Lowdermilk','“Design centrado no usuário apresenta uma visão única sobre a forma como pesquisas junto aos usuários são combinadas com os conceitos de design, focando na lógica fundamental e no conhecimento por trás do assunto.”','https://m.media-amazon.com/images/I/71X7N7z6axL.jpg');

INSERT INTO conteudos (id_aula, ordem, tipo, autor, descricao, link) VALUES (2,1, 'vídeo', 'OrangeJuice','O que de fato é Design Thinking? Qual seu propósito? Quais suas etaps? E por que devemos utilizar esse método em nossos projetos? Nossos consultores André Cabral, Bruna Souza, Melody Bruni, Michel Deunizio e Wesley Reimberg conversaram sobre isso e também com exemplo de cases para te incentivar!','https://www.youtube.com/watch?v=3s9pWGsU02k');
INSERT INTO conteudos (id_aula, ordem, nome, tipo, autor, descricao, link) VALUES (2,2,'Design Thinking, uma abordagem para a sua vida','artigo','OrangeJuice', 'Design Thinking é uma forma de olhar o mundo, um jeito crítico e criativo de solucionar problemas, uma abordagem multidisciplinar. O Design Thinking tem um roteiro muito flexível, e é preciso entender bem os seus conceitos antes de aplicá-los. ', 'https://medium.com/orangejuicefc/design-thinking-uma-abordagem-para-a-sua-vida-3b93ed78b606');
INSERT INTO conteudos (id_aula, ordem, nome, tipo, autor, descricao, link) VALUES (2,3,'Conhecendo Design Thinking na prática', 'artigo', 'OrangeJuice','Aborda Design Thinking com uma visão muito prática dentro de um Estudo de Caso real.','https://medium.com/orangejuicefc/vacinar-conhecendo-design-thinking-na-pr%C3%A1tica-87656e0f6e5e');
INSERT INTO conteudos (id_aula, ordem, nome, tipo, autor, descricao, link) VALUES (2,4, 'O Entenda, de fato, o que é o design thinking?', 'apostila','Alura','Existe uma prática chamada Design Thinking que, assim como diz o nome, nos faz "desenhar o pensamento", alinhando as condições reais de algum contexto, que ajudam a compreender melhor as ações e resultados esperados.','https://www.alura.com.br/apostila-ux-usabilidade-mobile-web/experiencia');
INSERT INTO conteudos (id_aula, ordem, nome, tipo, autor, descricao, link) VALUES (2,5,'Design Thinking - Uma Metodologia Poderosa Para Decretar o Fim Das Velhas Ideiast', 'livro', 'Tim Brown','“Tim Brown escreveu o livro definitivo sobre design thinking. A sagacidade e a experiência de Brown e as histórias que ele conta fazem deste livro uma prazerosa jornada. Esta obra-prima apresenta as emoções, a mentalidade e os métodos necessários para elaborar o design de tudo, de um produto a uma experiência ou estratégia, de modo inovador.”','https://m.media-amazon.com/images/I/51nfdjLJVgL._SY344_BO1,204,203,200_QL70_ML2_.jpg');
