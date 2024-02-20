export default function PressKit() {
	return (
		<div className="prose prose-xl dark:prose-invert md:prose-2xl">
			<h1>Press Kit</h1>
			<p>
				<strong>Last updated on June 19th, 2022.</strong>
			</p>
			<p>
				A press kit for Ruby 2.0 for iOS can be downloaded <a href="https://dl.rubyapp.org/Ruby2PressKit.zip">here</a>.
			</p>
		</div>
	);
}

export function getStaticProps() {
	return {
		props: {
			seo: {
				title: "Press Kit",
			},
		},
	};
}
