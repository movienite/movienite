CREATE DATABASE movienite; -- this is unnecessary when using ElephantSQL to create a server


-- cast and genre columns may need to be reconfigured to accommodate multiple values
CREATE TABLE savedMovies(
    film_id SERIAL PRIMARY KEY,
    imdb_film_id VARCHAR(255),
    title VARCHAR(255),
    imdb_rating DECIMAL,
    director VARCHAR(255),
    description VARCHAR(255),
    release_year INTEGER,
    starring VARCHAR(255), 
    genre VARCHAR(255),
    runtime VARCHAR(255),
    poster VARCHAR(255),
    mpaa_rating VARCHAR(255),
    movienite_user_rating DECIMAL,
    trailer_link VARCHAR(255)
);

r