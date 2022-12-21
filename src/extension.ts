import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('php-strict-types.insert', () => {
    const { activeTextEditor: editor } = vscode.window;
    if (editor) {
      const text = editor.document.getText();
      // First, check if strict_types is set, and if so, bail.
      if (text.match(/\bdeclare\(strict_types=/)) {
        return;
      }

      let content = "declare(strict_types=1);\n";
      let position: vscode.Position;

      // Next, find the position of the first opening php tag.
      const coords = text.match(/(?:\b|^)(<\?php.*?\n)/);
      if (coords) {
        position = editor.document.positionAt((coords.index || 0) + coords[1].length);
      } else {
        content = `<?php\n${content}`;
        position = new vscode.Position(0, 0);
      }

      editor.edit(editBuilder => {
        editBuilder.insert(position, content);
      });
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
