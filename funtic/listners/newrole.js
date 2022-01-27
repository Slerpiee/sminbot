module.exports = (client) => {
    client.on('roleCreate', role => {
        console.log("Role created");
        console.log(role)
    });
}