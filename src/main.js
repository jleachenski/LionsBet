import "dotenv/config";
import e from "express";
import user_router from "./http/routes/user-route.js";
import roullete_bet_router from "./http/routes/roullete-bet-route.js";
import jackpot_bet_router from "./http/routes/jackpot-bet-route.js";
import sicbo_bet_router_capri from "./http/routes/sicbo-bet-route-gbc.js";
import craps_bet_router_kevin from "./http/routes/craps-bet-route-kevin.js";
import dice_bet_router_vincent from "./http/routes/dice-bet-route-vincent.js";
import prize_bet_router_kayke from "./http/routes/prize-bet-router-kayke.js";
import european_roulette_router_jean from "./http/routes/(JEAN FELIPE) european-roulette-route.js";
import head_tails_router_joao from "./http/routes/head-tails-route-joao.js";
import aposta_soma_bet_router_fabio from './http/routes/aposta-soma-bet-route-Fabio.js';
import craps_router_neves from "./http/routes/craps-bet-route-neves.js";
import craps_router_caio from "./http/routes/craps-route-caio.js";
import old_even_reinald_router from "./http/routes/odd-even-reinald-route.js";
const app = e();

app.use(e.json());
app.use("/user", user_router);
app.use("/roullete-bet", roullete_bet_router);
app.use("/jackpot-bet", jackpot_bet_router);
app.use("/sicbo-bet-gbc", sicbo_bet_router_capri)
app.use("/craps-bet-kevin", craps_bet_router_kevin);
app.use("/dice-bet-vincent", dice_bet_router_vincent);
app.use("/prize-bet-kayke", prize_bet_router_kayke);
app.use("/european-roullete-bet-jean", european_roulette_router_jean)
app.use("/headTails-bet-joao", head_tails_router_joao);
app.use('/aposta-soma-bet-fabio', aposta_soma_bet_router_fabio);
app.use("/craps-bet-neves", craps_router_neves);
app.use("/craps-bet-caio", craps_router_caio);
app.use("/old-even-reinald-bet", old_even_reinald_router);

app.listen(process.env.API_PORT, () => {
  console.log("Aplicação rodando");
});
