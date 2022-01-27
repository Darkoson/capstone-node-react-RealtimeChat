CREATE TABLE public.users
(
    id character varying(100) COLLATE pg_catalog."default" NOT NULL,
    fname character varying(50) COLLATE pg_catalog."default",
    lname character varying(50) COLLATE pg_catalog."default",
    email character varying(100) COLLATE pg_catalog."default",
    password character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY (id)
)

CREATE TABLE public.singlechat
(
    chatid integer NOT NULL DEFAULT nextval('singlechat_chatid_seq'::regclass),
    init_id character varying(100) COLLATE pg_catalog."default" NOT NULL,
    coop_id character varying(100) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT singlechat_pkey PRIMARY KEY (init_id, coop_id),
    CONSTRAINT singlechat_coop_id_fkey FOREIGN KEY (coop_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT singlechat_init_id_fkey FOREIGN KEY (init_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

CREATE TABLE public.chatgroup
(
    group_id character varying(100) COLLATE pg_catalog."default" NOT NULL,
    group_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    date_created timestamp without time zone,
    group_owner character varying(100) COLLATE pg_catalog."default",
    CONSTRAINT chatgroup_pkey PRIMARY KEY (group_id)
)

CREATE TABLE public.chatgroup
(
    group_id character varying(100) COLLATE pg_catalog."default" NOT NULL,
    group_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    date_created timestamp without time zone,
    group_owner character varying(100) COLLATE pg_catalog."default",
    CONSTRAINT chatgroup_pkey PRIMARY KEY (group_id)
)

create table group_chat_data (
	gcd_id serial primary key,
	group_id varchar (100),
	author_id varchar(100),
	msg varchar (500),
		foreign key (group_id)
			references chatgroup(group_id),
		foreign key (author_id)
			references users(id)
)