import { motion } from "framer-motion";
import "./index.css";

const blocks = [
  {
    title: '"ПАРАДНЫЙ ПЕТЕРБУРГ"',
    subtitle: "Обзорная пешеходная экскурсия",
    image: "/photo2.jpg",
    price: "8 000₽",
    type: "Идеальный маршрут для первого знакомства с городом",
    items: [
      "2-3 часа",
      "1-6 человек",
      "Во время прогулки мы посетим три главные площади Петербурга - Исаакиевскую, Сенатскую и Дворцовую. Вы увидите самые известные достопримечательности города, узнаете истории их создания и познакомитесь с судьбами людей, которые формировали облик имперской столицы.",
      "Мы поговорим о Петре I, российских императорах, выдающихся архитекторах и событиях, благодаря которым Петербург стал одним из красивейших городов мира.",
      "Эта экскурсия поможет почувствовать величие парадного Петербурга и увидеть его главные символы через истории и судьбы людей."
    ]
  },

  {
    title: '"КОЛЫБЕЛЬ ПЕТЕРБУРГА"',
    subtitle: "Пешеходная экскурсия",
    image: "/photo3.jpg",
    price: "7 000₽",
    type: "",
    items: [
      "2 часа",
      "1-6 человек",
      "Приглашаю вас отправиться к истокам Санкт-Петербурга и познакомиться с местом, где началась история великого города.",
      "Мы прогуляемся по Кронверкской набережной с живописным видом на Петропавловскую крепость, поговорим о первых днях строительства новой столицы и личности Петра.",
      "Через Троицкую площадь и Петровскую набережную мы дойдем до Домика Петра | - первого жилого здания города и свидетеля рождения Петербурга.",
      "Эта экскурсия подойдет тем, кто хочет узнать историю основания города и увидеть места, с которых начинался Санкт-Петербург."
    ]
  },

  {
    title: '"САНКТ-ПЕТЕРБУРГ ЗА 1 ДЕНЬ"',
    subtitle: "Пешеходно-автомобильная экскурсия",
    image: "/photo4.jpg",
    price: "15 000₽",
    type: "",
    items: [
      "4-5 часов",
      "1-4 человек",
      "Маршрут для тех, кто хочет увидеть Петербург максимально разнообразным и многогранным всего за один день.",
      "Наше знакомство с городом начнется с пешеходной экскурсии. Вы сможете выбрать один из маршрутов - «Парадный Петербург» или «Колыбель Петербурга», чтобы почувствовать атмосферу города, его характер и историю.",
      "Затем мы продолжим путешествие на комфортабельном автомобиле и отправимся к местам, куда добираются далеко не все гости города.",
      "Мы посетим Смольный собор - один из самых красивых архитектурных ансамблей Санкт-Петербурга. При желании можно подняться на звонницу и полюбоваться великолепной панорамой города с высоты.",
      "Завершим экскурсию в Свято-Троицкой Александро-Невской лавре - духовном сердце Петербурга, месте особой атмосферы, истории и тишины.",
      "Эта экскурсия позволяет за один день увидеть разные грани города: его историю, архитектурное великолепие, духовное наследие и удивительные виды."
    ]
  },

  {
    title: '"ВОДНЫЕ ПРОГУЛКИ ПО РЕКАМ И КАНАЛАМ САНКТ-ПЕТЕРБУРГА"',
    subtitle: "Индивидуальные прогулки на катере или яхте",
    image: "/photo5.jpg",
    price: "7 000₽",
    type: "МОЁ ГЛАВНОЕ НАПРАВЛЕНИЕ!",
    items: [
      "2 часа",
      "1-10 человек",
      "«Северная Венеция» : прогулка по рекам и каналам Петербурга. Нас ждут парадные набережные, реки Фонтанка и Мойка, Крюков канал и самые живописные виды исторического центра города с воды.",
      "«Парадный Петербург с выходом в Финский залив» : Во время маршрута мы познакомимся с достопримечательностями XVIII-XIX веков, а затем перенесёмся в Петербург XXI века. Увидим Лахта Центр, Западный скоростной диаметр, вантовые мосты, «Газпром Арену» и выйдем в Финский залив, где нас встретят простор, морской воздух и балтийский бриз.",
      "Подберу водный транспорт под ваш запрос и настроение - уютный катер для романтической прогулки или яхту для особенного путешествия.",
    ],
    type2: "(катера и яхты оплачиваются отдельно)"
  },
];

function App() {
  const scrollToFooter = () => {

    const footer = document.getElementById("footer");

    if (footer) {

      footer.scrollIntoView({
        behavior: "smooth"
      });

    }
  };



  return (
    <div className="app">
      <section className="hero">
        <img
          className="hero-image"
          src="/photo1.jpg"
          alt=""
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="hero-title">
              ПО САНКТ-ПЕТЕРБУРГУ
              С ВАСИЛИНОЙ
            </h1>
            <p className="hero-text">
              Авторские индивидуальные экскурсии.
            </p>
            <p className="hero-text">
              Влюбляю в Петербург через истории, атмосферу и красоту города.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="blocks">
        {blocks.map((block, index) => (
          <motion.div
            key={index}
            className="photo-block"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="photo-top">
              <span className="photo-small">
                {block.title}
              </span>
              <h2 className="photo-heading">
                {block.subtitle}
              </h2>
            </div>
            <img
              src={block.image}
              alt=""
              className="photo-image"
            />
            <div className="photo-bottom">
              
              <div className="photo-line" />
              <p className="photo-subtitle">
                {block.type}
              </p>
              <ul className="photo-list">
                {block.items.map((item, i) => (
                  <li key={i}>
                    — {item}
                  </li>
                ))}
              </ul>
              <p className="photo-subtitle">
                {block.type2}
              </p>
              <div className="photo-price">
                {block.price}
              </div>
              <div className="photo-line" />

            </div>
          </motion.div>
        ))}
      </section>
    <footer className="footer" id="footer">
      <div className="footer-content">
        <h3 className="footer-title">
          Связаться со мной
        </h3>
        <p className="footer-text">
          Василина
        </p>
        <a
          href="tel:+79114876720"
          className="footer-link"
        >
          +7 (911) 487-67-20
      </a>
        <a
          href="https://t.me/vasilinat505"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Telegram : @vasilinat505
        </a>
        <a
          href="https://instagram.com/wasilinam"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Instagram : wasilinam
        </a>
      </div>
    </footer>
      <div
        className="fixed-cta"
        onClick={scrollToFooter}
      >
        <button className="fixed-cta-button">
          ЗАПИСАТЬСЯ
        </button>
      </div>
    </div>
  );
}

export default App;
