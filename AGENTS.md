# AGENTS.md

## Project

This is a premium, responsive food delivery website built as an academic AI-agent development project.

The website should feel like a real, established food brand rather than a generic AI-generated student website.

The main goal is to create a polished food-ordering experience with a strong visual identity, clean UI/UX, responsive design, and fully working cart and checkout functionality.

## Tech Stack

Use only HTML5, CSS3, and Vanilla JavaScript.

Do not use any other language, framework, library, or unnecessary dependency.

Keep the implementation simple and suitable for a static website.

Keep the implementation simple and suitable for a static website.

## Required Features

The website must include:

Food menu with at least 6 items

Add to Cart functionality

Cart counter

Increase quantity

Decrease quantity

Remove items when appropriate

Automatically updated total price

Checkout form

Form validation

Place Order button

Order confirmation/feedback

Mobile responsive design

The website does not require:

Real payment processing

User authentication

A backend

A database

Real order delivery tracking

Do not add unnecessary functionality outside the assignment requirements.

## Design Direction

The website must have a luxurious, premium, modern food-brand aesthetic.

It should look like a professionally designed website for an established restaurant or food-delivery brand.

It must NOT look like a generic AI-generated website.

Prioritize:

Typography

Visual hierarchy

Spacing

Composition

High-quality imagery

Alignment

Consistency

Simplicity

Strong branding

The design should feel intentional and sophisticated rather than visually overloaded.

## Color Palette

The required brand palette is:

Red

Use a sophisticated deep/premium red as the primary accent.

Use it for:

Primary CTA buttons

Prices

Cart badge

Important highlights

Active states

Black

Use black or near-black for:

Main headings

Navigation

Strong text

Footer

Important UI elements

White

Use white as the primary background and clean surface color.

Supporting neutrals

Muted gray/off-white tones may be used for:

Secondary text

Borders

Form fields

Subtle backgrounds

Do not introduce unrelated accent colors.

The overall visual identity must clearly remain red + black + white.

Do not randomly use different red shades throughout the website.

## Typography

Typography is a major design requirement.

Use a premium, professional typography system similar to typography used by established global brands.

Typography must not look like default AI-generated UI.

Use a maximum of two font families:

One strong display/heading font

One clean body/UI font

Possible premium combinations include:

Playfair Display + Inter

DM Serif Display + Manrope

Cormorant Garamond + Manrope

Choose the pairing that best fits the final visual direction rather than automatically using one combination.

Typography must have a clear hierarchy:

Hero heading

Section headings

Card headings

Body text

Prices

Buttons

Form labels

Do not use excessively large headings, excessive font weights, decorative fonts, or inconsistent font sizes.

Use appropriate line height, letter spacing, and responsive font sizes.

The typography should be elegant on desktop and remain readable on mobile.

## Visual Style

Avoid common AI-generated design patterns such as:

Excessive gradients

Neon effects

Glassmorphism

Random floating shapes

Decorative blobs

Excessive shadows

Excessive rounded cards

Huge text without purpose

Too many badges

Too many animations

Unnecessary visual effects

Generic AI illustrations

Do not add visual elements simply to make the page look "fancy."

Luxury should come from:

Typography + spacing + imagery + composition + color discipline

rather than visual clutter.

## Layout

Use a clean and consistent layout system.

Prefer:

CSS Grid

Flexbox

Consistent max-width containers

Strong alignment

Balanced spacing

Clear section hierarchy

Generous whitespace

Maintain a consistent spacing rhythm throughout the website.

Do not randomly change spacing between sections or components.

The website should feel visually connected from top to bottom.

## Components

Build the interface using reusable and consistent components/patterns.

Avoid duplicating the same HTML structure unnecessarily.

Repeated elements such as food cards, buttons, cart items, navigation elements, and form fields should follow reusable structures and consistent styling.

For repeated food items, prefer structured JavaScript data and reusable rendering logic rather than manually duplicating the same markup.

## Images

Use high-quality, relevant food imagery throughout the website.

Keep image assets organized in the project and maintain consistent image sizing, cropping, and aspect ratios.

Do not leave placeholder images or use random, inconsistent imagery in the final design.

## Hero Section

The hero should immediately communicate:

Premium food + easy ordering.

It should contain:

Strong headline

Short supporting text

Primary CTA

High-quality food imagery

The hero should have strong visual hierarchy without becoming oversized or cluttered.

