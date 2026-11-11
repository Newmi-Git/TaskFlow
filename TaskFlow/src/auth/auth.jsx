import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";



export default function Auth(){
    const [isRegister, setIsRegister] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError("");
        try {
            if (isRegister){
                await createUserWithEmailAndPassword(auth, email, password)
            }
            else {
                await signInWithEmailAndPassword(auth, email, password)
            }

        } catch(err) {
            setError(err.code)
        }
    }


     return (
       <form onSubmit={handleSubmit}>
         <h2>{isRegister ? "Register" : "Login"}</h2>
         <input
           type="email"
           placeholder="Email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           required
         />
         <input
           type="password"
           placeholder="Password (min 6 characters)"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           required
         />
         <button type="submit">{isRegister ? "Create account" : "Log in"}</button>
         {error && <p>{error}</p>}
         <p>
           <button type="button" onClick={() => setIsRegister(!isRegister)}>
             {isRegister ? "Have an account? Log in" : "No account? Register"}
           </button>
         </p>
       </form>
    );

}