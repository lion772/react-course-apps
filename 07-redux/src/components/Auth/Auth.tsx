import React, { FC } from "react";
import styles from "./Auth.module.css";

interface AuthProps {}

const Auth: FC<AuthProps> = () => {
    return (
        <main className={styles.auth}>
            <section>
                <form>
                    <div className={styles.control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                    </div>
                    <div className={styles.control}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <button>Login</button>
                </form>
            </section>
        </main>
    );
};

export default Auth;