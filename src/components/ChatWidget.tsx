import { useEffect } from "react";

const SCRIPT_ID = "leadconnector-chat-widget";
const WIDGET_ID = "69f54068e9677e19182a0a5c";

/**
 * Loads the official LeadConnector (GHL) Chat Widget on every route.
 * This is the single official opt-in channel during GHL preflight validation.
 */
const ChatWidget = () => {
  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.async = true;
    script.setAttribute(
      "data-resources-url",
      "https://widgets.leadconnectorhq.com/chat-widget/loader.js"
    );
    script.setAttribute("data-widget-id", WIDGET_ID);
    script.setAttribute("data-source", "WEB_USER");
    document.body.appendChild(script);
  }, []);

  return null;
};

export default ChatWidget;
