import Head from 'next/head';
import DemoSection from '../components/demo-section';
import InfoSection from '../components/info-section';
import styles from '../styles/Home.module.scss';

export default function Home() {
    return (
        <>
            <Head>
                <title>In loop with</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>

            <main className={styles.main}>
                <InfoSection />
                <DemoSection />
            </main>
        </>
    );
}
