import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; //se importa para el alert
import { EstilosService } from 'src/app/Services/estilos.service';

@Component({
  selector: 'app-estilos',
  templateUrl: './estilos.page.html',
  styleUrls: ['./estilos.page.scss'],
})
export class EstilosPage implements OnInit {

  musica: any[] = [];
  constructor(public alertController: AlertController,
    private estilosService: EstilosService,
    ) { } //se pone el public

  ngOnInit() {
    this.estilosService.getMusicList().subscribe(resp=> {
      console.log('musica', resp);
    this.musica.push(...resp.playlists.items);
    console.log(this.musica);
      })
  }
 

    async presentAlert1() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Tego Calderon - Pa Que Retozen',
      subHeader: 'Letra',
      message: "<h7>Oye!<br>El Abayarde, Tego Calde<br>Con Dj Joe<br>Metiendole Cabron, oye<br><br>Esto es para ustedes<br>Pa' que se lo gozen<br><br>Tego Calderón, pa' que retozen<br>Huelo a nuevo<br>Me siento al dia<br>En la mia, mami<br>Ando bien perfumao<br>Y la paca, por si no fia<br><br>Sin misterio<br>Llenense de placer<br>Que se acabe el mundo<br>Yo no vine pa' perder<br>Apaguen los celulares<br>Reportense a sus hogares<br>Hoy si que si que vamo a hacer maldades<br>Muevan su pum-pum<br>Cuando yo les tire mi sun-sun<br>En la cintura traigo mi tun-tun<br>Mami, yo quiero<br>Agarrarte por el pelo<br>Mientras te tiro mi lenguaje obsceno<br>Yo soy el mas qué<br>Tu quisiera que tu cuerpo aplaste<br>Con esta bambua siempre hago desastre<br>No te me des guille<br>Que tu sabes que yo hago que brille<br>Soy el number one<br><br>I'm mas monster que los de thriller<br><br>Esto es para ustedes, pa' que se lo gozen<br>Pa' que se lo gozen<br>Pa' que se lo rozen<br>Oye<br>Esto es para ustedes, pa' que se lo gozen<br><br>Pa' que se lo gozen<br>Pa' que se lo rozen<br><br>Oye<br>Vamos morena<br>Culipandea esa batea<br><br>Cashea<br>Pero que tambien pichea<br>La golfea<br><br>Esas si no fantasmean<br>Oyen mi cancion y como frontean<br>No importa donde me vea<br>La tuya es la que me llena<br>Alegria pa' mi cuerpo<br>Y no me huelen ni las azusenas<br>Es el negro lliguiri<br>El enemy de los guasibiris<br>El que nunca tira trilili<br>Sandunga pa' las ladies<br>Sabor de aqui pa' ti<br>Mami, bachata de ajonjoli<br>Dale pa' la esquina<br>Pa' ponertela en la china<br>Oye, si las mas putas son las mas finas<br>Digan lo que digan<br>Vamo'a gozarnos la vida<br>Tampoco a lo loco<br>Protegeteme la mina, mija<br>No te me cohiba y exija<br>A menos que tu quieras hacerte un palija<br>Esto no es un juego<br>See you later, te veo luego<br>Coge consejo de Tego pa' que llegue a viejo<br>Si te ha virao pelao y te sale premiao<br>Por no haberlo encapuchao<br><br>Eso si es foul<br>A ultima hora gozatelo con la ropa puesta<br>Trabajo cuesta<br>Nadie piensa cuando va a dar yesca<br><br>Esto es para ustedes, pa' que se lo gozen<br>Pa' que se lo gozen<br><br>Pa' que se lo rozen<br>Oye<br>Esto es para ustedes, pa' que se lo gozen<br>Pa' que se lo gozen<br><br>Pa' que se lo rozen<br><br>Este es Tego Calderon, el Abayarde<br>Junto a DJ Joe y Rafy Mercenario<br>Metiendole cabron en el microphone<br>Pa' que se lo gozen y pa' que retozen<br>Todas esas gatas<br>Que les gusta mi melaza<br>Llego el Zulu como Shaka<br>Que fue<br>To creia que ellos sabian de mi</h7>",
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

