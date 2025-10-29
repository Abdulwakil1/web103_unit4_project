# WEB103 Project 4 - Bolt Bucket 🏎️

Submitted by: **Abdul Wakil Naijibi**

About this web app:  
**Bolt Bucket** is a React-based web application that allows users to customize a car by selecting features such as Convertible, Exterior, Roof, Wheels, and Interior. Users can see a live subtotal of the car price based on selected options.

Time spent: **≈ 15 hours**

---

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses React to display data dynamically.**
- [ ] **The web app is connected to a PostgreSQL database, with an appropriately structured `CustomItem` table.**
  - [x] **NOTE: Walkthrough includes a view of the Render dashboard demonstrating that the Postgres database is available**
  - [x] **NOTE: Walkthrough includes a demonstration of table contents using `SELECT * FROM custom_items;`**
- [x] **Users can view multiple features of the `CustomItem` (car) they can customize.**
- [x] **Each customizable feature has multiple options to choose from (e.g., exterior could be red, blue, black, etc.)** _(currently implemented for Convertible; other options planned)_
- [x] **On selecting each option, the displayed subtotal/total updates dynamically.**
- [x] **The user interface updates visually when a feature is selected.**
- [ ] **Users can submit their choices to save the item to the list of created `CustomItem`s.**
- [ ] **If a user submits a feature combo that is impossible, they should receive an appropriate error message and the item should not be saved to the database.**
- [ ] **Users can view a list of all submitted `CustomItem`s.**
- [ ] **Users can edit a submitted `CustomItem` from the list view.**
- [ ] **Users can delete a submitted `CustomItem` from the list view.**
- [ ] **Users can update or delete `CustomItem`s from the detail page.**

---

## Optional Features Implemented

- [ ] Selecting particular options prevents incompatible options from being selected before form submission.

---

## Additional Features Implemented

- [x] Dynamic subtotal/total price updates in real-time based on the Convertible checkbox.
- [x] Fully responsive navigation bar with two top buttons (Customize, View Cars) and a second row of customization buttons and input.
- [x] Stylish and consistent UI with burgundy primary color, hover effects, and aligned button heights.
- [x] Mobile-friendly layout: buttons wrap and input aligns nicely on smaller screens.
- [x] Tailwind CSS ready for frontend styling.

---

## Video Walkthrough

Here's a walkthrough of implemented features:

![App Demo](./docs/demo.gif)

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with **Kap** for macOS (or **ScreenToGif** for Windows / **Peek** for Linux)

---

## Notes

### Challenges Encountered

- **Checkbox and input alignment:** Aligning the Convertible checkbox and input field in the nav bar with the CREATE button required careful use of flex and consistent height styling.
- **Responsive design:** Maintaining horizontal alignment for buttons on large screens while allowing proper stacking on small screens was challenging.
- **Dynamic subtotal:** Setting up the logic to update the subtotal in real-time from the nav bar inputs was a key focus for frontend interactivity.

---

## License

Copyright © 2025 **Abdul Wakil Najibi**

Licensed under the **Apache License, Version 2.0** (the “License”);  
you may not use this file except in compliance with the License.  
You may obtain a copy of the License at:

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software  
distributed under the License is distributed on an "AS IS" BASIS,  
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
