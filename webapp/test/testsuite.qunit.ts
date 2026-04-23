import type {SuiteConfiguration} from "sap/ui/test/starter/config";
export default {
	name: "QUnit test suite for the UI5 Application: aryan.portfolio",
	defaults: {
		page: "ui5://test-resources/aryan/portfolio/Test.qunit.html?testsuite={suite}&test={name}",
		qunit: {
			version: 2
		},
		sinon: {
			version: 4
		},
		ui5: {
			language: "EN",
			theme: "sap_horizon"
		},
		coverage: {
			only: ["aryan/portfolio/"],
			never: ["test-resources/aryan/portfolio/"]
		},
		loader: {
			paths: {
				"aryan/portfolio": "../"
			}
		}
	},
	tests: {
		"unit/unitTests": {
			title: "Unit tests for aryan.portfolio"
		},
		"integration/opaTests": {
			title: "Integration tests for aryan.portfolio"
		}
	}
} satisfies SuiteConfiguration;
