import styles from './page.module.scss';
import { getSongsArray } from './api/getSongsArray';

export default function Home() {

  const prompt =
    'Return me an array of hip-hop songs for working out. The music should be aggressive. 3 Songs should be included.';
  const sendRequest = async () => {
    const answer = await getSongsArray(prompt);
  };

  return <main className={styles.main}></main>;
}