    async presentAlert2() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '"Rebota Remix” Guaynaa / Nicky Jam / Farruko Feat Becky G & Sech',
      subHeader: 'Letra',
      message: "Mamarre, mamarre, mamarre, mamarre<br><br>Cómo lo mueve esa muchachota<br>Metiéndole al dembow es que se bota<br>Y yo postia'o aquí con esta nota<br>La miro y rebotan, rebotan, rebotan, rebota<br><br>Cómo lo mueve esa muchachita<br>Le mete al dembow y no se quita<br>Yo tengo el ritmo que la debilita<br>Ella tiene nalga y tetita, nalga y tetita<br><br>Tú ya tienes 18, entonces 'tás en ley<br>Quiero acampar en tu' montaña' de Cayey<br>Te libraste a los 16, (Wow) OK<br>Andamo' en el dembow con el fucking Charlee Way, ey<br><br>Es que tú ere' una maldita desgracia'<br>Como dice Celia Cruz con la bemba colora'<br>Me tienes sudando frío, no quiero mirar más na'<br>Y se le marca el camel toe a la condena'<br><br>Hija 'el diablo, Dios te reprenda<br>Te vo'a decir algo y yo quiero que me lo entiendas<br>Yo te vo'a hablar claro, mami, no es pa' que te ofendas<br>Pero por ti, que me jodan asume y hacienda<br><br>Y es que no sé, chica, y yo acá pensando<br>¿Por qué no mejor ya de vez en cuando? (Claro)<br>Empezamos tú y yo a estar procreando<br>Porque aquí me tienes mirando, mirando y mirando<br><br>Cómo lo mueve esa muchachota<br>Metiéndole al dembow es que se bota<br>Y yo postia'o aquí con esta nota<br>La miro y rebotan, rebotan, rebotan, rebota<br><br>Cómo lo mueve esa muchachita<br>Le mete al dembow y no se quita<br>Yo tengo el ritmo que la debilita<br>Ella tiene nalga y tetita, nalga y tetita<br><br>Tú jugabas voleibol o tú eras atleta<br>Porque tienes la góndola 'e muslos y la de chuleta<br>De la cintura al tobillo y ya me tienes el martillo<br>Saliéndose a ver qué es lo que pasa por el calzoncillo<br><br>Bájale, mami, como siete mil quinientos<br>Me tienes en estado de aborrecimiento<br>Si tú me das un break, yo te voy a hacer un cuento<br>Quieres conocer a Junito, yo te lo presento (Ma')<br><br>Marrayo parta que presión<br>Cómo se le marca el pantalón<br>De la camisa, le explota el botón<br>Y por ti, yo voy con los suegros<br>A Guavate a comer lechón<br><br>Hija 'el Diablo, Dios te reprenda<br>Te vo'a decir algo<br>Y yo quiero que me lo entiendas<br>Yo te vo'a hablar claro, mami<br>No es pa' que te ofendas<br>Pero por ti que me jodan, asume y hacienda<br><br>Cómo lo mueve esa muchachota<br>Metiéndole al dembow es que se bota<br>Y yo postia'o aquí con esta nota<br>La miro y rebotan, rebotan, rebotan, rebota<br><br>Cómo lo mueve esa muchachita (¿Qué?)<br>Le mete al dembow y no se quita (El diablo)<br>Yo tengo el ritmo que la debilita<br>Ella tiene nalga y tetita, nalga y tetita<br><br>Cómo lo mueve esa muchachota<br>Metiéndole al dembow es que se bota<br>Y yo postia'o aquí con esta nota<br>La miro y rebotan, rebotan, rebotan, rebota<br><br>Cómo lo mueve esa muchachita (Es que es bonita)<br>Le mete al dembow y no se quita<br>Yo tengo el ritmo que la debilita<br>Ella tiene nalga y tetita, nalga y tetita<br><br>Ella tiene chichi<br>'To quedó fino, Kino (El Guaynabichy)<br>Danta La Movie<br>Charlee Way<br>El Guayna-uayna-uayna-uayna-uayna-uaynabichy<br>El Guaynaa<br>El slogan que no puede fallar<br>Pa' que vayan pa' la discoteca a menear el menor<br>El shorty, shorty, shorty<br>El shorty, shorty, shorty<br>Mamarre, mamarre, mamarre, mamarre",
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  
    async presentAlert3() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'El Alfa El Jefe - SUAVE (Remix)',
      subHeader: 'Letra',
      message: "Plan B, es Plan B<br>Mami no me puedo aguanta<br>Cuando yo te veo pasa<br>Cuando tú me baila en el tub<br>Yo me pongo loquito que no puedo ni habla<br>Yo te la entrego toda, todit<br>Tú eres la mujer que a mí me excit<br>Tú 'tá má' buena que una modelo de revist<br>Súbete en el Lambo' que te traigo horit<br><br>Yo te doy lo que tú quieras, bailame en el tubo, sua<br>Yo te doy lo que tú quieras, bailame en el tubo, sua<br><br>Yeh-yeh (yeh), yeh (ay), yeh (ye<br>Yeh (ay, yi-yi)<br>Bailame en el tubo, 'toy rogando por tu c*l<br>Ella no se pone los panties pa' cojer fresco en el c*l<br>Demasiado locotrona, no le para a na'-nani-na<br>Cuando se me pone en cuatro la pongo fin<br>Ella 'tá to' la vaina, parece Brasileñ<br>Subete en el tubo, que te vo'a dar con la leñ<br>La Bang Bros me dio una estatuill<br>Y la Playboy quiere verme dando etill<br>El tiguerón, que no se encaquill<br>Si te doy la hora de mi Role' tú te quill<br>El tiguerón, que no se encaquill<br>Te doy la hora, tú no te quilla<br><br>Pideme lo que tú quiera, yo compro lo que tú pid<br>¿Que tu novio es mas piketu que yo?, no seas atrevid<br>Al parecer él usa un uniforme de por vid<br>El poloche es una enfermedad, no se le quita como el SID<br>No me compares con nadie, yo soy únic<br>Le molesta porque crezco rapido, flow vello púbic<br>Las babys loca' con el colora'<br>Y yo le digo 'Suave', pa' ver ese c*lo y ir y venir como un manda'<br>Le gusta los plátanos pero a mi el to'ton-'ton-'ton-'to<br>Machucalo suave con este piló<br>Pariguayo por más que me caiga atras, no tengo clon-clo<br>Siempre gano fácil, bo', nunca cojo un<br>Bailame suave, suave, dale lento pa' ver tu millaj<br>Pa' que se me alze la valla del peaj<br>Baby, ¿tú no ves que sobra el tigueraje<br>Le dije: 'Soy maletero pa' calgarte ese equipaje'<br><br>Yo te doy lo que tú quieras, bailame en el tubo, suav<br>Yo te doy lo que tú quieras, bailame en el tubo, suave<br><br>Ella me dice que le gustan los plátanos, ma'duro<br>Ella me dice que le gustan los plátanos, ma'duro<br>Ella me dice que le gustan los plátanos— (suave<br>Plátano-plátano-plátano-plátan<br>Plátano-plátano-plátano-plátan<br>Plátano-plátano-plátano-plátano (suave<br>Plá-Plátano-plátano-plátano-plátano<br>Plátano-plátano-plátano-plátan<br>Plátano-plátano-plátano-plátan<br>Plátano-plátano-plátano-plátan<br>Plá-Plátano-plátano-plátano-plátano<br>Plátano-plátano-plátano-plátan<br>Plátano-plátano-plátano-plátan<br>Plátano-plátano-plátano-plátan<br>Plátano-plátano-plátano-plátano (suave)<br><br>Que vivan las chochas, que vivan las drogas, que vivan las p*ta<br>Chinga como loca, es una demonia, esa es mi p*t<br>Abre la boca, un poco de coca en mi bicho y lo chup<br>Conmigo se embosca, Blacky a la roca y empezó la rumb<br>Desacata'o, andamo' a lo loc<br>Se me salieron los tornillos del coc<br>Ando con los palos y los tumba coc<br>Ra-pla-pla-pla, te metemos unos poco<br>Si estas pelúa, mira baby, yo te pod<br>No venga pa'l party si estás en period<br>Tú da tu maceta, camina con los codo<br>Mami si te pelas, te voy a untar el yod<br>Y chiri-chiriban-chiriban-ban-chiriban-chiriban-ba<br>Si tu gato es fek<br>Chiri-chiriban-chiriban-ban-chiriban-chiriban-ba<br>A bailar La Macarena<br><br>¿Que tú quieres lana, plata, cualto, dinero? (Jon Z men<br>Pídeme lo que tú quiera pero bailame primer<br>En la cama, en el piso, en el tubo, en el ciel<br>A ti mi bicho te ama, pero yo a ti no te quier<br>Pórtate bien y te presento par de amigo<br>Balenciaga, Gucci, Valentin<br>Son gente que siempre andan conmig<br>De verdad, no como la de tu novio que son chin<br>Aquí no se pregunta cuánto val<br>Damelo que es mío, asi que esta m*erda funcion<br>Ustedes me ronca, pero no val<br>Porque yo vivo donde tu vacacion<br>Tu gata siempre me mencion<br>Y tú siempre la perdon<br>Conmigo bebe Moë<br>Y tú lo mas que le ha ofrecido son Coronas<br><br>Yo te doy lo que tú quieras, bailame en el tubo, suav<br>Yo te doy lo que tú quieras, bailame en el tubo, suave<br><br>Suav<br>Suave<br><br>Trépate en el tubo, ¿a ti te gusta duro o te gusta suave<br>Por al frente y por el c*lo, en tu boca eyac*lo, baby, ya tú sabe<br>Cómo lo hag<br>Pide lo que tú quiera' que yo lo pag<br>Te empiezo a tocar y se te forma un lag<br>Tráeme las botella', aquí no compramos trago<br>Mueve esa nalga hasta que la leche se me salg<br>Mueve esa nalga hasta que la leche se me salg<br>Salga-salga-salga-salg<br>Salga-salga-salga-salga hasta que la leche se me salga<br>Salga-salga-salga-salg<br>Salga-salga-salga-salga hasta que la leche se me salga<br>Salga salga salga-salg<br>Salga<br><br>Ye<br>Oye chico, las dominicanas tienen un culo, wa<br>Asere, ¿qué bolá<br>Chae<br>Ya tú chave<br>Suav<br>Suav<br>Suav<br>Suave",
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

    async presentAlert4() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'BAD BUNNY x ÑENGO FLOW - QUE MALO ',
      subHeader: 'Letra',
      message: "Hace tiempo que no sube na'<br>Hoy puso que está soltera<br>Qué pena me da<br>De lo que uno se entera, eh-eh<br><br>Real G4 Life, baby<br>No sé por qué se dejó (Se dejó)<br>No sé por qué se dejó (Se dejó)<br>Pero<br><br>Qué malo que te dejaste (Ja, ja, ja)<br>Del gatito que tenía', porque (Baby)<br>A mí me gustaba darte (Tú lo sabe')<br>Sabiendo que no era' mía y era' de él<br><br>Qué malo que te dejaste<br>Del gatito que tenía', porque<br>A mí me gustaba darte<br>Sabiendo que no era' mía y era' de él<br><br>Me encantaba castigarte cuando él se iba de la casa (Ja, ja, ja, ja)<br>Ese cabrón llamando y yo en tu cuarto, dando salsa<br>Tiende al síntoma 'e venganza y también lanza la vampira<br>Mai', tú sigue bellaqueando que mi flow nunca se expira (Ey)<br><br>Quiere bellaqueo, me dice' que te dejaste, yo no lo creo<br>Si tú ere' una diabla en busca 'e perreo<br>Yo soy loco con tu piel, tú ere' loca con mi maleanteo<br><br>Quiere bellaqueo (Ja, ja, ja), me dice' que te dejaste, yo no lo creo<br>Si tú ere' una diabla en busca 'e perreo<br>Yo soy loco con tu piel, tú ere' loca con mi maleanteo (Ja, ja, ja, ja)<br>(Real G4 Life, baby)<br><br>Qué malo que te dejaste<br>Del gatito que tenía', porque<br>A mí me gustaba darte<br>Sabiendo que no era' mía y era' de él (Yeah, yeah, yeah, yeah; ja, ja, ja)<br><br>Qué malo que te dejaste<br>Del gatito que tenía', porque<br>A mí me gustaba darte (¡Huh!)<br>Sabiendo que no era' mía y era' de él (Ey, ey, ey, ey)<br><br>Ey, a ti te gustan los bandido'<br>A mí me gusta lo prohibido<br>Sin cojone' me tiene quedarme escondío' (No)<br>En lo que se iba tu mari'o, pero<br><br>Como quiera te vo' a ver, ey<br>Esta noche te lo vo' a poner<br>Dime, mami, ¿por qué ya no está' con él?<br>¿O e' que van a volver?, eh<br><br>Le gusta chingar en el carro y él se lo tinteó (Jejeje)<br>Pero fui yo quien le metió<br>Dijo que andaba con Valery, de nuevo mintió (Oh)<br>Se trepó y me lo partió<br><br>Ella se la pega y él pide perdón<br>Diablo, diablo, hay que ser cabrón<br>Puse algo de bellaquera y lo compartió<br>Pa' mí que se acordó de cuando este bicho sintió<br><br>Qué malo que te dejaste<br>Del gatito que tenía', porque<br>A mí me gustaba darte (Ey, ey)<br>Sabiendo que no era' mía y eras de él (Ey, ey, ey)<br><br>Qué malo que te dejaste<br>Del gatito que tenía', porque<br>A mí me gustaba darte<br>Sabiendo que no era' mía y era' de él",
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

