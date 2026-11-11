import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./auth/firebase";
import Auth from "./auth/auth";
import Dashboard from "./components/Dashboard";

export default function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    return onAuthStateChanged(auth, (u) => {
        setUser(u);
        setLoading(false);
    });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (!user) return <Auth />;

    return (
    <>
        <button onClick={() => signOut(auth)}>Log out</button>
        <Dashboard />
    </>
    );
}