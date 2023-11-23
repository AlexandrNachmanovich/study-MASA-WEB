USE football;

CREATE TABLE football.clubs   (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
                               name VARCHAR(32) NOT NULL , 
                               country VARCHAR(50) NOT NULL , 
                               coach_id INT NULL); 