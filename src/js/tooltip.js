export default class Tooltip {
  constructor() {
    this.tooltips = [];
  }

  showTooltip(element) {
    const tooltipElement = document.createElement('div');
    tooltipElement.classList.add('tooltip');

    const tooltipTitle = document.createElement('h1');
    tooltipTitle.classList.add('tooltip-title');
    tooltipTitle.textContent = 'Popover title';

    const tooltipText = document.createElement('p');
    tooltipText.classList.add('tooltip-text');
    tooltipText.textContent = 'And heres some amazing content. Its very engaging. Right?';

    tooltipElement.insertAdjacentElement('afterbegin', tooltipText);
    tooltipElement.insertAdjacentElement('afterbegin', tooltipTitle);

    document.body.appendChild(tooltipElement);

    const { top, right } = element.getBoundingClientRect();

    tooltipElement.style.left = `${right + 5}px`;
    tooltipElement.style.top = `${top + element.offsetHeight / 2 - tooltipElement.offsetHeight / 2}px`;
  }

  removeTooltip() {
    const activeTooltip = document.querySelector('.tooltip');
    activeTooltip.remove();
  }
}
