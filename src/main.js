import App from "./App.svelte";
import "./index.css";

const app = new App({
  target: document.body,
  props: {
    name: "world"
  }
});

window.app = app;

export default app;
