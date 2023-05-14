import styles from "./navigation.module.css";
const links = [
  {
    name: "home",
    route: "/",
  },
  {
    name: "albums",
    route: "/albums",
  },
];

export function Navigation() {
  return (
    <header>
      <nav>
        <ul className={styles.navigation}>
          {links.map((link) => (
            <li key={link.name}>
              <a className={styles.link} href={link.route}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
