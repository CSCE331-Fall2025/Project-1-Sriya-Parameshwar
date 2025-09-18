function load_style() {
    page_style = localStorage.getItem("page_stylesheet_name") || "styles.css";

    if (page_style === null) {
        page_style = "styles.css";
    }

    document.getElementById("page_style").setAttribute("href", page_style);
}

function toggle() {
    page_style = localStorage.getItem("page_stylesheet_name") || "styles.css";

    if (page_style === null) {
        page_style = "styles.css";
    }

    if (page_style === "styles.css") {
        dark_mode();
    } else {
        light_mode();
    }
}

function light_mode() {
    localStorage.setItem("page_stylesheet_name", "styles.css");
    load_style();
}

function dark_mode() {
    localStorage.setItem("page_stylesheet_name", "style_two.css");
    load_style();
}

load_style() // load style immediately