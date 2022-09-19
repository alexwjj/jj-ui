import { App, Plugin } from "vue";
import Button from "./src/button";

export const ButtonPlugin: Plugin = {
  install(app: App) {
    app.component("t-button", Button);
  },
};

export { Button };
