import Head from 'next/head';
import { GithubIcon } from '../components/icons/GithubIcon';
import { TwitterIcon } from '../components/icons/TwitterIcon';

export default function Home() {
  return (
    <div className="font-sans antialiased">
      <Head>
        <title>Néstor Diaz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-5xl mx-auto h-56 p-4">
        <figure className="flex items-center">
          <img class="w-32 h-32 rounded-full" src="/coldhams.jpeg" alt="" width="72" height="72" />
          <div class="pt-6 md:p-8 text-center md:text-left">
            <p class="text-2xl">Néstor Diaz</p>
            <figcaption class="font-medium">
              <div class="text-gray-500">Frontend Developer</div>
              <ul className="w-24 text-gray-600 pt-5">
                <li className="pb-3">
                  <a className="flex hover:text-gray-900" href="https://github.com/ndiaz-candido" target="_blank">
                    <GithubIcon />
                    <span className="ml-2">Github</span>
                  </a>
                </li>
                <li>
                  <a className="flex hover:text-gray-900" href="https://twitter.com/nestor_diazl" target="_blank">
                    <TwitterIcon />
                    <span className="ml-2">Twitter</span>
                  </a>
                </li>
              </ul>
            </figcaption>
          </div>
        </figure>
      </main>
    </div>
  );
}
