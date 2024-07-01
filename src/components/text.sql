CREATE TABLE quantidade (
id serial not null,
dadoA real not null,
dadoC real not null,
resultado real not null
)

select * from quantidade

INSERT INTO quantidade ( dadoA , dadoC , resultado) VALUES ( 20 , 30 , 40);

DELETE FROM quantidade WHERE id = 1
DELETE FROM quantidade WHERE id = 2

truncate table quantidade