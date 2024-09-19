import "dotenv/config";
import e from "express";
import user_router from "./http/routes/user-route.js";
import roullete_bet_router from "./http/routes/roullete-bet-route.js";
import jackpot_bet_router from "./http/routes/jackpot-bet-route.js";
import aposta_soma_bet_router from './http/routes/aposta-soma-bet-route-Fabio.js';
const app = e();

app.use(e.json());
app.use("/user", user_router);
app.use("/roullete-bet", roullete_bet_router);
app.use("/jackpot-bet", jackpot_bet_router);
app.use('/aposta-soma-bet', aposta_soma_bet_router);

app.listen(process.env.API_PORT, () => {
  console.log("Aplicação rodando");
});
