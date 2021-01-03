import Head from 'next/head';
import { GithubIcon } from '../components/icons/GithubIcon';
import { TwitterIcon } from '../components/icons/TwitterIcon';

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto font-sans antialiased">
      <Head>
        <title>Néstor Diaz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-56 p-4">
        <figure className="flex flex-col items-center md:flex-row">
          <img className="w-32 h-32 rounded-full" src="/coldhams.jpeg" alt="" width="72" height="72" />
          <div className="text-center md:pl-8 md:text-left">
            <p className="text-2xl">Néstor Diaz</p>
            <figcaption className="font-medium">
              <div className="text-gray-500">Frontend Developer</div>
              <div className="flex flex-col items-center md:flex-row text-gray-600 pt-5">
                <a className="flex hover:text-gray-900 py-2" href="https://github.com/nestor-diaz" target="_blank">
                  <GithubIcon />
                  <span className="ml-2">Github</span>
                </a>
                <a
                  className="flex hover:text-gray-900 py-2 md:pl-4"
                  href="https://twitter.com/nestor_diazl"
                  target="_blank"
                >
                  <TwitterIcon />
                  <span className="ml-2">Twitter</span>
                </a>
              </div>
            </figcaption>
          </div>
        </figure>
      </main>
    </div>
  );
}
