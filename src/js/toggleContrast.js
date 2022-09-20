let constrastToggle;
export function toggleContrast() {

    constrastToggle = !constrastToggle;
    if (!constrastToggle) {
        document.documentElement.style.setProperty(
        "--background",
        "linear-gradient(to right top, #242424, #443449, #763f60, #ae4765, #de5656)"
        );
        document.documentElement.style.setProperty("--font-color", "white");

        document.documentElement.style.setProperty("--mail-color", "#feeeee");
        document.documentElement.style.setProperty("--mail-text-color", "#DE5656");
        document.documentElement.style.setProperty("--about-color", "#242424");
        document.documentElement.style.setProperty("--logo-secondary-color", "#feeeee");
    } else {
        document.documentElement.style.setProperty(
        "--background",
        "linear-gradient(to right top, #feeeee, #fcc9c8, #f5a4a2, #eb7e7c, #de5656)"
        );
        document.documentElement.style.setProperty("--font-color", "black");

        document.documentElement.style.setProperty("--scroll-icon-color", "#DE5656");
        document.documentElement.style.setProperty("--mail-color", "#DE5656");
        document.documentElement.style.setProperty("--mail-text-color", "#feeeee");
        document.documentElement.style.setProperty("--logo-secondary-color", "#2424241f");
    }
}