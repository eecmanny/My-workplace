-- INSERT INTO movies (movie_name)
-- VALUES ("Lion King"),
--        ("The Godfather"),
--        ("West Side Story"),
--        ("Parasite"),
--        ("The Wizard of Oz");

-- INSERT INTO reviews (movie_id, review)
-- VALUES (1, "Zazu is underrated. Give that hornbill a sequel!"),
--        (2, "I'm gonna make him an offer you can't refuse, watch this movie"),
--        (1, "Scar is the lion everyone loves to hate"),
--        (3, "Ten years of ballet and three years of tap to join a gang in this neighborhood"),
--        (5, "The tin man gave a metallic, hollow performance"),
--        (1, "Hakuna matata"),
--        (5, "Those flying monkeys are nightmare fuel!");
       
INSERT INTO customers (id, first_name, last_name)
VALUES (001, "Arthur", "Miller"),
       (002, "Chinua", "Achebe"),
       (003, "Margaret", "Atwood"),
       (004, "Gabriel", "Garcia Marquez"),
       (005, "Simone", "de Beauvoir");
       
INSERT INTO customer_order (id, customer_id, order_details)
VALUES (001, 001, "coffee, milk"),
       (002, 002, "eggs, cheese"),
       (003, 003, "organic cereal"),
       (004, 004, "oranges, peaches"),
       (005, 005, "ice cream");
       
