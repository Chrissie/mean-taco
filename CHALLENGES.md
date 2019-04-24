## Verplichte opdrachten
### Opdracht 1 
Restore de database van de files in de git repo (mongodb-dump)  
Hint: Gebruik [mongorestore](https://docs.mongodb.com/manual/reference/program/mongorestore/).

### Opdracht 2
Start de backend en frontend op, open de webpagina in je browser (port 4200).  
Hint: Check of je goed voorbereid bent, en doe npm install in de server én frontend.

Gaaf! We zien de frontend opgebouwd uit MongoDB data.
Pas wat data in MongoDB aan en refresh de pagina om te checken.

### Opdracht 3 
Maak een detailpagina voor teamleden waarop de naam, functie en quote van de teamleden zichtbaar zijn. Maak een backend route voor het ophalen van een teamlid op ID.  
Hint: Kijk naar de navigatie op andere plaatsen in de applicatie.  
  
Maak een detail component aan met het commando
`ng generate component member-detail`.  


## Challenges
Als je in tweetallen werkt, zou je ook kunnen kiezen om de challenges op te splitsen in frontend en server, en die met elkaar connecten.
Let wel: Dit vereist teamwork skills en maakt debuggen niet makkelijker!


### Challenge 1: Access Control!

**Type challenge:** Technisch. Veel technieken, veel code. Weinig frontend en layout.  
Deze challenge is leuk om te doen als
- je wilt bewijzen dat je een betere programmeur bent dan je collega's
- je de belangrijkste feature van de hele avond wilt implementeren

**Opdracht:** Onze applicatie is niet veilig! 
Iedereen kan op het server IP-adres alle medewerkers van alle afdelingen zien. 
**Dit is niet Avanade compliant!** Dit gaan we oplossen door:
- Een login wall te maken op de frontend
- De backend/API te beveiligen tegen requests van gebruikers die niet zijn ingelogd

De volgende pagina's zijn sterk aanbevolen:   
[Angular Router](https://angular.io/guide/router), met in het bijzonder 
[Angular Route Guards](https://angular.io/guide/router#milestone-5-route-guards).
 [JSON Web Token](https://jwt.io) en [JWT Javascript implementatie](https://www.npmjs.com/package/jsonwebtoken]). [Express middleware](https://expressjs.com/en/guide/using-middleware.html) is dé manier om dit voor elkaar te krijgen.

Als dit eenmaal gelukt is, zijn de mogelijkheden eindeloos!   
- Probeer een onderscheid te maken tussen admin en niet admin: admin kan gebruikers verwijderen (en ziet dus andere/meer knoppen en/of pagina's).  
- Of nog gaver: Maak een login die gekoppeld is aan een teammember: deze teammember kan alleen zijn eigen team zien.


### Challenge 2: Webpage? Ik wil een webAPP!

**Type challenge:** Features bouwen, zichtbaar resultaat. 
Frontend en backend/server code, technisch niet ingewikkeld.  
Deze challenge is leuk om te doen als 
- je veel 'tastbare' features wil bouwen
- je na de avond wil weten hoe je Angular, Express en MongoDB kunt gebruiken om coole webapps te maken

**Opdracht:** Maak het mogelijk om vanuit de Angular app teams en personen toe te voegen, aan te passen en te verwijderen.
Door dit te doen leer je precies hoe een MEAN-stack applicatie in elkaar zit, wat Angular Components en Services zijn, hoe Express routing werkt en hoe je data in MongoDB ophaalt en opslaat.

Helemaal klaar? Challenge 3 of 5 zijn nu een eitje, als je nog tijd hebt.


### Challenge 3: Drag en drop!

**Type challenge:** Creatief en visueel, dichtbij een eindgebruiker. Veel frontend en minimum backend code.  
Deze challenge is leuk om te doen als
- je de laatste Angular/Material Design UI technieken wil toepassen
- je niet echt van backendprogrammeren houdt

**Opdracht:** Verzin een manier om [Angular Material Drag & Drop](https://material.angular.io/cdk/drag-drop/overview) toe te passen in de webapp. Synchroniseer het resultaat van de verplaatsing met de backend. 
Voorbeeld: Een teammember wisselen van team door deze te verslepen.
  
Klaar? Probeer challenge 2 of 5 eens.


### Challenge 4: hvað ertu að tala um?
**Type challenge:** Feature onderzoeken en inbouwen. Waarschijnlijk alleen frontendcode nodig.  
Deze challenge is leuk om te doen als
- je wil weten hoe multi-language support werkt in Angular
- je niet echt van backendprogrammeren houdt

**Opdracht:** Onderzoek [Angular Internationalization](https://angular.io/guide/i18n#internationalization-i18n) en toon de bestaande app in verschillende talen. Kan dit automatisch op de systeemtaal of browsertaal? Of is hier input van de gebruiker voor nodig?


### Challenge 5: Monitoring MEAN-stack apps
**Type challenge:** Azure Application Insights koppelen met je MEAN-stack applicatie. Bij deze challenge ga je in de front- en back-end aan de slag om allerlei events naar AppInsights te schrijven.

Deze challenge is erg nuttig als:
- je wil weten hoe je jouw applicatie na deployment in leven houdt
- je wil weten hoe je meer controle krijgt over het loggen van specifieke application events, naar een centrale log locatie
- je een Azure subscription hebt, maar Application Insights nog niet kent of niet gebruikt
- je wel graag een Developer Anno 2019 wil zijn/blijven ;)

**Opdracht:** Onderzoek hoe je in de [front-end de koppeling kunt maken](https://docs.microsoft.com/en-us/azure/azure-monitor/learn/nodejs-quick-start), maar ook hoe je het zelfde kunt bereiken in de back-end. Probeer eigen 'events' te loggen naar Application Insights. Extra gaaf als je daarbij categorieën als Front-end en Back-end kan registreren!