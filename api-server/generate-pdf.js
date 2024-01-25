const puppeteer = require("puppeteer");
const { ReportBuilder } = require("@jikji/generator");

async function build() {
	const browser = await puppeteer.launch({
		args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
		headless: "new",
	});

	try {
		await ReportBuilder.browser(browser)
			.remoteHost("http://localhost:8024")
			.report("/")
			.pdf({
				path: "./out.pdf",
			})
			.build();
	} finally {
		await browser.close();
	}
}

build();
