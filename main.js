import data from './data.js'

document.addEventListener("DOMContentLoaded", () => {
  const info = document.querySelector('.interaction-map__info')
  const items = document.querySelector('.interaction-map__items')

  items.scrollTo({
    top: items.scrollHeight / 4
  })

  data.forEach(item => {

    const home = item.home ? `<img src="/public/home.svg"/>` : ''

    const status = item.status === 'свободен' ? 'interaction-map__items-item--open':
    item.status === 'приобретен' ? 'interaction-map__items-item--buy' : 'interaction-map__items-item--close'

    const statusColor = item.status === 'свободен' ? '#81a837' : item.status === 'приобретен' ? '#639309' : 'red'

    const elemString = /*html*/`
      <div class="interaction-map__items-item-wrapper">
          <div id="${item.id}" class="interaction-map__items-item ${status}" style="
            top: ${item.position.pos[0]}px;
            left: ${item.position.pos[1]}px;
            ">
            ${item.position.svg}
            <p>${item.id}</p>
            ${home}
          </div>
        </div>
    `

    const elementParse = new DOMParser().parseFromString(elemString, 'text/html')

    const elementDiv = elementParse.body.firstChild

    elementDiv.addEventListener("click", (e) => {
      e.preventDefault()

      info.classList.remove('interaction-map__info--hide')

      const chars = Object.entries(item.chars)

      info.innerHTML = /*html*/`
    <h3>
      ${item.title}
    </h3>
    <ul>
      ${chars.map(char => `
      <li>
        ${char[0]}:
        <span>
          ${char[1]}
        </span>
      </li>`).join('')}
      <li>
        Статус:
        <span style="color: ${statusColor}">
          ${item.status}
        </span>
      </li>
    </ul>
    <button class="interaction-map__info-button" id="${item.id}">
      Узнать подробнее
    </button>
      `
    })

    items.appendChild(elementDiv)
  })
})