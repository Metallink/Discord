package fr.Discord.JavaServer.repository;

import fr.Discord.JavaServer.modele.User;
import org.springframework.data.mongodb.repository.MongoRepository;

/* Les parameteres de configuration de la base se trouvent dans le fichier application.properties du dossier ressources */


/* l'interface UserRepository permet en héritant des méthodes de la classe MongoRepository d'acceder aux données et faire des CRUD */
public interface UserRepository extends MongoRepository<User, String> {
    /* prend en premier parametre la classe objet que la repository va gérer et en deuxieme parametre, on a le type de notre id (String)  */

}
