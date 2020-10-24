import MainController from "./controllers/MainController.js";
import "./app.scss";
// import axios from "axios";

document.addEventListener("DOMContentLoaded", () => {
  new MainController();
});
// document.addEventListener("DOMContentLoaded", async () => {
//   new MainController();
//   const { data } = await axios.get("/api/keywords");
//   return data;
// });
