# WEBSITE STYLE MANUAL

## Brand Identity

### Core Theme

Minimalist, bold, high-contrast political/campaign-style landing page.

### Personality

* Confident
* Modern
* Direct
* Clean
* Editorial
* Monochrome-first

### Visual Keywords

Grid • Contrast • Structure • Authority • Simplicity • Motion

---

# Color System

## Primary Colors

### Black

```css
#000000
```

Used for:

* Main backgrounds
* Hero section
* Footer
* Navigation

### White

```css
#FFFFFF
```

Used for:

* Headlines
* Borders
* Interactive states
* Alternate section backgrounds

---

## Secondary Colors

### Light Text

```css
#D4D4D4
```

Used for:

* Body copy on dark backgrounds

### Dark Text

```css
#333333
```

Used for:

* Body copy on light backgrounds

### Footer Gray

```css
#888888
```

Used for:

* Footer text
* Supporting metadata

### Divider Gray

```css
#222222
```

Used for:

* Footer borders
* Subtle separators

---

# Typography

## Heading Font

```css
"Bebas Neue", sans-serif
```

### Usage

* H1
* H2
* H3
* Large numeric displays
* Section titles

### Characteristics

* Condensed
* Uppercase-friendly
* Strong visual hierarchy

---

## Body Font

```css
"Roboto Mono", monospace
```

### Usage

* Paragraphs
* Navigation labels
* Buttons
* UI elements

### Characteristics

* Technical
* Structured
* Clean

---

# Type Scale

## Hero Title

```css
5rem
```

Mobile:

```css
3rem
```

---

## Section Titles

```css
3.5rem
```

Mobile:

```css
2rem
```

---

## Date Display

```css
5rem
```

Mobile:

```css
3rem
```

---

## Body Copy

```css
1rem
line-height: 1.7;
max-width: 700px;
```

---

# Layout Principles

## Section Structure

All major sections should:

```css
min-height: 100vh;
```

Center content vertically and horizontally.

```css
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
```

### Alignment

Default alignment:

```css
text-align: center;
```

Exception:
Long-form content may use left alignment.

---

# Spacing System

## Base Unit

Use an 8px rhythm.

### Common Spacing

| Size | Value |
| ---- | ----- |
| XS   | 8px   |
| S    | 16px  |
| M    | 24px  |
| L    | 40px  |
| XL   | 60px  |
| XXL  | 100px |

---

# Background System

## Global Background

Dark grid pattern.

```css
linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px),
#000
```

Grid size:

```css
40px 40px
```

### Purpose

Creates subtle structure without distracting from content.

---

# Buttons

## Primary Button

### Style

```css
border: 2px solid white;
padding: 15px 40px;
```

### Text

```css
text-transform: uppercase;
letter-spacing: 1px;
```

### Hover

```css
background: white;
color: black;
transform: scale(1.05);
```

### Transition

```css
transition: .3s ease;
```

---

# Cards

## Structure

```css
width: 240px;
padding: 30px;
border: 2px solid black;
```

### Entrance Animation

```css
opacity: 0;
transform: translateY(40px);
```

### Visible State

```css
opacity: 1;
transform: translateY(0);
```

### Hover State

```css
background: black;
color: white;
transform: translateY(-8px);
```

### Principles

* Clear boundaries
* Strong contrast
* Minimal decoration

---

# Navigation

## Bottom Floating Navigation

### Position

```css
position: fixed;
bottom: 20px;
left: 50%;
```

### Appearance

```css
background: rgba(20,20,20,.85);
backdrop-filter: blur(10px);
border-radius: 999px;
```

### Icon Size

```css
22px
```

### Interaction

Hover:

```css
background: white;
transform: translateY(-3px);
```

Active:

```css
background: white;
```

---

# Motion Guidelines

## Motion Philosophy

Animations should:

* Feel smooth
* Support content
* Never distract
* Last under 1 second

---

## Fade-Up Animation

```css
opacity: 0;
transform: translateY(24px);
```

To:

```css
opacity: 1;
transform: translateY(0);
```

Duration:

```css
1s ease
```

---

## Hover Motion

Buttons:

```css
scale(1.05)
```

Cards:

```css
translateY(-8px)
```

Navigation:

```css
translateY(-3px)
```

---

# Borders

The design relies heavily on borders instead of shadows.

### Standard Border

```css
2px solid
```

### Thin Divider

```css
1px solid
```

### Rule

Prefer borders over box-shadows whenever possible.

---

# Imagery

## Hero Images

### Width

```css
800px
```

### Responsive

```css
max-width: 85%;
```

### Style

Preferred imagery:

* High contrast
* Minimal backgrounds
* Monochrome compatible
* Editorial quality

---

# Responsive Rules

## Breakpoint

```css
700px
```

### Changes

* Reduce headline sizes
* Expand image width
* Reduce large display typography

### Maintain

* Fixed navigation
* Section centering
* Monochrome palette

---

# Accessibility Standards

### Contrast

Maintain WCAG AA minimum contrast.

### Interaction

Interactive targets should be:

```css
44px × 44px
```

minimum.

### Motion

Provide reduced-motion support when possible.

```css
@media (prefers-reduced-motion: reduce)
```

---

# Design Do's

✓ Use strong typography

✓ Keep layouts spacious

✓ Use borders instead of shadows

✓ Animate with purpose

✓ Maintain monochrome hierarchy

✓ Use large visual headlines

✓ Keep content focused

---

# Design Don'ts

✗ Bright accent colors

✗ Heavy gradients

✗ Excessive shadows

✗ Overly rounded cards

✗ Dense text blocks

✗ Complex animations

✗ Multiple competing focal points

✗ Decorative clutter

---

# Design Formula

High Contrast
+
Large Typography
+
Minimal Color
+
Strong Borders
+
Subtle Motion
=============

Visual Identity