    async presentAlert5() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '105F RMX - Kevvo FT Farruko, Myke Towers, Arcangel, Darell, Ñengo Flow, Brytiago, Chencho Corleone',
      subHeader: 'Letra',
      message: "Chencho<br>Desde que yo entre rapido te setié<br>De tantas mujeres fue a ti quien desee<br>Mai tu tienes algo<br>Que hace que contigo me ponga sato<br>Tu siempre coquetiando<br>Con trago en la mano le das hasta abajo<br><br>Oeee<br>Ooeeee<br><br>Oooeeee<br>Oooooaaaaa<br><br>Kevvo<br>A 105ºF<br>Señalen pa donde estoy dinero hay<br>En PR la pelicula de dubai<br>Estamos rolling los dice<br>En la disco capsuliando con los vapes<br>La melodia de la calle Tony Dize<br>No salimos de Condado<br>Pide Tepanyaki<br>Las retros de champs<br>No estoy hablando de jackie<br>Moviendo los pollos<br>No son Teriyaki<br>La corta dentro del jacki y<br>Como Cardi les doy taki taki<br><br>Kevvo Corro<br>WOU<br>Baby dale suave cuando bajes<br>Que yo quiero verte ese tatuaje<br>No trajo na debajo del traje<br>Y no es de gym ese nalgaje<br><br>x2<br><br>DARELL<br><br>Aprovecha que tu eres precoz<br>Y eso se te come mami hasta con arroz<br>Vamos a fumar hasta que te de tos<br>Con mas regalos ma que Santa Clause<br>Y Slowly in check in the discotek<br>Baby sit down in The table 25 in the check<br>Hi Sweetie<br>Yo voy hacer que te olvdes de tu EX<br>Yo voy a darte lo que te mereces<br>Y ma tu te mereces<br>Que yo me arrodille y que yo a ti te rese<br>Que eso abajo yo completo te lo bese<br>Y y se que yo he pichau un pal de veces<br>Pero hacen meses<br>Que quiero tabla<br>Yo no se bebe porque tu ni me hablas<br>Lo mas que te gusta es cuando tu te endiabla<br>Porque yo quiero ponerte en 4 y darte tabla<br>Y wou<br><br>Coro<br>Baby dale suave cuando bajes<br>Que yo quiero verte ese tatuaje<br>No trajo na debajo del traje<br>Y no es de gym ese nalgaje<br><br>FARRUKO<br>A 105F<br>La cabina botando humo con el capsulon en high<br>La nota pega como Myke<br>Tyson en los noventa con los cortos y las nike<br>Soy el peso completo de la nueva era<br>Las putas en el bote con Gistro y vicera<br>Tenemos la movie en play ya no estamo en novela<br>Prende y dale candelaaa<br>Pasamelo y no te lo mames<br>Pero dale suave baby cuando tu jales<br>Que no te vaya patiar y te me vayas de over<br>Vamos a darle arrebataitos mami sin cover<br>Y baby dale suave cuando bajes<br>Que yo quiero verte ese nalgaje<br>No trajo na debajo del traje<br>Y quiere que yo le borre el millaje<br><br>CORO<br>Baby dale suave cuando bajes<br>Que yo quiero verte ese tatuaje<br>No trajo na debajo del traje<br>Y no es de gym ese nalgaje<br><br>KEVVO<br>Rompe como Daddy rompe<br>para ti No hay compe luce cabrón todo lo que te compres<br>energética como el Monster<br>me busco una querella por chocar con ese bómper<br>Capsuliando por la Iturregui<br>con los santos con el Palo Ready<br>engrasau como un churrasco de Levis<br>con dos Baby's que son lesbi YUH<br>En el cuello tengo una avalancha<br>Las babys se mojan<br>Como en palomino<br>En una lancha<br>No se pegan ni con revancha<br>Tengo tanta grasa<br>No te acerques mucho que te manchas<br>Somos real aqui no hay phantom WOU<br>Indica que te busco dentro del Phantom YUH<br>a tos estos buitres los espanto<br>Siempre origi como el conejo y Austin Santos<br>WOUU<br><br>Arcangel<br>AUSTIN BABYYY<br>EY<br>A 105F<br>Dice que es tranquila pero se las trai<br>Yo soy como el flight<br>15 temporadas sin Strike<br>Ella es chiquita pero me gusta su size<br>Cuando se quita el mahon<br>Rebota como un balon<br>Ey<br>Le doy fumandome un blunt<br>Eyyy<br>La monto en el jet la movie siempre en play<br>los diamantes en mi cuello parecen frosted flakes<br>Y no es cornflake pero soy su tiger<br>Ella tiene gato<br>Le doy como un diver<br>Por debajo del agua sin coger aire<br>Solo me dice caile<br>Y le llego a 105<br>Baby driver rrrrr<br>Ella es suelta por naturaleza<br>Se pone de rodilla a mi bicho le reza<br>Le gustan los condones con sabir a fresa<br>Pero aveces quiere sin gorrito y me lo confiesa<br><br>Coro Arca<br>Baby dale suave cuando bajes<br>Que yo quiero verte ese tatuaje<br>No trajo na debajo del traje<br>Y no es de gym ese nalgaje<br><br>MYKE TOWERS!<br>Siguen subiendo los grados<br>Parece que eso lo hizo juan salgado<br>Diabla pero tiene un booty sagrado<br>Y yo no soy javi pero toas estas mujeres me dicen el mago<br>Tengo palos musicales mas los panas estan armados<br>Y tu estas hecha<br>Me Dicen que tu eres corta de mecha<br>Vamos pa las vegas a bellaquiar en el venetian<br>No pueden frontiarle ninguna se pone necia<br>Despues de que se los come los blokea y los desprecia<br>Y coge sol en el bote y dinero en el tubo<br>Yo bajo el ticket como q kilos subo<br>Hielo en el cuello cabron yo no sudo<br>Un angel en el derecho el diablo en el zurdo<br>Yo Kevvo<br>Aunque tengan jevo<br>Yo me atrevo<br>Dile a Pepe que cualquier cosa en Quintana los encuevo<br>Ya no cabe una paca mas en la Luis Vuitton en cuero<br>Quieres que te arranquen ojos welebicho cria cuervos young king<br><br>BRYTIAGO<br>eso aya atras es Una película que no la tiene ni Netflix<br>Nalgona no falla la dieta y tiene mas curvas aue el logo de pepsi<br>Un album privado que solo lo usa pa guardar videos y fotos<br>Mi cuarto parece un hotel debajo de la frisa te como ese<br>En palomi<br>Corriendo jetski<br>El sol de PR obligau le marca el biki<br>La melaza no es de LA es de aqui<br>Toma date un hit<br>Despues que les doy no se quieren ir<br>Como Yaviah contacto<br>Por ese booty yo te juro aue los gasto<br>Y que de Dispen es el pasto<br>Y las piernas van pa arriba como si fuera un asalto<br>Wou<br><br>CORO Kevvo<br>Baby dale suave cuando bajes<br>Que yo quiero verte ese tatuaje<br>No trajo na debajo del traje<br>Y no es de gym ese nalgaje<br><br>ÑENGO<br>105F<br>Todas estas putas saben la que hay<br>Algarete<br>Por encima del agua el jinete<br>Voy a darte bicho pa romperte el grillete<br>Eso es sin duda encima de mi cama una laguna<br>De b12 la vacuna<br>En la caleta una fortuna<br>Sin panty bajo la luna<br>Un Hp desde la cuna<br>Que si cometes fallas te las cobro una a una<br>Hoy yo quiero ver ese tatuaje<br>Dobla la cabeza cuando bajes<br>A mi bicho le hizo homanaje<br>Te voy a hacer venir cuando trabajes<br>Ponte bellaca<br>Date dos cachas y abre las patas<br>Del tingo al tango hasta joderte la piñata<br>No hay serenata ni flores<br>Lo que tengo son condones de sabor y colores<br><br>CHENCHO<br>Dale hasta el suelo sin miedo mueve las pompi<br>Yakita encima de mi tu sigues jumping jumping<br>Brinca ponte fresquita<br>Corleone te hace posiciones que tu solicitas<br>Te excitas<br>Lo pone y tu gritas<br>Nunca se quita<br>Te asoto hasta ver que eso ahi te palpita<br>Permita<br>que yo sea el que te la lubrica<br>Incita<br>Ven y hazme una gratuita<br>Y veras como te salpica<br><br>Pop<br>Loli loli pop<br>Loli loli loli pop<br>Lo loli pop pop pop pop pop<br><br>Loli loli pop<br>Loli loli loli pop<br>Lo loli pop pop pop pop pop<br><br>PAUTAS<br>CHENCHO CORLEONE MAI<br>105F YA TU SABES LA QUE HAY<br>YA YA REMIXX<br>105F<br>UNA VISION QUINTANA<br>PEPE<br>DARELL<br>AUSTION BABY<br>YOUNG KINGZ BABY<br>DURAN THE COACH<br>DIMELO KEVVO",
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

