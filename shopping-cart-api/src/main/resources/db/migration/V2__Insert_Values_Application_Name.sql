alter table application_name alter id set default nextval('hibernate_sequence');

insert into application_name(name) values('Shopping Cart Starter');