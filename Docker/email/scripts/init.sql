create database email_sender;

\c email_sender

create table emails (
    id serial not null,
    dat_cur timestamp not null default current_timestamp,
    assunto varchar(100) not null,
    mensagem varchar(250) not null
);