   async presentAlert6() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: "The Weeknd - Can't Feel My Face",
      subHeader: 'Letra',
      message: "And I know she'll be the death of me<br>At least we'll both be numb<br>And she'll always get the best of me<br>The worst is yet to come<br>But at least we'll both be beautiful<br>And stay forever young<br>This I know, yeah, this I know<br><br>She told me, 'don't worry about it'<br>She told me, 'don't worry no more'<br>We both know we can't go without it<br><br>She told me, 'you'll never be in love'<br>Oh, oh<br><br>I can't feel my face when I'm with you<br>But I love it, but I love it<br><br>I can't feel my face when I'm with you<br>But I love it, but I love it<br><br>But I love it, but I love it<br><br>And I know she'll be the death of me<br>At least we'll both be numb<br>And she'll always get the best of me<br>The worst is yet to come<br>All the misery was necessary<br>When we're deep in love<br>This I know, girl, I know<br><br>She told me, 'don't worry about it'<br>She told me, 'don't worry no more'<br>We both know we can't go without it<br><br>She told me, 'you'll never be in love'<br>Oh, oh<br><br>I can't feel my face when I'm with you<br><br>But I love it, but I love it<br>I can't feel my face when I'm with you<br><br>But I love it, but I love it<br>But I love it<br>I can't feel my face when I'm with you<br><br>But I love it, but I love it<br>I can't feel my face when I'm with you<br><br>But I love it, but I love it<br>But I love it, but I love it",
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

   async presentAlert7() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Waiting (feat. Emma Hewitt)',
      subHeader: 'Letra',
      message: "Your memory remains<br>I breath it closer<br>I swear that I still feel you near<br><br>The cool wind is taking over<br>It's taking over<br><br>So far away<br>You're gone so long<br>Ohh and I'm waiting<br><br>Till that day<br>I take you home<br>Know that I'm waiting<br>Know that I'm waiting<br>Know that I'm waiting<br><br>Haunted by your grace<br>You know I'm falling<br>So cool without you<br>Always in my mind<br>I hear you calling<br><br>So far away<br>You're gone so long<br>Ohh and I'm waiting<br><br>So far away<br>You're gone so long<br>Ohh and I'm waiting<br><br>Till that day<br>I take you home<br>Know that I'm waiting<br>Know that I'm waiting",
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

   async presentAlert8() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Crystal Rock, Felix Schorn & Flip Capella - Hypnotized ',
      subHeader: 'Letra',
      message: "Feel buried alive, this city is airtight<br>Suffocatin', lonley in the crowds<br>I'm surrounded by all the screens of their lies<br>Screamin' into to space to drown them out<br><br>I fell down so low, found nowhere to go<br>But I know you wait for me<br>You wait for me<br>So far out of sight, stepped into the white<br>But I know you wait for me<br>I'm comin' home, I'm comin' back down tonight<br><br>'Cause I've been hypnotized by the lights<br>But I'm comin' home, I'm comin' back down tonight<br>Yeah, it's taken time to realize<br>But I'm comin' home, I'm comin' back down tonight<br><br>So hold me tight, I just wanna fade out<br>Somewhere we can shut the world away<br>I'm ready to hide far from the fallouts<br>They won't find us in the paradise we'll make<br><br>I fell down so low, found nowhere to go<br>But I know you wait for me<br>You wait for me<br>So far out of sight, stepped into the white<br>But I know you wait for me<br>I'm comin' home, I'm comin' back down tonight<br><br>'Cause I've been hypnotized by the lights<br>But I'm comin' home, I'm comin' back down tonight<br>Yeah, it's taken time to realize<br>But I'm comin' home, I'm comin' back down tonight<br>I'm comin' home, I'm comin' back down tonight<br>I'm comin' home, I'm comin' back down tonight<br><br>Free fallin' from the high<br>I'm followin' the voice I know<br>Free fallin' from the high<br>I'm comin' home, I'm comin' back down tonight<br><br>'Cause I've been hypnotized by the lights<br>But I'm comin' home, I'm comin' back down tonight<br>Yeah, it's taken time to realize<br>But I'm comin' home, I'm comin' back down tonight<br>I'm comin' home, I'm comin' back down tonight<br>I'm comin' home, I'm comin' back down tonight",
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

   async presentAlert9() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'David Guetta & MORTEN – Impossible (ft. John Martin)',
      subHeader: 'Letra',
      message: "I know the world is burning<br>But we still got a chance<br>I know that we could beat impossible<br>Impossible, you and I<br><br>Impossible, you and I<br>Impossible, you and I<br><br>Close your eyes<br>In the bright lights<br>Can you see me in your mind like I see you?<br>I remember<br>All the years gone by<br>As we're slipping into the ever-fading night<br><br>Listen to me now<br>I know the world is burning<br>But we still got a chance<br>I know that we could beat impossible<br>Impossible, you and I<br>Even if we are hurting<br>We've still got half a chance<br>I know that we could beat impossible<br>Impossible, you and I<br><br>Impossible, you and I<br>Impossible, you and I<br><br>Even if we are hurting<br>We've still got half a chance<br>I know that we could beat impossible<br>Impossible, you and I",

      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

   async presentAlert10() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Aly & Fila meets Roger Shah feat Adrina Thorpe - Perfect Love',
      subHeader: 'Letra',
      message: "When the light shines<br>Let the light shine in<br>When the light shines, shines, shines<br>Let the light shine in 'till the morning<br><br>Perfect Love casts away all fear<br>You know the truth will set you free, free<br>I am not who I was before<br>Swimming deep in a sea of love<br><br>Love's the way<br>Love's the truth<br>Love's the life<br><br>Love is here<br>Love's not dead<br>Love's alive<br><br>Oh, your love is all around<br>Like the rain and the sunlight falling down<br>Like the wind, I breathe you in<br>I'm alive, I'm alive in you",
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

