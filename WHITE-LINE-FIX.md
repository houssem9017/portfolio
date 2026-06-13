# White Horizontal Line Flash on Scroll/Back Navigation

## Problem
When restoring scroll position (via browser back button or refresh), a brief white horizontal line flashes at the top of the page. This happens because:

1. **Scroll Restoration Race Condition**: `history.scrollRestoration` is "auto" by default. When navigating back, the browser instantly restores the scroll position before the CSS/dark background has loaded, causing a white flash.

2. **Missing HTML Background**: The `body` element has the dark background, but `html` defaults to white. During the initial paint or scroll restoration, the `html` background shows through momentarily.

3. **View Transitions**: Browser-native view transitions can cause a white flash if not properly configured for dark themes.

## Fix Applied

### 1. Set Background on `<html>` element
```css
html {
  background-color: #030712; /* match your dark theme */
}
```

### 2. Force dark color-scheme
```css
:root {
  color-scheme: dark;
}
```

### 3. Prevent scroll restoration
```html
<script>history.scrollRestoration = "manual";</script>
```

### 4. Handle view transitions
```css
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
```

### 5. Ensure full viewport coverage
```css
body {
  min-height: 100vh;
  min-height: 100dvh;
}
```

### 6. Prevent scrollbar reflow
```css
html {
  scrollbar-gutter: stable;
}
```

## Files Modified
- `src/app/globals.css` — Added html bg, color-scheme, view-transition rules
- `src/app/layout.tsx` — Added scrollRestoration script
