INSERT INTO department (department_name)
VALUES  ('Sales'),
        ('Engineering'),
        ('Finance'),
        ('Legal');



INSERT INTO roles (title, salary, department_id)
VALUES  ('Salesperson', 80000, 1),
        ('Lead Engineer', 150000, 2),
        ('Accountant', 125000, 3),
        ('Lawyer', 190000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES  ('Mike', 'Chan', 1, null),
        ('Ashley', 'Rodriguez', 2, null),
        ('Kunal', 'Singh', 3, 2),
        ('Sarah', 'Lourd', 4, 2);
