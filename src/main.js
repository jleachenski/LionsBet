import "dotenv/config";
import e from "express";
import user_router from "./http/routes/user-route.js";
import roullete_bet_router from "./http/routes/roullete-bet-route.js";
import jackpot_bet_router from "./http/routes/jackpot-bet-route.js";
import lottery_bet_router from "./http/routes/lottery-router-Enzo.js";

import head_tails_router_joao from "./http/routes/head-tails-route-joao.js"
import aposta_soma_bet_router_fabio from './http/routes/aposta-soma-bet-route-Fabio.js';
import craps_router_neves from "./http/routes/craps-bet-route-neves.js";
import craps_router_caio from "./http/routes/craps-route-caio.js";

const app = e();

app.use(e.json());
app.use("/user", user_router);
app.use("/roullete-bet", roullete_bet_router);
app.use("/jackpot-bet", jackpot_bet_router);
app.use("/lottery-bet", lottery_bet_router);
app.use("/headTails-bet-joao", head_tails_router_joao);
app.use('/aposta-soma-bet-fabio', aposta_soma_bet_router_fabio);
app.use("/craps-bet-neves", craps_router_neves);
app.use("/craps-bet-caio", craps_router_caio);

app.listen(process.env.API_PORT, () => {
  console.log("Aplicação rodando");
});
