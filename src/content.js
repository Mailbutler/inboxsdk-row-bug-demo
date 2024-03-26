import * as InboxSDK from "@inboxsdk/core";

InboxSDK.load(2, "Hello World!").then((sdk) => {
  sdk.Lists.registerThreadRowViewHandler((threadRowView) => {
    threadRowView.replaceDate({ text: "First" });

    setTimeout(() => threadRowView.replaceDate({ text: "Second" }), 1000);
    setTimeout(() => threadRowView.replaceDate({ text: "Third" }), 2000);
  });
});
