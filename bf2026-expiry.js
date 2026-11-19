// Public display fallback. Stripe's server-side scheduled stop enforces purchasing.
(() => {
    'use strict';
    const config = {"deadline": "2026-12-03T08:00:00Z", "pages": {"comparison.en.html": {"title": "Chord Dock Edition Comparison (Full) | Lite / Extended / Performance / Full Bundle", "meta": {"description": "The complete, category-by-category feature comparison of all Chord Dock v2.0 editions: Lite, Extended, Performance, and Full Bundle.", "og:title": "Chord Dock Edition Comparison (Full)", "og:description": "Every feature difference across Lite / Extended / Performance / Full Bundle, category by category."}}, "comparison.html": {"title": "Chord Dock エディション比較表（完全版） | Lite / Extended / Performance / Full Bundle", "meta": {"description": "Chord Dock v2.0 の全エディション（Lite / Extended / Performance / Full Bundle）の機能差分を、カテゴリ別の完全版比較表で確認できます。", "og:title": "Chord Dock エディション比較表（完全版）", "og:description": "Lite / Extended / Performance / Full Bundle の機能差分をカテゴリ別に一覧できます。"}}, "editions.en.html": {"title": "Chord Dock Editions | Lite / Extended / Performance / Full Bundle", "meta": {"description": "Browse the full Chord Dock v2.0 edition lineup. Extended goes deeper into harmony, Performance unlocks performing, and Full Bundle includes both — this hub explains each role and how to choose.", "og:title": "Chord Dock Editions | Lite / Extended / Performance / Full Bundle", "og:description": "Extended goes deeper into harmony, Performance unlocks performing, and Full Bundle includes both. The Chord Dock v2.0 edition hub."}}, "editions.html": {"title": "Chord Dock エディション | Lite / Extended / Performance / Full Bundle", "meta": {"description": "Chord Dock v2.0 の全エディションを一覧で確認できます。Extended はハーモニーの深掘り、Performance は演奏、Full Bundle は両方。役割と選び方をまとめたハブページです。", "og:title": "Chord Dock エディション | Lite / Extended / Performance / Full Bundle", "og:description": "Extended はハーモニーの深掘り、Performance は演奏、Full Bundle は両方。Chord Dock v2.0 のエディションの役割と選び方をまとめたハブページです。"}}, "extended.en.html": {"title": "Chord Dock Extended | The upgrade that expands the Lite workflow", "meta": {"description": "Chord Dock Extended keeps the Lite workflow intact while unlocking reharmonization, Arpeggio / Bassline generation, tension and slash chord tools, and deeper editing.", "og:title": "Chord Dock Extended | The upgrade that expands the Lite workflow", "og:description": "Chord Dock Extended keeps the Lite workflow intact while unlocking reharmonization, Arpeggio / Bassline generation, tension and slash chord tools, and deeper editing."}}, "extended.html": {"title": "Chord Dock Extended | Lite の制作フローを拡張するエディション", "meta": {"description": "Chord Dock Extended は、Lite の制作フローをそのままに、リハーモナイズ、アルペジオ / ベースライン生成、テンションや詳細編集を解放するアップグレードです。", "og:title": "Chord Dock Extended | Lite の制作フローを拡張するエディション", "og:description": "Chord Dock Extended は、Lite の制作フローをそのままに、リハーモナイズ、アルペジオ / ベースライン生成、テンションや詳細編集を解放するアップグレードです。"}}, "index.en.html": {"title": "Chord Dock v2.0 — Timeline Chord Editing, Reharmonization, and Performance", "meta": {"description": "Chord Dock v2.0 gives you a chord-track-style workflow for DAWs without one built in. Visualize chord progressions on a timeline, reharmonize them, generate Arpeggio / Bassline, then perform four-part accompaniment with Arranger Mode and route per-part MIDI with the bundled ChordPart plugin.", "og:title": "Chord Dock v2.0 — Timeline Chord Editing, Reharmonization, and Performance", "og:description": "Edit chord progressions on a timeline, reharmonize and generate, then perform four-part accompaniment with pads and send per-part MIDI to separate tracks."}}, "index.html": {"title": "Chord Dock v2.0 — タイムラインでコード進行を可視化、リハーモナイズ、そして演奏", "meta": {"description": "Chord Dock v2.0 は、コードトラックのように進行全体を見渡しながら編集し、リハーモナイズやアルペジオ / ベースライン生成、4パート伴奏のパッド演奏（アレンジャーモード）、ChordPart によるパート別MIDI出力まで行えるコード進行制作プラグインです。", "og:title": "Chord Dock v2.0 — タイムラインでコード進行を可視化、リハーモナイズ、そして演奏", "og:description": "コード進行をタイムラインで編集し、リハーモナイズ、アルペジオ生成から、4パート伴奏のパッド演奏（アレンジャーモード）とパート別MIDI出力までひとつのフローで。"}}, "performance.en.html": {"title": "Chord Dock Performance | The edition that turns progressions into performance", "meta": {"description": "Chord Dock Performance unlocks Arranger Mode (four-part accompaniment: Drums / Bass / Arp / Chord Pad), the Performance / Song pages, and per-part MIDI output via the bundled ChordPart plugin.", "og:title": "Chord Dock Performance | The edition that turns progressions into performance", "og:description": "Unlock Arranger Mode (four-part accompaniment with pads), the Performance / Song pages, and per-part MIDI output via the bundled ChordPart plugin."}}, "performance.html": {"title": "Chord Dock Performance | コード進行を演奏に変えるエディション", "meta": {"description": "Chord Dock Performance は、アレンジャーモード（Drums / Bass / Arp / Chord Pad の4パート伴奏）、Performance / SONG ページ、ChordPart によるパート別MIDI出力を解放するエディションです。", "og:title": "Chord Dock Performance | コード進行を演奏に変えるエディション", "og:description": "アレンジャーモード（4パート伴奏のパッド演奏）、Performance / SONG ページ、ChordPart によるパート別MIDI出力を解放するエディション。"}}}, "editions": [{"name": "Extended", "regularUsd": 24, "saleUrl": "https://buy.stripe.com/bJe9AM3Ze91g47Ke787N60c", "regularUrl": "https://buy.stripe.com/dRm4gsanCcds9s47IK7N606"}, {"name": "Performance", "regularUsd": 29, "saleUrl": "https://buy.stripe.com/4gM28k8fudhw33Ge787N60d", "regularUrl": "https://buy.stripe.com/7sY9AMbrG5P433G5AC7N608"}, {"name": "Full Bundle", "regularUsd": 39, "saleUrl": "https://buy.stripe.com/cNi7sE9jydhw7jWgfg7N60e", "regularUrl": "https://buy.stripe.com/bJe8wIbrGelAbAc4wy7N609"}]};
    const pageName = document.currentScript?.dataset.bf2026Page;
    const page = config.pages[pageName];
    const deadline = Date.parse(config.deadline);
    let restored = false;
    let timer;

    function checkDeadline()
    {
        clearTimeout(timer);
        const remaining = deadline - Date.now();
        if (remaining > 0)
        {
            timer = setTimeout(checkDeadline, Math.min(remaining, 2147483647));
            return;
        }
        if (restored || !page) return;
        restored = true;
        document.querySelectorAll('a[href]').forEach(link => {
            const edition = config.editions.find(e => link.getAttribute('href') === e.saleUrl);
            if (edition) link.setAttribute('href', edition.regularUrl);
        });
        document.querySelectorAll('del[aria-label][style*="double"]').forEach(oldPrice => {
            const amount = oldPrice.textContent.trim();
            const currentPrice = oldPrice.nextElementSibling;
            if (currentPrice && ['SPAN', 'STRONG'].includes(currentPrice.tagName))
                currentPrice.textContent = amount;
            oldPrice.remove();
        });
        document.querySelector('aside[aria-label="Black Friday Sale 2026"]')?.remove();
        const textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        while (textNodes.nextNode())
        {
            const node = textNodes.currentNode;
            if (node.parentElement?.closest('script, style, noscript')) continue;
            node.nodeValue = node.nodeValue.replace('Black Friday 2026:',
                document.documentElement.lang === 'ja' ? '通常価格:' : 'Regular pricing:');
        }
        document.title = page.title;
        for (const [key, encodedValue] of Object.entries(page.meta))
        {
            const decoder = document.createElement('textarea');
            decoder.innerHTML = encodedValue;
            const element = document.querySelector(`meta[name="${key}"],meta[property="${key}"]`);
            if (element) element.setAttribute('content', decoder.value);
        }
        document.querySelectorAll('script[type="application/ld+json"]').forEach(script => {
            try
            {
                const data = JSON.parse(script.textContent);
                if (data['@type'] !== 'SoftwareApplication') return;
                for (const offer of data.offers ?? [])
                {
                    const edition = config.editions.find(e => e.name === offer.name);
                    if (!edition) continue;
                    offer.price = String(edition.regularUsd);
                    delete offer.validThrough;
                    delete offer.priceValidUntil;
                }
                script.textContent = JSON.stringify(data);
            }
            catch { /* Leave unrelated structured data untouched. */ }
        });
        document.documentElement.dataset.bf2026 = 'ended';
    }

    checkDeadline();
    document.addEventListener('visibilitychange', checkDeadline);
    window.addEventListener('pageshow', checkDeadline);
})();
