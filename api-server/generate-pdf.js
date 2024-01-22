const puppeteer = require("puppeteer");
const { ReportBuilder } = require("@jikji/generator");

exports.misReportPdfBuffer = async () => {
	const browser = await puppeteer.launch({
		args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
		headless: "new",
	});

	try {
		const host = "http://localhost:8024";
		const path = "/";

		const obj = ReportBuilder.browser(browser).remoteHost(host);

		await obj.report(path).pdf().build();

		return obj.result.get(path).pdf;
	} finally {
		await browser.close();
	}
};
