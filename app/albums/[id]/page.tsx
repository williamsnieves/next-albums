import styles from "./photos.module.css";
async function getPhotos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
  ).then((res) => res.json());
}

export default async function Photos({ params }) {
  const { id } = params;
  const photos = await getPhotos(id);
  return (
    <div>
      <h1>Photos</h1>
      <ul className={styles.photos}>
        {photos.map((photo) => (
          <li key={photo.id} className={styles.photo}>
            <img src={photo.thumbnailUrl} />
            <h4>{photo.title}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}
