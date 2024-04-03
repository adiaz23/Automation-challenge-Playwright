/* eslint-disable no-undef */
// @ts-check
const { defineConfig, devices } = require("@playwright/test");
import { testPlanFilter } from "allure-playwright/dist/testplan";
import * as os from "os";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require("dotenv").config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
	testDir: "./src/tests",
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: [["line"], ["allure-playwright", {
		detail: true,
		suiteTitle: true,
		environmentInfo: {
			os_plataform: os.platform(),
			os_release: os.release(),
			os_veersion: os.version(),
			node_version: process.version,
		},
	}]],
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		baseURL: process.env.URL,
		screenshot: "only-on-failure",
		trace: "on-first-retry",
	},

	/* Configure projects for major browsers */
	projects: [
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},

		{
			name: "firefox",
			use: { ...devices["Desktop Firefox"] },
		},

		{
			name: "webkit",
			use: { ...devices["Desktop Safari"] },
		},
	],
	grep: testPlanFilter()
});

