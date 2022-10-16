let constrastToggle;
export function toggleContrast() {

    constrastToggle = !constrastToggle;
    if (constrastToggle) {
        document.documentElement.style.setProperty("--secondary-color", "#242424");
        document.documentElement.style.setProperty("--font-color", "white");
        document.documentElement.style.setProperty("--mail-color", "#feeeee");
        document.documentElement.style.setProperty("--mail-text-color", "#DE5656");
        document.documentElement.style.setProperty("--about-color", "#242424");
        document.documentElement.style.setProperty("--logo-secondary-color", "#feeeee");
        document.documentElement.style.setProperty("--form-input-color", "#424242");
        document.documentElement.style.setProperty("--about-secondary-color", "#383838");
    } else {
        document.documentElement.style.setProperty("--secondary-color", "#feeeee");
        document.documentElement.style.setProperty("--font-color", "black");
        document.documentElement.style.setProperty("--mail-color", "#DE5656");
        document.documentElement.style.setProperty("--mail-text-color", "#feeeee");
        document.documentElement.style.setProperty("--logo-secondary-color", "#2424246e");
        document.documentElement.style.setProperty("--form-input-color", "#dad1d1");
        document.documentElement.style.setProperty("--about-secondary-color", "#white");
    }
}