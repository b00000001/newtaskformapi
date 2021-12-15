DROP DATABASE IF EXISTS newtaskDB;

CREATE DATABASE newtaskDB;

USE newtaskDB;

CREATE TABLE newtaskform (
    id INT NOT NULL AUTO_INCREMENT,
    requestor VARCHAR(255),
    client VARCHAR(255) NOT NULL,
    project VARCHAR(255) NOT NULL,
    task_title VARCHAR(255) NOT NULL,
    priority INT NOT NULL DEFAULT 1,
    deadline VARCHAR(255) NOT NULL,
    lead_name VARCHAR(255) NOT NULL,
    resource VARCHAR(255),
    other_resource VARCHAR(255),
    risk VARCHAR(255) NOT NULL DEFAULT 'Low',
    task_description VARCHAR(255),
    file_count INT NOT NULL DEFAULT 1,
    PRIMARY KEY (id)
);

INSERT INTO
    newtaskform (
        requestor,
        client,
        project,
        task_title,
        priority,
        deadline,
        lead_name,
        resource,
        other_resource,
        risk,
        task_description,
        file_count
    )
VALUES
    (
        'John Doe',
        'Client',
        'TestProj',
        'Test Task Title',
        3,
        '2020-01-01',
        'Big Boss',
        'Aaron',
        null,
        'High',
        'Test Task Description',
        2
    );