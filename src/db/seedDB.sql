DROP DATABASE IF EXISTS newtaskDB;

CREATE DATABASE newtaskDB;

USE newtaskDB;

CREATE TABLE newtaskform (
    id INT NOT NULL AUTO_INCREMENT,
    requestor VARCHAR(255),
    client VARCHAR(255) NOT NULL,
    project VARCHAR(255) NOT NULL,
    task_titles VARCHAR(255) NOT NULL,
    priority INT NOT NULL DEFAULT 1,
    deadline DATE NOT NULL,
    lead_name VARCHAR(255) NOT NULL,
    resource VARCHAR(255),
    risk VARCHAR(255) NOT NULL DEFAULT 'Low',
    task_descriptions VARCHAR(255),
    file_count INT NOT NULL DEFAULT 1,
    PRIMARY KEY (id)
);

INSERT INTO
    newtaskform (
        requestor,
        client,
        project,
        task_titles,
        priority,
        deadline,
        lead_name,
        resource,
        risk,
        task_descriptions,
        file_count
    )
VALUES
    (
        'John Doe',
        'Client A',
        'Project A',
        'Task A',
        1,
        '2020-01-01',
        'John Doe',
        'John Doe',
        'Low',
        'Task A',
        1
    )
