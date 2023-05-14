import styles from "./albums.module.css";

async function getAlbums() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return fetch("https://jsonplaceholder.typicode.com/albums").then((response) =>
    response.json()
  );
}

export default async function Albums() {
  const albums = await getAlbums();
  return (
    <main>
      <h1>My albums</h1>
      <ul className={styles.albums}>
        {albums.map((album) => (
          <li key={album.id} className={styles.album}>
            <a href={`/albums/${album.id}`}>{album.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
