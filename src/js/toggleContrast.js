let constrastToggle;
export function toggleContrast() {
    console.log("hello");
    constrastToggle = !constrastToggle;
    if (constrastToggle) {
        document.documentElement.style.setProperty(
        "--secondary-color",
        "#242424"
        );
        document.documentElement.style.setProperty("--font-color", "white");
        // document.documentElement.style.setProperty("--logo-invert", "100%");
        document.documentElement.style.setProperty("--scroll-icon-color", "white");
        document.documentElement.style.setProperty("--mail-color", "#feeeee");
        document.documentElement.style.setProperty("--mail-text-color", "#DE5656");
        document.documentElement.style.setProperty("--about-color", "#242424");
        document.documentElement.style.setProperty("--logo-secondary-color", "#feeeee");
    } else {
        document.documentElement.style.setProperty(
        "--secondary-color",
        "#feeeee"
        );
        document.documentElement.style.setProperty("--font-color", "black");
        // document.documentElement.style.setProperty("--logo-invert", "0%");
        document.documentElement.style.setProperty("--scroll-icon-color", "#DE5656");
        document.documentElement.style.setProperty("--mail-color", "#DE5656");
        document.documentElement.style.setProperty("--mail-text-color", "#feeeee");
        document.documentElement.style.setProperty("--logo-secondary-color", "#2424241f");
    }
}