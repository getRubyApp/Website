import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
	const title = pageProps?.seo?.title ?? "Ruby - Your News Assistant";

	const pageTitle = pageProps?.seo?.title
		? pageProps.seo.title + " | Ruby - Your News Assistant"
		: "Ruby - Your News Assistant";
	const description =
		pageProps?.seo?.description ??
		"A premier news reading experience for iOS.";
	const image =
		process.env.NEXT_PUBLIC_URL + (pageProps?.seo?.image ?? "/cover.png");
	const imageAlt =
		pageProps?.seo?.imageAlt ??
		"Ruby logo and name on a pink background.";

	return (
		<ThemeProvider attribute="class" disableTransitionOnChange>
			<Head>
				<title>{pageTitle}</title>
				<meta name="description" content={description} />
				<meta name="theme-color" content="#427eff" />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content={image} />
				<meta property="og:image:alt" content={imageAlt} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://rubyapp.org" />
				<meta property="og:site_name" content="Ruby - Your News Assistant" />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>

			<style jsx global>
				{`
					:root {
						--font-inter: ${inter.style.fontFamily};
					}
				`}
			</style>

			<Navbar />
			<main className="mx-auto my-10 max-w-7xl px-6 2xl:px-0">
				<Component {...pageProps} />
			</main>

			<footer className="my-20 mx-auto max-w-7xl px-6 text-zinc-600 dark:text-zinc-400 2xl:px-0">
				<p>© 2024 Michael Burkhardt.</p>
				<p>
					Website built by{" "}
					<a
						href="https://nickoates.com"
						className="underline transition-colors ease-in-out hover:text-blue-700 dark:hover:text-blue-300"
					>
						Nick Oates
					</a>
					.
				</p>
				<p>App Store and the Apple logo are trademarks of Apple Inc.</p>
			</footer>
		</ThemeProvider>
	);
}
