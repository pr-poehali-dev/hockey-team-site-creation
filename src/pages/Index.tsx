import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/821db23e-d78c-46e6-b25c-58ed2234a550/files/a954653d-103b-422a-b1ea-7b49f40d329b.jpg";

const schedule = [
  { day: "Понедельник", time: "18:00 – 19:30", group: "Дети (7–10 лет)", spots: 3 },
  { day: "Понедельник", time: "19:45 – 21:15", group: "Юниоры (11–14 лет)", spots: 5 },
  { day: "Среда", time: "17:00 – 18:30", group: "Дети (7–10 лет)", spots: 2 },
  { day: "Среда", time: "19:00 – 20:30", group: "Взрослые (15+)", spots: 8 },
  { day: "Пятница", time: "18:00 – 19:30", group: "Юниоры (11–14 лет)", spots: 4 },
  { day: "Пятница", time: "20:00 – 21:30", group: "Взрослые (15+)", spots: 6 },
  { day: "Суббота", time: "10:00 – 11:30", group: "Дети (7–10 лет)", spots: 1 },
  { day: "Суббота", time: "12:00 – 13:30", group: "Открытая тренировка", spots: 10 },
];

const prices = [
  {
    title: "Разовое занятие",
    price: "1 500 ₽",
    desc: "Попробуй без обязательств",
    features: ["1 тренировка", "Прокат экипировки", "Инструктор в группе"],
    accent: false,
  },
  {
    title: "Абонемент 8 занятий",
    price: "9 600 ₽",
    desc: "Самый популярный выбор",
    features: ["8 тренировок", "Прокат экипировки", "Индивидуальный разбор", "Скидка 20%"],
    accent: true,
  },
  {
    title: "Абонемент 16 занятий",
    price: "16 000 ₽",
    desc: "Для серьёзного роста",
    features: ["16 тренировок", "Экипировка в подарок", "2 индивид. занятия", "Скидка 33%", "Приоритетная запись"],
    accent: false,
  },
];

