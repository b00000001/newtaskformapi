DROP DATABASE IF EXISTS newtaskformDB;

DROP TABLE IF EXISTS newtaskform;

CREATE DATABASE newtaskformDB;

USE newtaskformDB;

CREATE TABLE newtaskform (
    id INT NOT NULL IDENTITY(1,1),
    requestor VARCHAR(50) NOT NULL,
    client VARCHAR(50) NOT NULL,
    project VARCHAR(50) NOT NULL,
    task_title VARCHAR(50) NOT NULL, 
    priority INT NOT NULL DEFAULT 1,
    deadline VARCHAR(50) NOT NULL,
    lead_name VARCHAR(50) NOT NULL,
    resource VARCHAr(50),
    other_resource VARCHAR(50),
    risk VARCHAR(50) NOT NULL DEFAULT 'Low',
    task_description VARCHAR(1000),
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