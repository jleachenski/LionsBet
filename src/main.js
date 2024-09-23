import "dotenv/config";
import e from "express";
import user_router from "./http/routes/user-route.js";
import roullete_bet_router from "./http/routes/roullete-bet-route.js";
import jackpot_bet_router from "./http/routes/jackpot-bet-route.js";
import craps_router_neves from "./http/routes/craps-route.js";
import craps_router_caio from "./http/routes/craps-route-caio.js";
import cho_han_router_alexandre from "./http/routes/cho-han-route-alexandre.js";
const app = e();

app.use(e.json());
app.use("/user", user_router);
app.use("/roullete-bet", roullete_bet_router);
app.use("/jackpot-bet", jackpot_bet_router);
app.use("/craps-bet-neves", craps_router_neves);
app.use("/craps-bet-caio", craps_router_caio);
app.use("/chohan-alexandre", cho_han_router_alexandre);

app.listen(process.env.API_PORT, () => {
  console.log("Aplicação rodando");
});
