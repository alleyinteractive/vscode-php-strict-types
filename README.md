# PHP Strict Types

This is a simple VS Code extension to add `declare(strict_types=1);` to PHP files on-demand.

This extension provides both a command and keyboard shortcut.

## Usage

When in a PHP file, either invoke the command palette and search for "Set strict_types=1", or use the keyboard shortcut, which by default is `cmd-s t` (Mac) or `ctrl-s t` (PC). Customize this shortcut at your leisure.

Invoking the command will add `declare(strict_types=1);` beneath the opening `<?php` tag. If `strict_types` is already set in the file, the command will do nothing. If the file doesn't have an opening `<?php` tag, the extenstion will add one (note that a closing tag will not be added, so this is largely assuming that the file is empty).
