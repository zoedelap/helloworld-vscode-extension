import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log("Hello world is now running! Good job!");
	let disposable = vscode.commands.registerCommand('helloworld.start', () => {
		// Create and show a new webview
		const panel = vscode.window.createWebviewPanel(
		  'helloworld', // Identifies the type of the webview. Used internally
		  'Hello World', // Title of the panel displayed to the user
		  vscode.ViewColumn.One, // Editor column to show the new webview panel in.
		  {} // Webview options. More on these later.
		);

		// set webview contents
		panel.webview.html = getWebviewContent();
	});
	context.subscriptions.push(disposable);
}

function getWebviewContent() {
	console.log("Getting webview contents");
	return `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Hello World</title>
	</head>
	<body>
		<h1>Hello World!</h1>
	</body>
	</html>`;
}

export function deactivate() {}
