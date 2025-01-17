insert into users(email, name, password, username)
values
    ('mathis@up-db.com', 'Mathis', '$2a$12$bDb/YOEFtE28O.Hin.fshe/gyDbzKYFpdE/xsPPWNmqiqIy4X953e', 'Thisma'),
    ('marc@up-db.com', 'Marc', '$2a$12$wshgGWk2Y7Mj8CK3RRR16O9xZFlSMXk6p/NJBYi9rjfuJULTI.Zoi', 'CocoVino73');

insert into roles(name)
values
    ('ROLES_ADMIN'),
    ('ROLES_USER');

insert into users_roles(user_id, role_id)
values
    (1, 2),
    (2, 1);