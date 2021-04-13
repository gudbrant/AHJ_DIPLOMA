/* eslint-disable class-methods-use-this */
import printTime from './printTime.js';

export default class BotChat {
  constructor(parentEl) {
    this.weather = [
      'За окном солнечно',
      'Наденьте резиновые сапоги',
      '+20, теплее чем в твоем сердце',
      'Дождь, град и снег. Может в дотку?)',
      'Жарко, наверное у меня нет доступа в интернет - забыл?',
      'Сегодня -20 и снег',
    ];
    this.toGo = [
      'Сделай хотя бы 2 круга по комнате',
      'Куда угодно!',
      'В парк',
      'Человек, в стране карантин не над... Сходи в супермаркет! Там вкусняшки!',
    ];
    this.likeYou = [
      'Лучше чем тот, кто это писал!',
      'Хотите об этом послушать?',
      'Все отлично!',
      'Норм',
      'Теперь стало лучше',
    ];
    this.whatSee = [
      'Мультики - оптимальный вариант для твоего могучего мозга',
      'Обзоры на коляски для собак - почему нет?)',
      'Новости - рискни ментальным здоровьем, человек',
      'Кот Леопольда',
      'А погуглить?',
      'Что-нибудь хорошее?',
      'В окно',
    ];
    this.howTime = [
      'Планка 5 минут, ну хотя бы секунд',
      'Напиши что нибудь... Не сюда!',
      'Убраться! Включить робот пылесос это то еще достижение)',
      'Позови друз... Ах да, извини человек.',
      'Я бы предложил позвать друзей в гости, но судя по профилю в твоей соц. сети - я этого делать не буду.',
      'Сходи на природу, для этого не нужны другие человеки.',
      'Подыши свежим воздухом, заказать свежий воздух можно в интернете.',
    ];
    this.parentEl = parentEl;
  }

  funcBot(msg) {
    let msgHtml = '';
    let itemMsg = document.createElement('div');
    itemMsg.className = 'item-message no-favorit';
    itemMsg.innerHTML = `
    ${msg}
    <div class="footer-msg">
      <div class="date-time">${printTime(new Date())}</div>
    </div>
    `;
    this.parentEl.appendChild(itemMsg);

    const question = msg.replace(/^rabotnik: /, '');

    switch (question) {
      case 'погода':
        msgHtml = this.randomMsg(this.weather);
        break;
      case 'куда сходить?':
        msgHtml = this.randomMsg(this.toGo);
        break;
      case 'как дела?':
        msgHtml = this.randomMsg(this.likeYou);
        break;
      case 'что посмотреть?':
        msgHtml = this.randomMsg(this.whatSee);
        break;
      case 'как лучше провести время?':
        msgHtml = this.randomMsg(this.howTime);
        break;
      default:
        msgHtml = 'Вы отправили пустое сообщение, либо ваш вопрос некорректен. Пожалуйста, уточните ваш вопрос.';
        break;
    }

    itemMsg = document.createElement('div');
    itemMsg.className = 'item-message no-favorit bot';
    itemMsg.innerHTML = `
    ${msgHtml}
    <div class="footer-msg">
      <div class="date-time">${printTime(new Date())}</div>
    </div>
    `;
    this.parentEl.appendChild(itemMsg);
  }

  randomMsg(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
}
