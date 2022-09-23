let constrastToggle;
export function toggleContrast() {

    constrastToggle = !constrastToggle;
    if (!constrastToggle) {
        document.documentElement.style.setProperty(
        "--background",
        "linear-gradient(to right top, #242424, #242424, #242424, #242424, #242424, #2f2d32, #3b3640, #4a3e4e, #715068, #9e617b, #cc7286, #f88888)"
        );
        
        document.documentElement.style.setProperty("--secondary-color", "#242424");
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
        document.documentElement.style.setProperty("--secondary-color", "#feeeee");
        document.documentElement.style.setProperty("--scroll-icon-color", "#DE5656");
        document.documentElement.style.setProperty("--mail-color", "#DE5656");
        document.documentElement.style.setProperty("--mail-text-color", "#feeeee");
        document.documentElement.style.setProperty("--logo-secondary-color", "#2424246e");
    }
}