
CREATE DATABASE worldofanimals;
USE worldofanimals_db;

CREATE TABLE 'animallist' (
  'Animal_Id' int(11) NOT NULL,
  'Animal_Name' varchar(30) DEFAULT NULL,
  'Animal_type' varchar(20) DEFAULT NULL,
  'Average_Weight' decimal(5,0) DEFAULT NULL,
  'Average_Height' int(11) DEFAULT NULL,
  'Life_Span' int(11) DEFAULT NULL,
  'Diet' varchar(25) DEFAULT NULL,
  'Continent' varchar(25) DEFAULT NULL,
  PRIMARY KEY ('Animal_Id')
);