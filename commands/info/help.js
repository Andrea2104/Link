const {
    Client,
    MessageEmbed,
    Message,
    MessageActionRow,
    MessageSelectMenu
} = require("discord.js");

module.exports = {
    name: "help",
    description: "shows bot information",

    async execute(client, message, args) {
        const directories = [...new Set(client.commands.map(cmd => cmd.directory)), ];
        
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
          }

        const categories = directories.map((dir) => {
            const getCommands = client.commands.filter((cmd) => cmd.directory === dir
            ).map(cmd => {
                return{
                    name: cmd.name || "Name undefined",
                    description: cmd.description || "Description undefined",
                };
            });

        return {
            directory: capitalizeFirstLetter(dir),
            commands: getCommands,
        }

        });

        const embed = new MessageEmbed()
        .setDescription("Choose a category from the list.");

        const components = (state) => [
            new MessageActionRow().addComponents(
                new MessageSelectMenu()
                .setCustomId("help-menu")
                .setPlaceholder("Please select a category")
                .setDisabled(state)
                .addOptions(
                    categories.map((cmd) => {
                        return{
                            label: cmd.directory,
                            value: cmd.directory.toLowerCase(),
                            description: `Commands in ${cmd.directory} category`,
                            
                        };
                    })
                )
            )
        ];
   
        const initialMessage = await message.channel.send({
            embeds: [embed],
            components: components(false),
        });

        const filter = (interaction) => interaction.user.id === message.author.id;

        const collector = message.channel.createMessageComponentCollector({
            filter, 
            componentType: 'SELECT_MENU', 
            //time: 5000
        });

            collector.on('collect', (interaction) => {
                const [directory] = interaction.values;
                const category = categories.find(x => x.directory.toLowerCase() === directory);

                const categoryEmbed = new MessageEmbed()
                .setTitle(`${directory} commands`)
                .setDescription(`List of Commands`)
                .setColor("#066dad")
                .addFields(
                    category.commands.map((cmd) => {
                        return{
                            name: `\`${cmd.name}\``,
                            value: cmd.description,
                            inline: true
                        }
                    })
                )

                interaction.update({embeds: [categoryEmbed]});
            });

            collector.on('end', () => {
                initialMessage.edit( {components: components(true)} )
            })
    }


};