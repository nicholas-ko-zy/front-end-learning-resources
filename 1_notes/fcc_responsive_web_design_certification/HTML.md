# HTML

From FreeCodeCamp's Responsive Web Design Certification Course

## Accessibility

### ARIAs
ARIA stands for Accessible Rich Internet Applications. You can use ARIAs 
to give semantic meaning to div tags, i.e. scrollbar, searchbox etc.

Six main categories of ARIAs
1. Document structure roles
2. Widget roles
3. Landmark roles
4. Live region roles
5. Window roles
6. And Abstract roles

* `aria-hidden`: Used to hide elements from accessibility trees for tools like screen readers.
* The `accesskey` attribute in a button element, can assign a key to activate a button. 


# Computers
## File Organisation

Example folder structure for a HTML and CSS project.
```
.
├── /assets
│   ├── /images
│   │   ├── logo.png
│   │   ├── banner.jpg
│   │   └── icons.svg
│   ├── /fonts
│   │   ├── custom-font.woff
│   │   └── custom-font.woff2
├── /css
│   ├── main.css
│   ├── about.css
│   └── contact.css
├── index.html
├── about.html
├── contact.html
└── README.md
```

Associating `<labels>` and `<input>`: the `for` attribute of the `<label>` must match the `id` attribute of the `<input>`.

