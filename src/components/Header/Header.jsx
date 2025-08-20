import styles from "./Header.module.css";

export function Header() {
    return (
        <header className={styles.header}>
            <img src="/img/logo.png" alt="Logo" className={styles.logo} />
            <img
                src="/img/user-avatar.png"
                alt="Profile"
                className={styles.avatar}
            />
        </header>
    );
}
