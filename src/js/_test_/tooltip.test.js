/**
* @jest-environment jsdom
*/

import Tooltip from '../tooltip';

test('tooltip text content', () => {
  const tooltip = new Tooltip();

  document.body.innerHTML = `<div class="container">
<form class="form">
    <button class="popover-button">Click to toggle popover</button>
</form>
</div>`;

  const btnText = document.querySelector('.popover-button').textContent;

  expect(btnText).toBe('Click to toggle popover');
});

test('popover up', () => {
  const tooltip = new Tooltip();

  document.body.innerHTML = `<div class="container">
    <form class="form">
        <button class="popover-button">Click to toggle popover</button>
    </form>
    </div>`;

  const btn = document.querySelector('.popover-button');

  tooltip.showTooltip(btn);

  const popoverUp = document.querySelector('.tooltip');

  expect(popoverUp.className).toBe('tooltip');
});
