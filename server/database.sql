CREATE DATABASE movienite; -- this is unnecessary when using ElephantSQL to create a server


-- cast and genre columns may need to be reconfigured to accommodate multiple values
CREATE TABLE savedMovies(
    film_id SERIAL PRIMARY KEY,
    imdb_film_id VARCHAR(255),
    title VARCHAR(255),
    release_date VARCHAR(255),
    mpaa_rating VARCHAR(10),
    runtime VARCHAR(255),
    genre VARCHAR(255),
    director VARCHAR(255),
    writer VARCHAR(255),
    actors VARCHAR(255), 
    plot VARCHAR(255), 
    language VARCHAR(255), 
    country VARCHAR(255), 
    poster VARCHAR(255), 
    imdb_score VARCHAR(10), 
    imd_score VARCHAR(10), 
    rt_score VARCHAR(10), 
    mc_score VARCHAR(10), 
    box_office VARCHAR(25),
    movienite_user_rating DECIMAL,
    trailer_link VARCHAR(255)
);

inception: tt1375666
edngame: tt4154796
sicario: tt3397884