(() => {
    "use strict";

    const kGumroadProducts = {
        pjtnip: "ChordDock Lite"
    };

    const getProductName = (url) => {
        const productId = url.pathname.split("/").filter(Boolean).pop();
        return kGumroadProducts[productId] || productId || "Unknown Gumroad product";
    };

    document.addEventListener("click", (event) => {
        const link = event.target.closest("a[href]");

        if (link == null)
            return;

        let url;

        try {
            url = new URL(link.href, window.location.href);
        }
        catch {
            return;
        }

        if (url.hostname !== "k2get.gumroad.com" || typeof window.gtag !== "function")
            return;

        window.gtag("event", "gumroad_click", {
            product: getProductName(url),
            product_id: url.pathname.split("/").filter(Boolean).pop(),
            link_text: link.textContent.trim().replace(/\s+/g, " "),
            link_url: url.href
        });
    });
})();
