const $ = (selector) => document.querySelector(selector);

$("#html").addEventListener("input", () => updateHtml());
$("#css").addEventListener("input", () => updateHtml());
$("#js").addEventListener("input", () => updateHtml());

function textHtml(html, css, js) {
    return `<!DOCTYPE html5>`+
    `<html lang="en">` +
    `   <head>` +
    `       <meta charset="UTF-8">` +
    `       <meta name="viewport" content="width=device-width, initial-scale=1.0">` +
    `       <title>Document</title>` +
    `       <style>${css}</style>` +
    `   </head>` +
    `   <body>${html}</body>` +
    `   <script>${js}<\/script>` +
    `</html>`;
}

function updateHtml() {
    const html = $('#html').value;
    const css = $('#css').value;
    const js = $('#js').value;

    $('iframe').srcdoc = textHtml(html, css, js);
    
}