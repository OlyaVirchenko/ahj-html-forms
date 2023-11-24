import Tooltip from './tooltip';

const form = document.querySelector('.form');
const popoverButton = document.querySelector('.popover-button');

const tooltipsFactory = new Tooltip();

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  if (document.querySelector('.tooltip')) {
    tooltipsFactory.removeTooltip();
  } else {
    tooltipsFactory.showTooltip(popoverButton);
  }
});
