import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log("Hello world is now running! Good job!");

	const provider = new HelloWorldViewProvider(context.extensionUri);

	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(HelloWorldViewProvider.viewType, provider));
}

class HelloWorldViewProvider implements vscode.WebviewViewProvider {
	public static readonly viewType = 'helloworld.start';

	private _view?: vscode.WebviewView;

	constructor(
		private readonly _extensionUri: vscode.Uri,
	) { }

	public resolveWebviewView(
		webviewView: vscode.WebviewView,
		context: vscode.WebviewViewResolveContext,
		_token: vscode.CancellationToken,
	) {
		this._view = webviewView;

		webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
	}

	private _getHtmlForWebview(webview: vscode.Webview) {
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
}

export function deactivate() {}
