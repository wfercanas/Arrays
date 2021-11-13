// This file is used by 01-for-each.html

const todos = [
  {
    title: 'Clean roof',
    status: 'backlog',
    'assigned-to': '@wfercanas',
  },
  {
    title: 'Buy Avocados',
    status: 'done',
    'assigned-to': '@wfercanas',
  },
  {
    title: 'Prepare lunch',
    status: 'in-process',
    'assigned-to': '@wfercanas',
  },
  {
    title: 'invite friends',
    status: 'done',
    'assigned-to': '@wfercanas',
  },
  {
    title: 'Buy beer',
    status: 'backlog',
    'assigned-to': '@wfercanas',
  },
];

const backlog = document.getElementById('backlog');
const inProcess = document.getElementById('in-process');
const done = document.getElementById('done');

todos.forEach((item) => {
  const element = document.createElement('li');
  element.innerHTML = `
    <div>
      <p class="title">${item.title}</p>
      <p class=${item.status}>${item.status}</p>
      <p class="assigned">${item['assigned-to']}</p>
    </div>
  `;

  switch (item.status) {
    case 'backlog':
      element.classList.add('backlog');
      backlog.appendChild(element);
      break;
    case 'in-process':
      element.classList.add('in-process');
      inProcess.appendChild(element);
      break;
    case 'done':
      element.classList.add('done');
      done.appendChild(element);
      break;
    default:
      break;
  }
});
