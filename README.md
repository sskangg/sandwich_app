# sandwich_app

Created with CodeSandbox

## Notes on Development

- Total Project Time: ~20 hrs
- Wireframes: [invisionApp](https://projects.invisionapp.com/freehand/document/5EMWjS6xr)
- Github: [sandwich app](https://github.com/jtmcg/sandwich_app)
- CodeSandbox: [sandwich app](https://codesandbox.io/s/nervous-edison-b670x?file=/README.md)
- Tech: React with JavaScript
- Testing: Manual - plan to add Jest testing later
- Commenting: JSDoc

### Extensibility

I tried to build this app to be as extensible so that it could fit into an existing app or be expanded out easily. Here's a few highlights on how I've achieved this:

1. There are [classes](./src/src) to manage orders, menu items, and inventory.
1. There are fetch placeholders for API calls in the [Inventory](./src/src/inventory.js) class and in the [Menu Component](./src/components/menu/Menu.js).
1. Components are self-contained and reusable.

### Stretch Features

In addition to fulfilling the requirements of the challenge, there are a few stretch features I implemented:

1. A tracker for Active Orders
1. A tracker for Average Completion Time on an order
1. The ability to edit orders
1. The ability to remove an item from an order once it has been added
1. The ability to cancel orders
1. A toggle to hide/show completed orders
1. A timer on orders that shows how long the order has been active. This timer turns red if the order has been active for more than 20 min
1. The completion time of a completed order
1. Images to the menu items, rendered on the menu and on the order list

### Planned Features

There are a few stretch goals I imagined in my wireframes that I have not yet had the chance to implement.

1. A working Search feature to search for an order
1. The ability to reopen and/or copy a previously closed order
1. A tab and scrolling feature to accomodate an extended menu
1. Add-ons or additional options for a given sandwich
1. The "New Order" button as an order box

### Improvements/Weaknesses

Here are some highlights of some notable shortcomings of the implementation. Some of these are due to time constraints, while others are due to limitations set forth by the parameters of the project. Notably, sometimes shipping is more important than addressing all of these - tech debt is both an expectation for agility and a necessity for a young company/project.

1. UI is very basic - now that the features are in this could do for another design pass. However, given the app doesn't have much of an identity beyond this challenge, it is hard to frame. Further UI improvements likely come with the establishment of a restaurant name and brand, etc. These improvements seem beyond the scope of this challenge.
1. Further optimizations for small screens - Around 600px, some of the UI breaks down. Though my design and use of flexboxes and grids allows for fairly decent responsiveness, there would need to be some changes for a mobile applications such as collapsing menus, more responsive images and data entry forms, etc. As an example, in the "Create/Edit Order" modal, I would likely remove Sandwich names and descriptions from the selection boxes and use only pictures at a certain breakpoint.
1. Confirmation modals - Users would get quite frustrated if they accidently cancelled or completed an order. Confirmation modals for these types of actions would improve the UX.
1. Styling of the scroll-bars and other built-in elements.
1. Custom built form components instead of HTML forms and bandaid css.
1. Automatic timer updates instead of updating with a rerender. It should leverage a timeout or interval closure to update the time every minute.
