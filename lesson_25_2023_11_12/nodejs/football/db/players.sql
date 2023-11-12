USE football;

CREATE TABLE football.players (id INT NOT NULL , 
                               first_name VARCHAR(32) NOT NULL , 
                               `last_name` VARCHAR(32) NOT NULL , 
                               `image` VARCHAR(300) NULL , 
                               `position` VARCHAR(30) NOT NULL , 
                               `number` TINYINT NOT NULL , 
                               `cityzenship` VARCHAR(50) NOT NULL , 
                               `rating` TINYINT NULL ) ENGINE = InnoDB;