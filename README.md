# Examensarbete

Integration of Drupal as Headless CMS with Node JS and Angular 2.

This project has been created and tested using MAMP (Free version) to work with Drupal.

## Installation as localhost:

- Install Node JS on your computer.
- Donwload the repository.
- Set your local apache server using the port 80 and make sure that you get the drupal site in this exact url "localhost:80/exjobb/headless_drupal/" so you will not have problem with the links of the images.
- Set you local database using the port 3306.

* The easiest way to do point 2 and 3 is installing MAMP on your computer and configurate apache server using the port 80 and MySQL using the port 3306 (this is the default MAMP settings). Then copy or move the project repository (exjobb) to the directory that MAMP watches. It would be good as well if your local database has as user "root" and pass also "root".

- Import the database file in your local database (give the name "headless_drupal" to the database you create).
- Via the terminal go to site_node_angular and run "npm install"
- Then run "npm run build"
- To work with the data in Drupal, go to localhost:80/exjobb/headless_drupal/ (user: admin, pass: admin)
- To see the site, go to localhost:2000.