Avoid the typical AI-generated hero with huge text, multiple gradients, floating shapes, badges, and unnecessary buttons.

## Food Menu

Include at least 6 food items.

Prefer approximately 8 items for a more complete menu.

Each food card should include:

High-quality food image

Food name

Short description

Price

Add to Cart button

Food cards must have:

Consistent image proportions

Consistent spacing

Clear typography

Clear CTA

Balanced visual hierarchy

Cards should feel premium and restrained.

Avoid excessive shadows, borders, gradients, and exaggerated rounded corners.

## Cart

The cart must:

Show selected items

Display item quantity

Allow quantity increase

Allow quantity decrease

Remove items when quantity reaches zero

Update the cart counter

Calculate the total correctly

Display an appropriate empty-cart state

Use structured JavaScript data for cart items.

Do not calculate prices from displayed text when structured numeric values can be used.

## Checkout

The checkout section must contain appropriate fields such as:

Full name

Phone number

Delivery address

Additional order information where appropriate

Use:

Semantic HTML

Proper labels

Appropriate input types

Required-field validation

The user should receive clear feedback when information is missing or invalid.

## Place Order

When the user clicks Place Order:

Validate the checkout form.

Check that the cart contains items.

Prevent the order if required information is missing.

Show a clear success message after a valid order.

Clear/reset the cart appropriately after successful ordering.

No real payment processing is required.

## Responsive Design

The website must work properly on:

Desktop

Tablet

Mobile

Do not design the desktop version first and treat mobile as an afterthought.

Check:

Navigation

Hero section

Food cards

Cart

Checkout form

Buttons

Typography

Images

Spacing

The website must not have horizontal scrolling.

Mobile buttons and cart controls must be comfortable to use with touch.

The mobile design should feel intentionally designed, not like a compressed desktop layout.

## Accessibility

Follow basic accessibility principles:

Use semantic HTML.

Use proper heading hierarchy.

Give meaningful images appropriate alt text.

Use labels for form fields.

Keep interactive elements keyboard accessible.

Maintain visible focus states.

Maintain sufficient color contrast.

Do not use color alone to communicate important information.

## Code Quality

Write:

Clean HTML

Organized CSS

Readable JavaScript

Meaningful class and function names

Reusable styles where appropriate

Simple and maintainable code

Avoid:

Duplicate code

Dead code

Unused variables

Unnecessary comments

Unnecessary complexity

Unused libraries

Over-engineering

Use the simplest solution that correctly solves the requirement.

## Existing Code

Before changing anything:

Inspect the existing project.

Understand the current structure.

Identify existing functionality.

Identify what is working.

Identify what needs improvement.

Do not rewrite the entire project unnecessarily.

Preserve working functionality.

If only one section needs improvement, modify that section instead of rebuilding unrelated sections.

If an existing design does not follow these project requirements, improve the design while preserving working functionality where possible.

## AI Development Workflow

Follow this workflow strictly:

Analyze → Plan → Implement → Test → Review → Fix

Do not skip analysis or testing.

## AI Agent Usage

Use GitHub Copilot Agent for the initial implementation, Cursor Agent for analysis and improvement, and OpenAI Codex for final review, bug fixing, and testing.

Give each agent a specific task and provide the necessary context before making changes.

## AI Credit Efficiency

Prefer small, targeted agent tasks over repeated full-project generations.

Do not regenerate or rewrite the entire project when only a specific section or file needs modification.

## Parallel Agents

Use parallel agents only for independent tasks such as UI review, functionality review, or code-quality review.

Never allow multiple agents to modify the same files simultaneously.

## Feedback Rules

Use this structure when giving an agent feedback:

Problem → Desired Change → Constraint

When fixing one section, do not change unrelated sections unless required for compatibility.

## Before Making Changes

Read this file first, then inspect the complete existing project and relevant files.

Do not modify files until you understand the current structure and requested change.

only make changes to that part which is told, not change the whole website . 

## Final Quality Standard

Before considering the project complete, verify:

Every assignment requirement is implemented.

All cart and checkout interactions work correctly.

Quantity and total calculations are correct.

The place-order flow works.

Responsive layouts work across screen sizes.

Typography, spacing, and alignment are consistent.

The red, black, white, and neutral visual system is maintained.

Reusable patterns are used where appropriate.

Images are relevant, consistent, and properly integrated.

There are no unnecessary visual effects or components.

There are no console errors.

Existing functionality has not been broken.

The final result looks polished and production-quality.