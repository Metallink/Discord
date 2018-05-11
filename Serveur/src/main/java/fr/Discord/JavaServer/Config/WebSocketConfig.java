package fr.Discord.JavaServer.Config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.*;

/* ce fichier permet la configuration de la websocket */

@Configuration
@EnableWebSocketMessageBroker /* active notre websocket */
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    /* Endpoint sur lequel le client se connectera sur la websocket */
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/connexion-websocket")
                .setAllowedOrigins("*")  /* permet d'acceder depuis n'import quel host */
                .withSockJS();
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.setApplicationDestinationPrefixes("/app");
        registry.enableSimpleBroker("/chat");
    }
}