   async presentAlert11() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Dr. Dre ft. Snoop Dogg, Kurupt, Nate Dogg - The Next Episode',
      subHeader: 'Letra',
      message: "Da, da, da, da, da<br>It's the motherfuckin' D-O-double-G (Snoop Dogg!)<br>Da, da, da, da, da<br>You know I'm mobbin' with the D.R.E. (Yeah, yeah, yeah)<br>You know who's back up in this motherfucker! (What, what, what, what?)<br>So blaze the weed up then! (Blaze it up, blaze it up!)<br>Blaze that shit up, nigga... yeah 'Sup Snoop?<br><br>Top Dogg, bite 'em all, nigga, burn that shit up<br>D-P-G-C, my nigga, turn that shit up<br>C-P-T, L-B-C, yeah, we hookin' back up<br>And when they bang this in the club, baby, you got to get up<br>Thug niggas, drug dealers, yeah, they givin' it up<br>Lowlife, yo' life, boy, we livin' it up<br>Takin' chances while we dancin' in the party fo' sho'<br>Slip my hoe a 44 when she got in the back do'<br>Bitches lookin' at me strange but you know I don't care<br>Step up in this motherfucker just a-swingin' my hair<br>Bitch quit talkin', crip-walk if you're down with the set<br>Take a bullet with some dick and take this dope on this jet<br>Out o' town, put it down for the Father of Rap<br>And if yo' ass get cracked, bitch, shut your trap<br>Come back, get back, that's the part of success<br><br>If you believe in the S, you'll be relievin' your stress<br><br>Da, da, da, da, da<br>It's the motherfuckin' D.R.E. (Dr. Dre, motherfucker!)<br>Da, da, da, da, da<br>You know I'm mobbin' with the D-O-double-G<br>Straight off the fuckin' streets of C-P-T<br>King of the beats—you ride to 'em in your Fleet- (Fleetwood!)<br>Wood Coupe DeVille rollin' on dubs<br>How you feel—whoopty-whoop—nigga what?<br>Dre and Snoop chronic'd out in the 'lac (In the 'lac!)<br>With Doc in the back, sippin' on 'gnac (Yeah)<br>Clip in the strap, dippin' through 'hoods (What 'hoods?)<br>Compton, Long Beach, Inglewood!<br>South Central out to the Westside (Westside)<br>It's California Love, this California bud got a nigga gang o' pub<br>I'm on one, I might bail up in the Century Club<br>With my jeans on and my team strong<br>Get my drink on and my smoke on<br>Then go home wit' somethin' to poke on (Wha'sup bitch?)<br><br>Loc', it's on for the two-triple-oh<br>Comin' real, it's the next episode<br><br>Hold up, hey<br>For my niggas who be thinkin' we soft<br>We don't play<br>We gon' rock it 'til the wheels fall off<br>Hold up, hey<br>For my niggas who be actin' too bold<br>Take a seat<br>Hope you ready for the next episode—<br>Hey<br>Smoke weed everday",
    buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

   async presentAlert12() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Eminem - Lose Yourself',
      subHeader: 'Letra',
      message: "Look<br>If you had<br>One shot<br>Or one opportunity<br>To seize everything you ever wanted<br>In one moment<br>Would you capture it<br>Or just let it slip?<br><br>Yo<br>His palms are sweaty, knees weak, arms are heavy<br>There's vomit on his sweater already, mom's spaghetti<br>He's nervous, but on the surface he looks calm and ready<br>To drop bombs, but he keeps on forgettin'<br>What he wrote down, the whole crowd goes so loud<br>He opens his mouth, but the words won't come out<br>He's chokin', how, everybody's jokin' now<br>The clocks run out, times up, over, blaow<br>Snap back to reality, ope there goes gravity<br>Ope, there goes Rabbit, he choked<br>He's so mad, but he won't give up that easy? No<br>He won't have it, he knows his whole back's to these ropes<br>It don't matter, he's dope, he knows that, but he's broke<br>He's so stagnant, he knows, when he goes back to this mobile home, that's when it's<br>Back to the lab again, yo, this whole rhapsody<br>Better go capture this moment and hope it don't pass him<br><br>You better lose yourself in the music, the moment<br>You own it, you better never let it go<br>You only get one shot, do not miss your chance to blow<br>This opportunity comes once in a lifetime<br><br>You better lose yourself in the music, the moment<br>You own it, you better never let it go<br>You only get one shot, do not miss your chance to blow<br>This opportunity comes once in a lifetime<br>You better<br><br>His soul's escaping, through this hole that is gaping<br>This world is mine for the taking<br>Make me king, as we move toward a New World Order<br>A normal life is borin', but super stardom's close to post mortem<br>It only grows harder, only grows hotter<br>He blows, it's all over, these hoes is all on him<br>Coast to coast shows, he's known as the Globetrotter<br>Lonely roads, God only knows, he's grown farther from home, he's no father<br>He goes home and barely knows his own daughter<br>But hold your nose 'cause here goes the cold water<br>These hoes don't want him no mo', he's cold product<br>They moved on to the next schmo who flows, he nose dove and sold nada<br>So the soap opera is told and unfolds, I suppose it's old partna, but the beat goes on<br>Da-da-dum, da-dum, da-da<br><br>You better lose yourself in the music, the moment<br>You own it, you better never let it go<br>You only get one shot, do not miss your chance to blow<br>This opportunity comes once in a lifetime<br><br>You better lose yourself in the music, the moment<br>You own it, you better never let it go<br>You only get one shot, do not miss your chance to blow<br>This opportunity comes once in a lifetime<br>You better<br><br>No more games, I'ma change what you call rage<br>Tear this motherfuckin' roof off like two dogs caged<br>I was playin' in the beginnin', the mood all changed<br>I been chewed up and spit out and booed off stage<br>But I kept rhymin' and stepped right in the next cypher<br>Best believe somebody's payin' the Pied Piper<br>All the pain inside amplified by the<br>Fact that I can't get by with my nine to<br>Five and I can't provide the right type of<br>Life for my family 'cause man, these goddamn food stamps don't buy diapers<br>And its no movie, there's no Mekhi Phifer<br>This is my life and these times are so hard<br>And it's getting even harder tryna feed and water my seed, plus<br>Teeter totter, caught up between bein' a father and a prima donna<br>Baby mama drama, screamin' on her, too much<br>For me to wanna stay in one spot, another day of monotony's<br>Gotten me to the point, I'm like a snail I've got<br>To formulate a plot or end up in jail or shot<br>Success is my only motherfuckin' option, failure's not<br>Mom, I love you, but this trailer's got to go, I cannot grow old in Salem's Lot<br>So here I go, is my shot<br>Feet, fail me not, this may be the only opportunity that I got<br><br>You better lose yourself in the music, the moment<br>You own it, you better never let it go<br>You only get one shot, do not miss your chance to blow<br>This opportunity comes once in a lifetime<br><br>You better lose yourself in the music, the moment<br>You own it, you better never let it go<br>You only get one shot, do not miss your chance to blow<br>This opportunity comes once in a lifetime<br>You better<br><br>You can do anything you set your mind to, man",
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

