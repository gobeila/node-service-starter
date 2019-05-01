import "@babel/polyfill";
import Koa from "koa";
import Router from "koa-router";

const router = new Router();
const app = new Koa();
const PORT = process.env.PORT || 8081;

router.get("/", async ctx => {
    ctx.body = {
        data: "Sending some JSON",
        person: {
            name: "Valentino",
            lastname: "Gagliardi",
            role: "Web Developer",
            age: 32
        }
    };
});

app.use(router.routes());

const server = app.listen(PORT).on("error", err => {
    console.error(err);
});

export default server;