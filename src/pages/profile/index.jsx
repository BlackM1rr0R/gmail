import React, { useState } from "react";
import { login } from "../../api";
import { Link, useNavigate } from "react-router-dom";
import styles from './index.module.css'
const Profile = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await login(email, password);
            localStorage.setItem("token", data.token);
            localStorage.setItem("username", data.username); // Kullanıcı adını localStorage'a kaydet
            alert("Giriş başarılı! Hoş geldin " + data.username);
            navigate("/"); // Giriş başarılı olduğunda anasayfaya yönlendir
        } catch (error) {
            alert("Giriş başarısız!");
        }
    };

    return (
        <form onSubmit={handleLogin} className={styles.form}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Şifre" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Giriş Yap</button>
            <Link to={"/register"}>Register</Link>
        </form>
    );
};

export default Profile;
