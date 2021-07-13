import Link from 'next/link';
import Container from '@/components/container';

export default function Home() {
    return (
        <Container>
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    Hi, I’m Brian Bagdasarian
                </h1>
                <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
                    I solve fundamental problems. Right now, I work as a Big Data Engineer
                    at Nativo on next generation data infrastructure. This site is a little look at the work I do
                    –&nbsp;
                    <Link href="/projects">
                        <a>take a look at some of my projects</a>
                    </Link>
                    {" or "}
                    <Link href="/about">
                        <a>or learn more about me.</a>
                    </Link>
                </h2>
            </div>
        </Container>
    )
}