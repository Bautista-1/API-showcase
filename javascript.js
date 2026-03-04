const categories = [
	{
		id: "mailbox",
		title: "Mailbox",
		description: "Send and retrieve messages with thread support.",
		endpoint: "/api/mailbox",
		method: "GET",
		actionLabel: "Fetch latest thread",
		actionResult: "Thread th_1042 loaded with 3 unread messages.",
		sample: {
			threadId: "th_1042",
			unread: 3,
			latest: "Your package arrives tomorrow.",
		},
	},
	{
		id: "weather",
		title: "Weather",
		description: "Forecasts, alerts, and air quality by location.",
		endpoint: "/api/weather?city=Seattle",
		method: "GET",
		actionLabel: "Get Seattle forecast",
		actionResult: "Seattle update: Rain with a high of 52F.",
		sample: {
			city: "Seattle",
			condition: "Rain",
			high: "52F",
			low: "44F",
		},
	},
	{
		id: "movie",
		title: "Movie",
		description: "Search films, cast, and showtimes.",
		endpoint: "/api/movies?query=nebula",
		method: "GET",
		actionLabel: "Search \"Nebula\"",
		actionResult: "Top result: Nebula Drift (2024), 4 nearby showtimes.",
		sample: {
			title: "Nebula Drift",
			year: 2024,
			rating: "PG-13",
		},
	},
	{
		id: "music",
		title: "Music",
		description: "Curate playlists and discover tracks.",
		endpoint: "/api/music/playlists",
		method: "POST",
		actionLabel: "Create playlist",
		actionResult: "Playlist created: Late Night Focus with 42 tracks.",
		sample: {
			playlist: "Late Night Focus",
			tracks: 42,
			duration: "2h 18m",
		},
	},
	{
		id: "joke",
		title: "Joke",
		description: "Lightweight joke delivery for any mood.",
		endpoint: "/api/jokes/random",
		method: "GET",
		actionLabel: "Tell me a joke",
		actionResult: "Delivered: Because it wanted to keep an eye on the mouse.",
		sample: {
			setup: "Why did the cat sit on the keyboard?",
			punchline: "Because it wanted to keep an eye on the mouse.",
		},
	},
	{
		id: "tea",
		title: "Tea Time",
		description: "Tea suggestions based on time and vibes.",
		endpoint: "/api/tea?smooth=lavender",
		method: "GET",
		actionLabel: "Recommend a tea",
		actionResult: "Steep Lavender Earl Grey for 4 minutes at 195F.",
		sample: {
			tea: "Lavender Earl Grey",
			temperature: "195F",
			steep: "4 min",
		},
	},
];

const root = document.createElement("div");
root.className = "api-showcase";

const hero = document.createElement("section");
hero.className = "hero";
hero.innerHTML = `
	<h1>API Showcase</h1>
	<p>Six playful categories ready to plug into your app. Each card highlights a category, sample endpoint, and a tiny response preview.</p>
`;

const grid = document.createElement("section");
grid.className = "grid";

for (const item of categories) {
	const card = document.createElement("article");
	card.className = "card";
	card.innerHTML = `
		<span class="pill">${item.method}</span>
		<h3>${item.title}</h3>
		<p>${item.description}</p>
		<div class="endpoint">${item.endpoint}</div>
		<pre>${JSON.stringify(item.sample, null, 2)}</pre>
		<button class="action" type="button">${item.actionLabel}</button>
		<div class="result" aria-live="polite"></div>
	`;

	const button = card.querySelector(".action");
	const result = card.querySelector(".result");
	button.addEventListener("click", () => {
		result.textContent = item.actionResult;
	});
	grid.appendChild(card);
}

root.appendChild(hero);
root.appendChild(grid);
document.body.appendChild(root);
