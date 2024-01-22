import express from "express";
import cors from "cors";

import { misReportPdfBuffer } from "./generate-pdf";

const ALLOWED_ORIGINS = [/localhost:[0-9]+/];
const PORT = 8026;
const app = express();

app.use(cors({ origin: ALLOWED_ORIGINS }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
	const pdfBuffer = await misReportPdfBuffer();

	res.set({ "Content-Type": "application/pdf", "Content-Length": pdfBuffer.length });

	return res.send(pdfBuffer);
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
