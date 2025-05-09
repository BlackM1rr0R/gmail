import React, { useState } from "react";
import { register } from "../../api";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false); // Yükleme durumu
    const navigate = useNavigate(); // Yönlendirme için kullanılır
    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true); // Yükleme başladığında
        try {
            const response = await register(username, email, password);
            localStorage.setItem("token", response.token);
            localStorage.setItem("username", response.username);

            alert("Kayıt başarılı! Hoş geldin " + response.username);
            navigate("/profile"); // Kayıt başarılı olduğunda anasayfaya yönlendir
            // Burada yönlendirme işlemi yapılabilir
        } catch (error) {
            alert("Kayıt başarısız! " + error.message);
        } finally {
            setLoading(false); // Yükleme bittiğinde
        }
    };

    return (
        <div>
        
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? "Kayıt Ediliyor..." : "Register"}
                </button>
            </form>
        </div>
    );
};

export default RegisterPage;