   async presentAlert13() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Movimiento Original - Grandes Pasos',
      subHeader: 'Letra',
      message: "Oh-ho', pow-pow (Wa'-wa')<br>(Shala-lala-lala-lalá) Movimiento Original<br>Oh-oh<br>Ay-oh<br><br>Los primeros pasos que quisiste dar<br>Yo sé que te costaron mucho poderlos pagar<br>Y me imagino que es por los mismos individuos<br>De pensamiento cretino que quieren hacerte fracasar<br><br>Yo sé que tú eres mas fuerte, un chico valiente<br>Dispuesto a derrotar a su oponente<br>Y no vayas a confiar en aquel mal<br>Que lo único que desea es ver tu muerte<br><br>Pues, siéntate en frente y empújalo del puente<br>Deja que le envenenen todo el vientre, sapiente serpiente<br>Él no merece ser combinado con tu gente<br>Se está ganando un cupo de balazo' en la frente<br><br>Yo sé que si le pones empeño<br>Vas a realizar todo sueño<br>Yo sé que teniendo fe<br>Creyente, darás a luz todo lo que tengas en mente<br><br>Hey, mira, ven a ver; yo sé que se puede<br>Él rima por doquier, gracias a su grande esfuerzo<br>Él no se rinde aunque sea indebido<br>Y aún así, él vive estando intranquilo<br><br>Así que, ven a ver cómo fue que él surgió<br>Así que, ven a ver cómo fue que él creció (Ven a verlo)<br>Encierro de mi sentimiento<br>Así que ahora, más que nunca, estáte atento<br><br>No me voy a preguntar<br>Si es que surgí ahora es<br>Porque nunca nadie a mí me hizo callar (A mí me hizo callar)<br>Así que, ven a ver; así que, ven a ver<br><br>Y voy en busca porque creo mi talento<br>Porque voy atrapado en este movimiento<br>Que escucha, doy mi ciento por ciento<br>MC Bro' con un original movimiento<br><br>Voy en busca porque creo mi talento<br>Porque voy atrapado en este movimiento<br>Que escucha, doy mi ciento por ciento<br>MC Bro' con un original movimiento<br><br>Y, a ver si con la fe<br>Tú puedes conectar tu fuerza para vencer<br>Tienes que mantenerte en pie, yo'<br>La fuerza está en ti, mi Señor<br><br>Y, a ver si con la fe<br>Tú puedes conectar tu fuerza para vencer<br>Tienes que mantenerte en pie, yo'<br>La fuerza está en ti, mi Señor<br><br>Oh<br>Uoh-uoh-uoh, uoh-oh-oh-oh, oh-oh<br>Uoh-uoh-uoh-uoh-uoh<br><br>Así que, ven a ver cómo fue que él surgió<br>Así que, ven a ver cómo fue que él creció<br>Encierro de mi sentimiento<br>Así que ahora, más que nunca, estáte atento<br><br>Así que, ven a ver cómo fue que él surgió<br>Así que, ven a ver cómo fue que él creció<br>Encierro de mi sentimiento<br>Así que ahora, más que nunca, estáte atento<br><br>Y voy en busca porque creo mi talento<br>Porque voy atrapado en este movimiento<br>Que escucha, doy mi ciento por ciento<br>MC Bro' con un original movimiento<br><br>Voy en busca porque creo mi talento<br>Porque voy atrapado en este movimiento<br>Que escucha, doy mi ciento por ciento<br>MC Bro' con un original movimiento<br><br>Y, a ver si con la fe<br>Tú puedes conectar tu fuerza para vencer<br>Tienes que mantenerte en pie, yo'<br>La fuerza está en ti, mi Señor<br><br>Y, a ver si con la fe<br>Tú puedes conectar tu fuerza para vencer<br>Tienes que mantenerte en pie, yo'<br>La fuerza está en ti, mi Señor",
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

   async presentAlert14() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Liricistas - Estilo Libre',
      subHeader: 'Letra',
      message: "Yeah!<br>4 Life<br>Dos mil tentaciones<br>Liricistas en la casa<br>Qué pasa!<br>Estilo libre es la cosa<br>¡Oh conchetumare!!<br>Perro culiao!<br>Chupa el pico<br><br>Estilo libre, suena el timbre<br>Reunión de MC's<br>Sin miedo vocales son volcanes en plena síntesis<br>En el rincón lejano vamos jugando con palabras<br>Preparando un drama de vértigo pa' mandarte a la cama<br><br>Ya no tengo mente sana<br>Fumamo' no somos lana<br>Calla cabrón enrolla un blunt pa' la semana<br>Mirame a los ojos, rojos, oye flojo<br>Ando como piojo, oiga nena cuidao que la mojo<br>Entreno en el Dojo de la cuneta más próxima<br>En la banca de las aralias huele a resina toxica<br>La posi-bilidad de matar en un circulo<br><br>La tengo al margen rescantado discípulos<br>Disimulo, casi nunca un beat box palpita<br>Ojos cerraos', manos se mueven, la gente grita<br>Algunos tiritan, se complican y dan pura pena<br>Otros llenan mal rincón encajando a la vena<br><br>¿Entrena? Nada fluye como el humito verde<br>En este montón de mentes al filo nadie pierde<br>Siente la sensación de lanzarse a lo que salga<br>Muerde frases ajilas, deslumbra<br>No sea una carga<br>Que valga, la pena<br>20 segundos de locura<br>Procura estar bien, el alcohol traiciona y no se modula<br>Se acumulan las ganas de estar bajo la bruma nocturna<br>4 life quemando improvisaciones<br>¡Quien se suma!<br><br>No hagas planes, planea<br>Y fuma pa' relajarte<br>Inyectarte en un beat, haha<br>Sentarse y soltarse<br>No hagas planes, planea<br>Y fuma pa' relajarte<br>Inyectarte en un beat<br>Sentarse y soltarse<br>Libertad para actuar!<br>En cada frase!<br>Beatbox machine!<br>Que venga alguien que la calce!<br>Va-mos, a puro estilo libre<br>Apunta-mos, palabra de grueso calibre<br><br>El frío de la sate no es como el de alaska pero igual está fuerte<br>Si vas para el CDLV o al texas le deseo suerte<br>Molido en risas la cosa es concisa<br>Concisar con la gente precisa<br>Permiso pa' cielo revisa<br>No se compra con VISA<br>Por el verso deslizar<br>Apoyamos la causa que pasa a la<br>Planta legalizar<br><br>Gente en misa y sumisa<br>Así no cumplen su misión<br>Mi visión es mas vicios pa' mi y que aguante la presión<br>(¿Viviras sentao' en el sofá?)<br>Hermano, mejor que te mates<br>No apagues la tv, piensa y has algo pa' que cambie<br><br>Van zombies los domingos, no están cansados por el baile<br>Yo no voy pa' Argentina pero paso entre Buenos Aires<br>Cuéntale que volvimos, pa' que sepan, pa' que despailen<br>Se van con lo que saben, en la vena y olvida el dolor<br>Por mi parte encuentro paz cuando encuentro encendedor<br>(Common man, Baby common)<br>A lo lagartija, no traigo valija y no pienso irme<br>Oye benja<br><br>Mucho bla-bla por que no sirve<br>No hagas planes, planea<br>Y fume pa' relajarse, volverse loco de beats<br>Es cosa de sentarse y soltarse<br>No hagas planes, planea<br>Y fuma pa' relajarte<br>Inyectarte en un beat, haha<br>Sentarse y soltarse<br><br>No hagas planes, planea<br>Y fuma pa' relajarte<br>Inyectarte en un beat<br>Sentarse y soltarse<br>Libertad para actuar!<br>En cada frase!<br>Beatbox machine!<br>Que venga alguien que la calce!<br>Va-mos, a puro estilo libre<br>Apunta-mos, palabra de grueso calibre! Puah!",
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

