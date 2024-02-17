-- Insertar usuarios
INSERT INTO users (username, password, email) VALUES
('usuario1', 'contraseña1', 'usuario1@example.com'),
('usuario2', 'contraseña2', 'usuario2@example.com'),
('usuario3', 'contraseña3', 'usuario3@example.com'),
('usuario4', 'contraseña4', 'usuario4@example.com'),
('usuario5', 'contraseña5', 'usuario5@example.com');

-- Insertar publicaciones
-- Publicaciones para usuario1
INSERT INTO posts (title, description, media, user_id) VALUES
('Título de la publicación 1 para usuario1', 'Descripción de la publicación 1 para usuario1','https://res.cloudinary.com/dnc3btlfa/image/upload/v1708161569/HackUDC/jmg8qrhhoqsdntilohdr.webp', 1),
('Título de la publicación 2 para usuario1', 'Descripción de la publicación 2 para usuario1','https://res.cloudinary.com/dnc3btlfa/image/upload/v1708161501/HackUDC/oevmwto4stkjez7d1fqp.png', 1);

-- Publicaciones para usuario2
INSERT INTO posts (title, description, media, user_id) VALUES
('Título de la publicación 1 para usuario2', 'Descripción de la publicación 1 para usuario2','https://beige-jeanelle-25.tiiny.site/', 2),
('Título de la publicación 2 para usuario2', 'Descripción de la publicación 2 para usuario2', 'https://res.cloudinary.com/dnc3btlfa/image/upload/v1708161685/HackUDC/kh7nkvjxdk97zugeottu.gif', 2),
('Poem', 'A short poem', 'Curtains forcing their will against the wind, children sleep, exchanging dreams with seraphim. The city drags itself awake on subway straps; and I, an alarm, awake as a rumor of war, lie stretching into dawn, unasked and unheeded.', 2);

-- Publicaciones para usuario3
INSERT INTO posts (title, description, media, user_id) VALUES
('Título de la publicación 1 para usuario3', 'Descripción de la publicación 1 para usuario3', 'https://res.cloudinary.com/dnc3btlfa/image/upload/v1708161570/HackUDC/p0mtbtggmzcabj32jo5g.webp', 3),
('Título de la publicación 2 para usuario3', 'Descripción de la publicación 2 para usuario3', 'https://res.cloudinary.com/dnc3btlfa/image/upload/f_auto,q_auto/v1/HackUDC/bxg0019qnfeft5zdtnjd', 3),
('O neno do entroido', 'O neno enxebre', 'https://res.cloudinary.com/dnc3btlfa/video/upload/v1708195665/HackUDC/wa1zkn9lbkhidlym48ze.mp4', 3);

-- Publicaciones para usuario4
INSERT INTO posts (title, description, media, user_id) VALUES
('Título de la publicación 1 para usuario4', 'Descripción de la publicación 1 para usuario4', 'https://res.cloudinary.com/dnc3btlfa/image/upload/f_auto,q_auto/v1/HackUDC/x18nt0rrvyzwb6rpl1hc',4),
('Título de la publicación 2 para usuario4', 'Descripción de la publicación 2 para usuario4', 'https://res.cloudinary.com/dnc3btlfa/image/upload/v1708161569/HackUDC/gdsoi2nkgneaxguu5c2e.webp', 4);

-- Publicaciones para usuario5
INSERT INTO posts (title, description, media, user_id) VALUES
('Título de la publicación 1 para usuario5', 'Descripción de la publicación 1 para usuario5', 'https://www.youtube.com/embed/LitHV3Q-rSI?si=84IG0j36Ymr6luWW', 5),
('Título de la publicación 2 para usuario5', 'Descripción de la publicación 2 para usuario5', 'https://res.cloudinary.com/dnc3btlfa/image/upload/v1708161569/HackUDC/qcmsrn5hekttdrqak8sv.webp', 5);
