const sodaRutas = require("./soda.router");
const ceratiRutas = require("./cerati.router");

const routerApi = (app) => {
    app.use("/soda", sodaRutas);
    app.use("/cerati", ceratiRutas);
}
module.exports = routerApi;