const coaches = [
  { name: "Алексей Громов", role: "Главный тренер", exp: "18 лет в хоккее", icon: "⭐" },
  { name: "Дмитрий Волков", role: "Тренер вратарей", exp: "КМС по хоккею", icon: "🥅" },
  { name: "Мария Северова", role: "Физподготовка", exp: "Мастер спорта", icon: "💪" },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDay, setActiveDay] = useState("Все");

  const days = ["Все", "Понедельник", "Среда", "Пятница", "Суббота"];
  const filtered = activeDay === "Все" ? schedule : schedule.filter((s) => s.day === activeDay);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🚀</span>
            <span className="text-xl font-bold tracking-widest text-white uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Красная <span className="text-[#e81c1c]">Ракета</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider text-gray-300">
            {[["О команде", "about"], ["Расписание", "schedule"], ["Цены", "prices"], ["Тренеры", "coaches"], ["Контакты", "contact"]].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="hover:text-[#e81c1c] transition-colors uppercase tracking-widest text-xs">
                {label}
              </button>
            ))}
          </div>
          <button
            className="hidden md:block bg-[#e81c1c] hover:bg-[#c41515] text-white font-bold px-6 py-2 uppercase tracking-widest text-sm transition-colors"
            style={{ fontFamily: "'Oswald', sans-serif" }}
            onClick={() => scrollTo("contact")}
          >
            Записаться
          </button>
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#0f0f0f] border-t border-[#1a1a1a] px-4 py-4 flex flex-col gap-4">
            {[["О команде", "about"], ["Расписание", "schedule"], ["Цены", "prices"], ["Тренеры", "coaches"], ["Контакты", "contact"]].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-left text-gray-300 hover:text-[#e81c1c] uppercase tracking-widest text-sm transition-colors" style={{ fontFamily: "'Oswald', sans-serif" }}>
                {label}
              </button>
            ))}
            <button className="bg-[#e81c1c] text-white font-bold px-6 py-3 uppercase tracking-widest text-sm" style={{ fontFamily: "'Oswald', sans-serif" }} onClick={() => scrollTo("contact")}>
              Записаться
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Хоккеист" className="w-full h-full object-cover object-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-1/2 h-px bg-gradient-to-r from-[#e81c1c] to-transparent opacity-60" style={{ animation: "slideRight 3s ease-in-out infinite" }} />
          <div className="absolute top-2/3 left-0 w-1/3 h-px bg-gradient-to-r from-[#e81c1c] to-transparent opacity-40" style={{ animation: "slideRight 4s ease-in-out infinite 1s" }} />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-[#e81c1c]" />
              <span className="text-[#e81c1c] uppercase tracking-[0.3em] text-sm" style={{ fontFamily: "'Oswald', sans-serif" }}>Хоккейный клуб</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-none mb-4 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Здесь ты<br />
              <span className="text-[#e81c1c] relative inline-block">
                вырастешь
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#e81c1c]" />
              </span>
              <br />
              легендой
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mt-8 mb-10 max-w-xl leading-relaxed">
              Профессиональные тренеры, настоящий лёд, сильная команда. Мы растим чемпионов с 7 до 40 лет.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo("contact")}
                className="bg-[#e81c1c] hover:bg-[#c41515] text-white font-bold px-10 py-4 uppercase tracking-widest text-base transition-all hover:scale-105 flex items-center gap-3"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                <Icon name="Send" size={18} />
                Записаться на пробное
              </button>
              <button
                onClick={() => scrollTo("schedule")}
                className="border border-white/30 hover:border-[#e81c1c] text-white hover:text-[#e81c1c] font-bold px-10 py-4 uppercase tracking-widest text-base transition-all flex items-center gap-3"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                <Icon name="Calendar" size={18} />
                Расписание
              </button>
            </div>
            <div className="flex gap-10 mt-14">
              {[["150+", "Воспитанников"], ["12", "Лет опыта"], ["3", "Тренера КМС"]].map(([num, label]) => (
                <div key={label}>
                  <div className="text-3xl font-bold text-[#e81c1c]" style={{ fontFamily: "'Oswald', sans-serif" }}>{num}</div>
                  <div className="text-gray-400 text-xs uppercase tracking-wider mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs uppercase tracking-widest">Листай вниз</span>
          <Icon name="ChevronDown" size={20} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#e81c1c]" />
                <span className="text-[#e81c1c] uppercase tracking-[0.3em] text-xs" style={{ fontFamily: "'Oswald', sans-serif" }}>О команде</span>
              </div>
              <h2 className="text-5xl font-bold uppercase mb-6 leading-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Красная Ракета —<br />
                <span className="text-[#e81c1c]">твой старт</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Мы основаны 12 лет назад с одной целью — дать каждому шанс стать хоккеистом. Неважно, сколько тебе лет и был ли ты на льду раньше.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                За эти годы наши воспитанники выступали на региональных и всероссийских соревнованиях. Некоторые из них сейчас играют в профессиональных лигах.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: "Shield" as const, text: "Безопасный тренировочный процесс" },
                  { icon: "Zap" as const, text: "Быстрый прогресс с первого занятия" },
                  { icon: "Users" as const, text: "Команда — вторая семья" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#e81c1c]/10 border border-[#e81c1c]/30 flex items-center justify-center flex-shrink-0">
                      <Icon name={icon} size={16} className="text-[#e81c1c]" />
                    </div>
                    <span className="text-gray-300 text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-[#1a1a1a] border border-[#2a2a2a] relative overflow-hidden">
                <img src={HERO_IMAGE} alt="Команда" className="w-full h-full object-cover opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-[#e81c1c] text-5xl font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>2012</div>
                  <div className="text-gray-300 text-sm uppercase tracking-wider">Год основания</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#e81c1c] opacity-30" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#e81c1c]/10 border border-[#e81c1c]/30" />
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#e81c1c]" />
              <span className="text-[#e81c1c] uppercase tracking-[0.3em] text-xs" style={{ fontFamily: "'Oswald', sans-serif" }}>Расписание</span>
              <div className="w-8 h-px bg-[#e81c1c]" />
            </div>
            <h2 className="text-5xl font-bold uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>Тренировки</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-5 py-2 uppercase tracking-widest text-xs transition-all font-bold ${
                  activeDay === day
                    ? "bg-[#e81c1c] text-white"
                    : "border border-[#2a2a2a] text-gray-400 hover:border-[#e81c1c] hover:text-[#e81c1c]"
                }`}
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {day}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {filtered.map((item, i) => (
              <div key={i} className="flex items-center justify-between bg-[#0f0f0f] border border-[#1a1a1a] hover:border-[#e81c1c]/40 p-5 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-1 h-12 bg-[#e81c1c] flex-shrink-0" />
                  <div>
                    <div className="text-white uppercase tracking-wider text-sm font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>{item.group}</div>
                    <div className="text-gray-500 text-xs mt-1 flex items-center gap-2">
                      <Icon name="Clock" size={12} />
                      {item.time}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white text-sm uppercase tracking-wider hidden sm:block font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>{item.day}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    Мест: <span className={item.spots <= 2 ? "text-[#e81c1c] font-bold" : "text-green-500 font-bold"}>{item.spots}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-xs mt-6 uppercase tracking-wider flex items-center justify-center gap-1">
            <Icon name="MapPin" size={12} />
            Ледовый дворец «Арктика», ул. Спортивная, 12
          </p>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-24 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#e81c1c]" />
              <span className="text-[#e81c1c] uppercase tracking-[0.3em] text-xs" style={{ fontFamily: "'Oswald', sans-serif" }}>Стоимость</span>
              <div className="w-8 h-px bg-[#e81c1c]" />
            </div>
            <h2 className="text-5xl font-bold uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>Цены</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {prices.map((p) => (
              <div key={p.title} className={`relative flex flex-col border ${p.accent ? "border-[#e81c1c] bg-[#e81c1c]/5" : "border-[#1a1a1a] bg-[#0a0a0a]"} p-8 transition-all hover:border-[#e81c1c]/60`}>
                {p.accent && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e81c1c] text-white text-xs uppercase tracking-widest px-4 py-1 font-bold whitespace-nowrap" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    Популярный
                  </div>
                )}
                <div className="text-gray-400 uppercase tracking-widest text-xs mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>{p.title}</div>
                <div className="text-4xl font-bold text-white mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>{p.price}</div>
                <div className="text-gray-500 text-xs mb-6">{p.desc}</div>
                <div className="flex-1 flex flex-col gap-3 mb-8">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-center gap-3 text-sm text-gray-300">
                      <Icon name="Check" size={14} className="text-[#e81c1c] flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => scrollTo("contact")}
                  className={`w-full font-bold py-3 uppercase tracking-widest text-sm transition-all hover:scale-[1.02] ${p.accent ? "bg-[#e81c1c] text-white hover:bg-[#c41515]" : "border border-[#e81c1c] text-[#e81c1c] hover:bg-[#e81c1c] hover:text-white"}`}
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  Выбрать
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COACHES */}
      <section id="coaches" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#e81c1c]" />
              <span className="text-[#e81c1c] uppercase tracking-[0.3em] text-xs" style={{ fontFamily: "'Oswald', sans-serif" }}>Команда</span>
              <div className="w-8 h-px bg-[#e81c1c]" />
            </div>
            <h2 className="text-5xl font-bold uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>Тренеры</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {coaches.map((c) => (
              <div key={c.name} className="bg-[#0f0f0f] border border-[#1a1a1a] hover:border-[#e81c1c]/40 p-8 text-center transition-all group">
                <div className="w-20 h-20 mx-auto mb-5 bg-[#1a1a1a] border border-[#2a2a2a] group-hover:border-[#e81c1c]/40 flex items-center justify-center text-4xl transition-all">
                  {c.icon}
                </div>
                <div className="text-xl font-bold uppercase tracking-wider mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>{c.name}</div>
                <div className="text-[#e81c1c] text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>{c.role}</div>
                <div className="text-gray-500 text-sm">{c.exp}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-[#e81c1c] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold uppercase text-white mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Первая тренировка — бесплатно
          </h2>
          <p className="text-white/80 text-lg mb-8">Запишись сегодня и приходи познакомиться с командой</p>
          <button
            onClick={() => scrollTo("contact")}
            className="bg-white text-[#e81c1c] font-bold px-12 py-4 uppercase tracking-widest text-base hover:bg-gray-100 transition-all hover:scale-105"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Хочу попробовать
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#e81c1c]" />
                <span className="text-[#e81c1c] uppercase tracking-[0.3em] text-xs" style={{ fontFamily: "'Oswald', sans-serif" }}>Контакты</span>
              </div>
              <h2 className="text-5xl font-bold uppercase mb-8 leading-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Запишись<br />
                <span className="text-[#e81c1c]">прямо сейчас</span>
              </h2>
              <div className="flex flex-col gap-6">
                {[
                  { icon: "Phone" as const, label: "Телефон", value: "+7 (999) 123-45-67" },
                  { icon: "Mail" as const, label: "Email", value: "info@krasnaya-raketa.ru" },
                  { icon: "MapPin" as const, label: "Адрес", value: "ул. Спортивная, 12, Ледовый дворец «Арктика»" },
                  { icon: "Clock" as const, label: "Часы работы", value: "Пн–Вс: 9:00 – 22:00" },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#e81c1c]/10 border border-[#e81c1c]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name={icon} size={16} className="text-[#e81c1c]" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs uppercase tracking-wider">{label}</div>
                      <div className="text-white text-sm mt-1">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-8">
              <h3 className="text-2xl font-bold uppercase mb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>Оставить заявку</h3>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-gray-500 text-xs uppercase tracking-wider block mb-2">Ваше имя</label>
                  <input type="text" placeholder="Иван Петров" className="w-full bg-[#0f0f0f] border border-[#1a1a1a] focus:border-[#e81c1c] text-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-gray-600" />
                </div>
                <div>
                  <label className="text-gray-500 text-xs uppercase tracking-wider block mb-2">Телефон</label>
                  <input type="tel" placeholder="+7 (___) ___-__-__" className="w-full bg-[#0f0f0f] border border-[#1a1a1a] focus:border-[#e81c1c] text-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-gray-600" />
                </div>
                <div>
                  <label className="text-gray-500 text-xs uppercase tracking-wider block mb-2">Возраст / группа</label>
                  <select className="w-full bg-[#0f0f0f] border border-[#1a1a1a] focus:border-[#e81c1c] text-white px-4 py-3 text-sm outline-none transition-colors">
                    <option value="" className="bg-[#0f0f0f]">Выберите группу</option>
                    <option className="bg-[#0f0f0f]">Дети (7–10 лет)</option>
                    <option className="bg-[#0f0f0f]">Юниоры (11–14 лет)</option>
                    <option className="bg-[#0f0f0f]">Взрослые (15+)</option>
                  </select>
                </div>
                <button
                  className="w-full bg-[#e81c1c] hover:bg-[#c41515] text-white font-bold py-4 uppercase tracking-widest text-sm transition-all hover:scale-[1.02] mt-2 flex items-center justify-center gap-2"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  <Icon name="Send" size={16} />
                  Отправить заявку
                </button>
                <p className="text-gray-600 text-xs text-center">Перезвоним в течение 30 минут</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a] py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🚀</span>
            <span className="font-bold tracking-widest text-white uppercase text-sm" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Красная <span className="text-[#e81c1c]">Ракета</span>
            </span>
          </div>
          <p className="text-gray-600 text-xs">© 2024 Хоккейный клуб «Красная Ракета». Все права защищены.</p>
          <div className="flex gap-4">
            {([ ["Telegram", "Send"], ["ВКонтакте", "Users"] ] as [string, "Send" | "Users"][]).map(([label, icon]) => (
              <button key={label} className="text-gray-500 hover:text-[#e81c1c] transition-colors flex items-center gap-1 text-xs">
                <Icon name={icon} size={14} />
                {label}
              </button>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes slideRight {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Index;