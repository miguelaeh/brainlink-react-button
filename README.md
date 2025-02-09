# BrainLink connection button

BrainLink provides users with a global inference account (with access to every AI provider) that they can connect to AI applications with one click - forget about configuring API keys, most users don't know what those are.

With BrainLink, each user pays for the inference it consumes.

React based applications (including Next.js) can use this button to automatically link the user BrainLink account and start using AI.

Integrate the BrainLink button in your application as follows:

## Import the button

This button depends on the `@brainlink/spa-sdk` (the BrainLink SDK for single-page applications.

```javascript
import * as BrainLink from "@brainlink/spa-sdk";
import BrainLinkButton from "@brainlink/react-button";
```

## Use the button

Use the button in your JSX code:

```html
<BrainLinkButton />
```

## Full Examples

See a complete examples at https://github.com/miguelaeh/brainlink-examples
