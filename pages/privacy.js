export default function Privacy() {
	return (
		<div className="prose prose-xl dark:prose-invert md:prose-2xl">
			<h1>Privacy Policy</h1>
			<p>
				<strong>Last updated on February 20th, 2024.</strong>
			</p>
			<p>
				We believe in user privacy, and we like to
				keep you in the loop about how your data may be collected and or
				utilized in Ruby.
			</p>
			<p>
				First and foremost, majority of data is actually collected by
				third parties, and we don&apos;t have access to most of it. 
				Between clicking on articles, saving bookmarks, or anything else,
				we don&apos;t collect any user data on what you&apos;re specifically doing.
			</p>
			<p>
				There is a very limited amount of data we actually collect,
				which is mostly analytical data. We use TelemetryDeck in the
				latest version of Ruby for iOS, as well as RevenueCat.
			    All of the analytical data collected is private and anonymous, 
				and it mostly includes things like device type, OS version, 
				app version, and what features of the app you use.
			</p>
			<p>
				Bookmarks sync across your Apple devices, whether that be iPhone,
				iPad, Mac, or Apple Vision. Regardless of what device you&apos;re using,
				we do not have your Bookmark data. All of that is handled by
				Apple&apos;s iCloud service.
			</p>
			<p>
				Since Ruby requires third parties to collect the news, they may
				collect some data when requesting the news, including your IP address,
				timezone, or similar.
			</p>
			<p>
				In addition, Ruby will link to external sites, primarily news
				publishers - and your data may be collected by those third parties.
				In an app like Ruby, where the content is primarily provided by
				third parties, since they&apos;re news articles - it is
				imperative that you know that data may be collected by those
				websites.
			</p>
		</div>
	);
}

export function getStaticProps() {
	return {
		props: {
			seo: {
				title: "Privacy Policy",
			},
		},
	};
}