   async presentAlert15() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'THE SCOTTS, Travis Scott, Kid Cudi - THE SCOTTS',
      subHeader: 'Letra',
      message: "Let's go<br><br>We see the hype outside (yeah)<br>Right from the house, uh<br>Took it straight from outside (yeah)<br>Straight to the couch<br>We put the mic outside (yeah)<br>Air that shit out, uh<br>You lettin' the Scotts outside (yeah)<br>We runnin' the scouts<br>Ain't no controllin' the gang (yeah, yeah, yeah)<br>They never leave<br>I got tats over my veins (yeah)<br>'Cause that what I bleed<br>She drink a lot of the bourbon (yeah)<br>Like she from the street, uh<br>We got control of the flows and, huh, uh, uh (yeah, mm)<br>We heard that your wave went dry (yeah)<br>We floodin' the drought, uh (mm)<br>Heard that your hood outside (yeah)<br>We added some routes (mm)<br>We havin' the goods outside (mm)<br>Move it in and out (mm)<br>You lettin' the Scotts outside (mm)<br>We runnin' the scouts<br><br>Nigga, the cops outside (yeah)<br>Lock up the house (yeah, yeah)<br>We keep the team on high (huh)<br>Some gold in they mouth (yeah, yeah)<br>Nigga, the Porsche outside (huh)<br>Without the top (yeah, nigga, yeah, yeah)<br>She want a mimosa-sa (yeah)<br>Bring in the shots (yeah, yeah, yeah)<br>Tell these phony bitches 'beat it'<br>With that Photoshoppin', body Adobe, help me<br>She in there makin' panini, she know I got all the bread<br>She know me, got it<br>On my hustle, havin' visions<br>It's been a minute since my niggas done owned it, howdy (huh, huh)<br>Cleveland boy, he make 'em pay<br>Yes, that Cleveland boy, he done made a way, hey<br>Headed for somewhere to go, anywhere cinema these, these<br>Niggas don't know where to go<br>Gotta keep givin' 'em heat, heat (yeah)<br>Time to go double though, time they add up the math, math<br>And I've been dealin' with so many things, havin' so many dreams<br><br>Let's go",
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlert16() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Amar Azul - Me Pega la Cerveza',
      subHeader: 'Letra',
      message: "Y me pega<br>Me pega... me pega la cerveza...<br>Yo sigo bailando<br>Yo sigo bailando<br>Estoy muy loco<br>Y muy borracho<br>La locura me está pegando<br>Ya no se quien soy<br>Yo le sigo dando<br>Duro a la botella<br>Y me pega el escabio<br>Se me está subiendo a la cabeza<br>No se dond evoy<br><br>Y me pega... me pega<br>Me pega... me pega la ccerveza<br>Y me sube... me sube<br>Me sube... me sube a la cabeza<br><br>Yo le sigo dando<br>Duro a la botella<br>Y me pega el escabio<br>Se me esta subiendo a la cabeza<br>No sé donde voy<br><br>Y me pega... me pega<br>Me pega... me pega la cerveza...<br>Y me sube... me sube<br>Me sube... me sube a la cabeza",
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlert17() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Rafaga - Suave',
      subHeader: 'Letra',
      message:  "Suave, suave, suavecito<br>Goza así, muy despacito<br>Tu piel siente mis latidos<br>Nena, ya no juegues más<br><br>Noches bajo la luna, días de sol, días de mar<br>Perdidos en la locura, esto no puede parar<br>Yo me abrazo a tu cintura y esto me empieza a gustar<br>Te mueves como ninguna, sé que me vas a matar<br><br>Suave, suave, suavecito<br>Goza así muy despacito<br>Tu piel siente mis latidos<br>Nena, ya no juegues más<br><br>Suave, suave, suavecito<br>Goza así muy despacito<br>Tu piel siente mis latidos<br>Nena, ya no juegues más, ¡eh-eh!<br><br>Noches bajo la luna, días de sol, días de mar<br>Perdidos en la locura, esto no puede parar<br>Yo me abrazo a tu cintura y esto me empieza a gustar<br>Te mueves como ninguna, sé que me vas a matar<br><br>Suave, suave, suavecito<br>Goza así muy despacito<br>Tu piel siente mis latidos<br>Nena, ya no juegues más<br><br>Suave, suave, suavecito<br>Goza así muy despacito<br>Tu piel siente mis latidos<br>Nena, ya no juegues más, ¡eh-eh!",
      buttons: ['OK']
    });
    

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlert18() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Amar Azul - Yo Tomo Licor',
      subHeader: 'Letra',
      message: "Así mi amor<br>Esto es Amar Azul<br>Cumbia nena<br>¿Y cómo dice?<br><br>Yo tomo licor, yo tomo cerveza<br>Y me gustan las chicas<br>Y la cumbia me divierte y me excita<br>Salgo a caminar<br>Recorro boliches<br>Me pierdo en las noches<br>Vivimos cosas buenas junto a mis amigos<br><br>En la noche me la paso divirtiéndome<br>En la noche me la paso delirándome<br>En la noche me la paso divirtiéndome<br>En la noche me la paso delirándome<br><br>Cumbia nena<br>Amar Azul para vos<br>Mueve las caderas<br><br>Yo tomo licor, yo tomo cerveza<br>Y me gustan las chicas<br>Y la cumbia me divierte y me excita<br>Salgo a caminar<br>Recorro boliches<br>Me pierdo en las noches<br>Vivimos cosas buenas junto a mis amigos<br><br>En la noche me la paso divirtiéndome<br>En la noche me la paso delirándome<br>En la noche me la paso divirtiéndome<br>En la noche me la paso delirándome<br><br>Así amor<br>Amar Azul",
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  async presentAlert19() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'La Cumbia - Porque te Amo',
      subHeader: 'Letra',
      message: "Arriba!<br>¿Querias cumbia?<br>Toma!<br><br>Y este es el sabor de La Cumbia<br><br>Cuando te veo mi amor<br>Se me paraliza el corazón<br>Y tu mirada de a poquito me enloquece<br><br>Cuando te beso mi amor<br>Siento como una electricidad<br>Que recorre por mis venas<br>Hasta llegar al corazón<br><br>Estoy enamorado de ti<br>Quiero entregarte todo mi corazón<br>Porque te amo con locura y pasion<br>Yo no quiero perderte nunca mi amor<br><br>Porque te amo<br>Porque te amo estoy aqui<br>Porque a tu lado me siento feliz<br>Como nunca antes<br>Con otra mujer me he sentido<br><br>Porque te amo estoy aqui<br>Porque a tu lado me siento feliz<br>Con el amor que tu me brindas<br>Vives en mi corazón<br>Porque te amo<br><br>Sabor<br>Y como dice, La cumbia<br><br>Cuando te veo mi amor<br>Se me paraliza el corazón<br>Y tu mirada de a poquito me enloquece<br><br>Cuando te beso mi amor<br>Siento como una electricidad<br>Que recorre por mis venas<br>Hasta llegar al corazón<br><br>Estoy enamorado de ti<br>Quiero entregarte todo mi corazón<br>Porque te amo con locura y pasion<br>Yo no quiero perderte nunca mi amor<br>Porque te amo<br><br>Porque te amo estoy aqui<br>Porque a tu lado me siento feliz<br>Como nunca antes<br>Con otra mujer me he sentido<br><br>Porque te amo estoy aqui<br>Porque a tu lado me siento feliz<br>Con el amor que tu me brindas<br>Vives en mi corazón<br><br>Porque te amo<br>Porque te amo<br>Porque te amo<br>Porque te amo<br><br>Porque te amo<br>Porque te amo<br>Porque te amo...",
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  async presentAlert20() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Noche de Brujas - Me gusta todo de ti',
      subHeader: 'Letra',
      message: "Noche de Brujas<br><br>Con palabras sencillas hoy quiero decirte<br>Me gustas de pies a cabeza<br>Es más claro que el agua que te necesito<br>Me gustas todita completa<br><br>Y es que tu belleza es incomparable<br>La naturaleza fue buena contigo<br>Hice la elección correcta al elegirte<br>Para estar siempre conmigo<br><br>Me gusta todo de ti<br>Tu sonrisa, tus ojos, tu cara<br>Y esa forma tan dulce de hablarme<br>Si me besas me llevas al cielo<br>Siento ser el aire<br><br>Me gusta todo de ti<br>Eres linda por dentro y por fuera<br>A tu lado todo es tan perfecto<br>Eres más de lo que yo merezco<br>Y sin duda alguna, ¡Cuánto me gustas!<br><br>Cumbia<br>(Noche de Brujas)<br><br>Y es que tu belleza es incomparable<br>La naturaleza fue buena contigo<br>Hice la elección correcta al elegirte<br>Para estar siempre conmigo<br><br>Me gusta todo de ti<br>Tu sonrisa, tus ojos, tu cara<br>Y esa forma tan dulce de hablarme<br>Si me besas me llevas al cielo<br>Siento ser el aire<br><br>Me gusta todo de ti<br>Eres linda por dentro y por fuera<br>A tu lado todo es tan perfecto<br>Eres más de lo que yo merezco<br>Y sin duda alguna, ¡Cuánto me gustas!<br><br>Hay que rico<br>Cúmbialo, cúmbialo<br><br>Me gusta todo de ti<br>Tu sonrisa, tus ojos, tu cara<br>Y esa forma tan dulce de hablarme<br>Si me besas me llevas al cielo<br>Siento ser el aire<br><br>Me gusta todo de ti<br>Eres linda por dentro y por fuera<br>A tu lado todo es tan perfecto<br>Eres más de lo que yo merezco<br>Y sin duda alguna, ¡Cuánto me gustas!<br><br>Ay ay ay ay ay<br>Eha",
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

    async presentAlert21() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'AC/DC - Back In Black',
      subHeader: 'Letra',
      message: "Back in black<br>I hit the sack<br>I've been too long, I'm glad to be back<br>Yes, I'm let loose<br>From the noose<br>That's kept me hanging about<br>I've been looking at the sky<br>'Cause it's gettin' me high<br>Forget the hearse 'cause I never die<br>I got nine lives<br>Cat's eyes<br>Abusin' every one of them and running wild<br><br>'Cause I'm back<br>Yes, I'm back<br>Well, I'm back<br>Yes, I'm back<br>Well, I'm back, back<br>Well, I'm back in black<br>Yes, I'm back in black<br><br>Back in the back<br>Of a Cadillac<br>Number one with a bullet, I'm a power pack<br>Yes, I'm in a bang<br>With a gang<br>They've got to catch me if they want me to hang<br>'Cause I'm back on the track<br>And I'm beatin' the flack<br>Nobody's gonna get me on another rap<br>So look at me now<br>I'm just makin' my play<br>Don't try to push your luck, just get out of my way<br><br>'Cause I'm back<br>Yes, I'm back<br>Well, I'm back<br>Yes, I'm back<br>Well, I'm back, back<br>Well, I'm back in black<br>Yes, I'm back in black<br><br>Well, I'm back, yes, I'm back<br>Well, I'm back, yes, I'm back<br>Well, I'm back, back<br>Well, I'm back in black<br>Yes, I'm back in black<br><br>Oh, yeah<br>Oh, yeah<br>Take my love<br>Oh, yeah, yeah<br>Oh, yeah, yeah, ooh, yeah<br>Well, I'm back (I'm back)<br>Back (I'm back)<br>Back (I'm back)<br>Back (I'm back)<br>Back (I'm back)<br>Back<br>Back in black<br>Yes, I'm back in black<br>I've hit the sack",
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

    async presentAlert22() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: "Guns N' Roses - Welcome To The Jungle",
      subHeader: 'Letra',
      message: "Oh my god<br><br>Jump<br><br>Welcome to the jungle, we've got fun and games<br>We got everything you want honey, we know the names<br>We are the people that can find whatever you may need<br>If you got the money, honey, we got your disease<br><br>In the jungle, welcome to the jungle<br>Watch it bring you to your sha-n-n-n-n-n-n-n-n knees, knees<br>Mwah, I, I wanna watch you bleed<br><br>Welcome to the jungle, we take it day by day<br>If you want it you're gonna bleed but it's the price to pay<br>And you're a very sexy girl who's very hard to please<br>You can taste the bright lights but you won't get there for free<br>In the jungle, welcome to the jungle<br>Feel my, my, my, my serpentine<br>Ooh, ah, I want to hear you scream<br><br>Welcome to the jungle, it gets worse here every day<br>You learn to live like an animal in the jungle where we play<br>If you got hunger for what you see you'll take it eventually<br>You can have anything you want but you better not take it from me<br><br>In the jungle, welcome to the jungle<br>Watch it bring you to your sha-n-n-n-n-n-n-n-n knees, knees<br>Mwah, I'm gonna watch you bleed<br><br>And when you're high, you never ever wanna come down<br>So down, so down, so down, yeah<br><br>You know where you are?<br>You're in the jungle, baby, you're gonna die<br>In the jungle, welcome to the jungle<br>Watch it bring you to your sha-n-n-n-n-n-n-n-n-knees, knees<br>In the jungle, welcome to the jungle<br>Feel my, my, my my, serpentine<br>Jungle, welcome to the jungle<br>Watch it bring you to your sha-n-n-n-n-n-n-n-n-knees, knees<br>Down In the jungle, welcome to the jungle<br>Watch it bring you to you<br>It's gonna bring you down, huh",
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

    async presentAlert23() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Queen - Another One Bites the Dust',
      subHeader: 'Letra',
      message: "Let's go<br><br>Steve walks warily down the streeo<br>With his brim pulled way down loo<br>Ain't no sound but the sound of his feeo<br>Machine guns ready to go<br>Are you ready hey are you ready for thiso<br>Are you hanging on the edge of your seato<br>Out of the doorway the bullets rio<br>To the sound of the beat yeao<br><br>Another one bites the duso<br>Another one bites the duso<br>And another one gone and another one gono<br>Another one bites the duso<br>Hey I'm gonna get you too<br>Another one bites the duso<br><br>How do you think I'm going to get alono<br>Without you when you're gono<br>You took me for everything that I hao<br>And kicked me out on my owo<br>Are you happy are you satisfiedo<br>How long can you stand the heao<br>Out of the doorway the bullets rio<br>To the sound of the beat look ouo<br><br>Another one bites the duso<br>Another one bites the duso<br>And another one gone and another one gono<br>Another one bites the duso<br>Hey I'm gonna get you too<br>Another one bites the duso<br><br>Heo<br><br>Oh take it - Bite the dust bite the duso<br>Hey Another one bites the duso<br>Another one bites the dust oo<br>Another one bites the dust he ho<br>Another one bites the dust haaao<br>Ooh shoot ouo<br><br>There are plenty of ways that you can hurt a mao<br>And bring him to the grouno<br>You can beat hio<br>You can cheat hio<br>You can treat him bad and leave hio<br>When he's dowo<br>But I'm ready yes I'm ready for yoo<br>I'm standing on my own two feeo<br>Out of the doorway the bullets rio<br>Repeating to the sound of the beao<br>Another one bites the duso<br>Another one bites the duso<br>And another one gone and another one gono<br>Another one bites the dust yeao<br>Hey I'm gonna get you too<br>Another one bites the duso<br>Shoot out",
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlert24() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Metallica - The Unforgiven',
      subHeader: 'Letra',
      message: "New blood joins this Earth<br>And quickly he's subdued<br>Through constant pained disgrace<br>The young boy learns their rules<br><br>With time the child draws in<br>This whipping boy done wrong<br>Deprived of all his thoughts<br>The young man struggles on and on, he's known<br>Ooh, a vow unto his own<br>That never from this day<br>His will they'll take away<br><br>What I've felt<br>What I've known<br>Never shined through in what I've shown<br>Never be<br>Never see<br>Won't see what might have been<br><br>What I've felt<br>What I've known<br>Never shined through in what I've shown<br>Never free<br>Never me<br>So I dub thee unforgiven<br><br>They dedicate their lives<br>To running all of his<br>He tries to please them all<br>This bitter man he is<br><br>Throughout his life the same<br>He's battled constantly<br>This fight he cannot win<br>A tired man they see no longer cares<br>The old man then prepares<br>To die regretfully<br>That old man here is me<br><br>What I've felt<br>What I've known<br>Never shined through in what I've shown<br>Never be<br>Never see<br>Won't see what might have been<br><br>What I've felt<br>What I've known<br>Never shined through in what I've shown<br>Never free<br>Never me<br>So I dub thee unforgiven<br><br>What I've felt<br>What I've known<br>Never shined through in what I've shown<br>Never be<br>Never see<br>Won't see what might have been<br><br>What I've felt<br>What I've known<br>Never shined through in what I've shown<br>Never free<br>Never me<br>So I dub thee unforgiven<br>Oh, oh, oh<br><br>Never free<br>Never me<br>So I dub thee unforgiven<br><br>You labeled me<br>I'll label you<br><br>So I dub thee unforgiven<br>Never free<br>Never me<br>So I dub thee unforgiven<br><br>You labeled me<br>I'll label you<br>So I dub thee unforgiven<br><br>Never free<br>Never me<br>So I dub thee unforgiven",
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

    async presentAlert25() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Survivor - Eye of the Tiger',
      subHeader: 'Letra',
      message: "Rising up, back on the street<br>Did my time, took my chances<br>Went the distance, now I'm back on my feet<br>Just a man and his will to survive<br><br>So many times it happens too fast<br>You change your passion for glory<br>Don't lose your grip on the dreams of the past<br>You must fight just to keep them alive<br><br>It's the eye of the tiger<br>It's the thrill of the fight<br>Rising up to the challenge of our rival<br>And the last known survivor<br>Stalks his prey in the night<br>And he's watching us all with the eye of the tiger<br><br>Face to face, out in the heat<br>Hanging tough, staying hungry<br>They stack the odds 'til we take to the street<br>For the kill with the skill to survive<br><br>It's the eye of the tiger<br>It's the thrill of the fight<br>Rising up to the challenge of our rival<br>And the last known survivor<br>Stalks his prey in the night<br>And he's watching us all with the eye of the tiger<br><br>Rising up straight to the top<br>Had the guts, got the glory<br>Went the distance, now I'm not going to stop<br>Just a man and his will to survive<br><br>It's the eye of the tiger<br>It's the thrill of the fight<br>Rising up to the challenge of our rival<br>And the last known survivor<br>Stalks his prey in the night<br>And he's watching us all with the eye of the tiger<br>The eye of the tiger<br>The eye of the tiger<br>The eye of the tiger<br>The eye of the tiger",
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
