import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('helloworld.start', () => {
		  // Create and show a new webview
		  const panel = vscode.window.createWebviewPanel(
			'helloworld', // Identifies the type of the webview. Used internally
			'Hello World', // Title of the panel displayed to the user
			vscode.ViewColumn.One, // Editor column to show the new webview panel in.
			{} // Webview options. More on these later.
		  );
		})
	  );
	// context.subscriptions.push(disposable);
}

export function deactivate() {}
