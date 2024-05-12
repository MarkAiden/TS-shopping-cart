import { useState } from "react";
import { Button, Container } from "react-bootstrap";

export function Home() {
    const [language, setLanguage] = useState("en");

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === "en" ? "es" : "en"));
    };

    const getWelcomeMessage = () => {
        return language === "en"
            ? "Welcome to my Shopping Cart app"
            : "Bienvenido a mi aplicación de compras";
    };

    const getSwitchText = () => {
        return language === "en" ? "Switch to Spanish" : "Cambiar a Inglés";
    };

    return (
        <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100">
            <h1 className="text-4xl font-bold mb-4 p-1">{getWelcomeMessage()}</h1>
            <p className="text-lg mb-8 p-2">
                {language === "en"
                    ? "This is a practice of a shopping web app using React and Typescript."
                    : "Esta es una práctica de aplicación web para compras usando React y Typescript."}
            </p>
            <div className="d-flex p-2">
                <Button
                    onClick={toggleLanguage}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                >
                    {getSwitchText()}
                </Button>
            </div>
            <footer className="mt-5 p-5 text-sm text-gray-400">
                <p>&copy; Freivel Hirujo, 2024.</p>
                <a href="https://www.linkedin.com/in/freivelhirujo/" className="px-5">
                    Linkedin
                </a>
            </footer>
        </Container>
    );
}