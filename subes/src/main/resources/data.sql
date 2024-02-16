-- Insertar usuarios
INSERT INTO users (username, password, email) VALUES
('usuario1', 'contraseña1', 'usuario1@example.com'),
('usuario2', 'contraseña2', 'usuario2@example.com'),
('usuario3', 'contraseña3', 'usuario3@example.com'),
('usuario4', 'contraseña4', 'usuario4@example.com'),
('usuario5', 'contraseña5', 'usuario5@example.com');

-- Insertar publicaciones
-- Publicaciones para usuario1
INSERT INTO posts (title, description, user_id) VALUES
('Título de la publicación 1 para usuario1', 'Descripción de la publicación 1 para usuario1', 1),
('Título de la publicación 2 para usuario1', 'Descripción de la publicación 2 para usuario1', 1);

-- Publicaciones para usuario2
INSERT INTO posts (title, description, user_id) VALUES
('Título de la publicación 1 para usuario2', 'Descripción de la publicación 1 para usuario2', 2),
('Título de la publicación 2 para usuario2', 'Descripción de la publicación 2 para usuario2', 2);

-- Publicaciones para usuario3
INSERT INTO posts (title, description, user_id) VALUES
('Título de la publicación 1 para usuario3', 'Descripción de la publicación 1 para usuario3', 3),
('Título de la publicación 2 para usuario3', 'Descripción de la publicación 2 para usuario3', 3);

-- Publicaciones para usuario4
INSERT INTO posts (title, description, user_id) VALUES
('Título de la publicación 1 para usuario4', 'Descripción de la publicación 1 para usuario4', 4),
('Título de la publicación 2 para usuario4', 'Descripción de la publicación 2 para usuario4', 4);

-- Publicaciones para usuario5
INSERT INTO posts (title, description, user_id) VALUES
('Título de la publicación 1 para usuario5', 'Descripción de la publicación 1 para usuario5', 5),
('Título de la publicación 2 para usuario5', 'Descripción de la publicación 2 para usuario5', 5);
