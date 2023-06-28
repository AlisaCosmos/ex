import "./Contacts.scss";

export default function Contacts({ id, header}) {
  return (
    <section className="contacts container" id={id}>
       {header('black', true)}
      <div className="contacts__inner container__row">
        <h1 className="contacts__header">Контакты</h1>
        <div className="contacts__content">
          <div className="contacts__item">
            <div className="contacts__subtitle">Адрес</div>
            <div className="contacts__description">
              Армения, г. Ереван, ул. Ерванда Кочара, д. 8/7
            </div>
          </div>

          <div className="contacts__item">
            <div className="contacts__subtitle">Для связи</div>
            <div className="contacts__description">
              <a className="contacts__tel" href="tel:+37441221733">+374 41 221733</a>
            </div>
          </div>

          <div className="contacts__item">
            <div className="contacts__subtitle">Почта</div>
            <div className="contacts__description">
              <a className="contacts__email" href="mailto:info@eximpartners.online">info@eximpartners.online </a>
            </div>
          </div>
        </div>
      </div>
      <div className="contacts__mapWrapper">
        {/* <iframe className="contacts__map" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.165638818975!2d44.49303727587663!3d40.205378271474345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd43a4205f0d%3A0xedad332412bc3638!2zMzYgTWFudXNoaWFuIFN0LCBZZXJldmFuLCDQkNGA0LzQtdC90LjRjw!5e0!3m2!1sru!2sru!4v1669628580555!5m2!1sru!2sru" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe> */}
        <iframe className="contacts__map" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.773359044525!2d44.51397691516974!3d40.16959957939461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abc5fa0054f09%3A0x17024219dbb1b381!2s8%20Yervand%20Kochar%20St%2C%20Yerevan%2C%20Armenia!5e0!3m2!1sen!2sru!4v1680002629470!5m2!1sen!2sru" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
    
  );
}
