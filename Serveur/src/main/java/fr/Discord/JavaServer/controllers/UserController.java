package fr.Discord.JavaServer.controllers;

import fr.Discord.JavaServer.repository.UserRepository;
import fr.Discord.JavaServer.modele.User;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin("*")
public class UserController {

    @Autowired
    UserRepository userRepository;

    /* fonction qui permet de chercher tous les utilisateurs dans la base */
    @RequestMapping(method=RequestMethod.GET, value="/users") /* requete GET sur l'URI /users */
    public List<User> getAllUsers() {
        return userRepository.findAll(); /* utiliser la méthode findAll() héritée de MongoRepository */
    }

    /* onction qui permet de créer un utilisateur (methode POST) et le stocker dans la base de données */
    @RequestMapping(method=RequestMethod.POST, value="/users")
    public ResponseEntity<?> createUser(@RequestBody User unUtilisateur) {

            /* fonction qui va comparer dans la base si l'utilisateur existe déjà */
            if (userRepository.existsById(unUtilisateur.getUsername())) {
                return new ResponseEntity("L'utilisateur existe déjà", HttpStatus.CONFLICT);
            }
            /* si le username est inexistant, on enregistre l'utilisateur dans la base et on envoie un header de confirmation */
            return new ResponseEntity<User>(userRepository.save(unUtilisateur), HttpStatus.CREATED);
    }

    /* fonction qui permet de chercher un utilisateur en particulier en spécifiant dans l'URI son id */
    @RequestMapping(method=RequestMethod.GET, value="/users/{id}")
    /* Optional<User> car il se peut qu'on ne trouve rien et renverra un objet vide (Optional#empty) */
    public Optional<User> getASpecificUser(@PathVariable String id) {
        return userRepository.findById(id);
    }

}