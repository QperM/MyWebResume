import React, { useMemo, useState } from 'react';

const navItems = [
  { label: '首页', href: '#home' },
  { label: '关于我', href: '#about' },
  { label: '经历', href: '#experience' },
  { label: '技能', href: '#skills' },
  { label: '游戏体验', href: '#games' },
  { label: '作品集', href: '#portfolio' },
  { label: '图库', href: '#gallery' },
  { label: '联系', href: '#contact' },
];

const stats = [
  { label: '项目实践', value: '6+', desc: '课程/团队交付与独立 Demo' },
  { label: '关卡迭代', value: '20+', desc: '可玩性验证与数值打磨' },
  { label: '技术栈', value: 'C++ / UE / React', desc: '工坊、蓝图与前端交互' },
];

const experiences = [
  {
    date: '2025.09 - 2025.11',
    title: '独立游戏开发 · 光蚀 Demo',
    subtitle: 'UNSW 课程项目',
    bullets: [
      '模块化武器系统（换弹/后坐力/射击反馈）+ AI 行为树，实测可快速调优战斗节奏',
      '双层碰撞胶囊体解决 AI 穿模，关卡流畅度显著提升，获 HD 评分 91.3/100',
      '文档与视频交付：/sources/documents/光蚀项目文档.pdf',
    ],
  },
  {
    date: '2024.02 - 2025.12（预期）',
    title: 'Master of Information Technology',
    subtitle: '新南威尔士大学（UNSW）',
    bullets: [
      '核心：计算机图像 / 神经网络 / 视觉 / 机器学习 / 数据库',
      '实践：RadianceAscending(3D 肉鸽 FPS) 技术型关卡设计；CNS 教育平台前端交互与系统升级',
    ],
  },
  {
    date: '2023.10 - 2024.01',
    title: '英语助教',
    subtitle: '上新国际教育',
    bullets: [
      '60+ 小时口语专项辅导，优化发音、语法与应试策略',
      'Python + Excel 自动化 200+ 份周报，量化跟踪学习进度',
    ],
  },
  {
    date: '2021.07 - 至今',
    title: '网络设备装配技术员',
    subtitle: '学府考研',
    bullets: [
      '面向 80 名学生/≈160 台终端诊断旧网（1 交换机+4 路由），发现单路由稳定上限≈10 台，高并发视频卡顿率 >40%，苹果设备因信道冲突频繁掉线',
      '设计并落地方案：2 台 AX6000 + 千兆交换机组网，Mesh 无缝漫游 + QoS 限速均衡；用 NetSpot 全域扫盲区/干扰，调信道到低冲突频段',
      '结果：覆盖率 100%（边缘信号由 <-80dBm 提升至 ≥-65dBm），20 台终端同时高清视频卡顿率 40%→0%，苹果断连率 50%→5%',
    ],
  },
  {
    date: '2018.09 - 2022.06',
    title: '计算机科学与技术',
    subtitle: '广东技术师范大学',
    bullets: ['毕业论文：基于微信小程序的食堂订餐平台（前后端 + 数据库设计）','相关课程：数据结构、JAVA编程、软件工程、计算机网络、计算机组成原理'],
  },
];

const skills = [
  { name: 'C++', value: 90 },
  { name: 'Unreal Engine / 蓝图', value: 86 },
  { name: 'Python / 数据处理', value: 88 },
  { name: '游戏与关卡设计', value: 84 },
  { name: '计算机视觉 / ML', value: 80 },
  { name: '前端（React）', value: 78 },
];

const otherSkills = [
  '英语：CET-6 474 / PTE 69',
  '数据可视化与仪表盘',
  '3D 建模基础',
  '团队协作与项目推进',
  'Docker / 部署基础',
  '科学健身管理',
];

const projects = [
  {
    title: '光蚀 - FPS Demo',
    desc: 'C++ + UE 实现武器系统、AI 行为树与战斗节奏验证，含视频与文档交付。',
    tags: ['C++', 'Unreal Engine', '蓝图', '3D 建模'],
    image: '/sources/images/project1.jpg',
    link: '/sources/documents/光蚀项目文档.pdf',
  },
  {
    title: 'CNS 教育平台升级',
    desc: 'React + Strapi 前端交互与系统优化，文化敏感内容可视化呈现。',
    tags: ['React', 'Strapi', '系统优化', 'SVG 交互'],
    image: '/sources/images/project3.jpg',
    link: '#portfolio',
  },
];

const games = [
  {
    title: '穿越火线：枪战王者（CFM）',
    hours: '深度主游',
    type: 'FPS · PVP/PVE',
    takeaways: '深度理解 TTK（Time-to-Kill）、射击反馈与战斗节奏，对多模式地图布局、数值平衡及武器手感高度敏感。曾凭借对关卡节奏与机制的精准把控，在竞技排位中跻身全服第83名（1200万日活，约前0.01%），具备从玩家视角反推设计逻辑的能力。',
    image: '/images/games/cfm.jpg',
  },
  {
    title: 'Steam 平台单机',
    hours: '2000+ 小时',
    type: '动作 / RPG / Roguelike',
    takeaways: '关注叙事节奏、战斗循环与数值成长；体验过类魂系、肉鸽、4X策略、设计型独立游戏，自身游戏库涵盖200+款游戏。全成就通关黑神话悟空，赛博朋克2077等游戏。',
    image: '/images/games/steam.jpg',
  },
  {
    title: '英雄联盟（LOL）',
    hours: '3000+ 对局数',
    type: 'MOBA',
    takeaways: 'S4 赛季入坑的老召唤师，累计对局 3000+，最高段位铂金 II。十年间完整经历了符文重做、装备系统迭代与地图生态演变，习惯从玩家行为反推机制设计逻辑——比如兵线交互如何影响地图流动性，视野博弈怎样塑造关卡节奏。',
    image: '/images/games/lol.jpg',
  },
  
  {
    title: '金铲铲 & 云顶之弈',
    hours: '1200+ 局',
    type: '移动 / PC',
    takeaways: '7 次达到超凡大师段位，深度适应多个赛季的羁绊、经济与装备系统迭代。在快节奏版本更迭中，持续观察新手引导、阵容推荐与界面动线如何影响策略学习成本与长期留存。',
    image: '/images/games/金铲铲.jpg',
  }
];

const mediaItems = [
  {
    type: 'video',
    src: '/sources/videos/光蚀demo视频.mp4',
    poster: '/sources/images/video1-poster.jpg',
    title: '光蚀 Demo 演示',
    desc: '前两关流程 + 核心机制回放',
  },
  {
    type: 'video',
    src: '/sources/videos/武器机制与效果展示.mp4',
    poster: '/sources/images/video2-poster.jpg',
    title: '武器机制与特效',
    desc: '四把武器的机制差异与射击反馈',
  },
  {
    type: 'image',
    src: '/sources/images/gallery1.jpg',
    title: '场景截图 1',
    desc: '氛围与光影测试',
  },
  {
    type: 'image',
    src: '/sources/images/gallery2.jpg',
    title: '场景截图 2',
    desc: '关卡节奏检查点',
  },
  {
    type: 'image',
    src: '/sources/images/gallery3.jpg',
    title: '场景截图 3',
    desc: '战斗区域视距优化',
  },
  {
    type: 'image',
    src: '/sources/images/gallery4.jpg',
    title: '场景截图 4',
    desc: '环境叙事细节',
  },
  {
    type: 'image',
    src: '/sources/images/gallery5.jpg',
    title: '场景截图 5',
    desc: '灯光与材质测试',
  },
  {
    type: 'image',
    src: '/sources/images/gallery6.jpg',
    title: '场景截图 6',
    desc: '视觉引导实验',
  },
];

const contacts = [
  { label: '邮箱', value: 'junyu.ma.resume@outlook.com', href: 'mailto:junyu.ma.resume@outlook.com' },
  { label: '电话', value: '15535578110', href: 'tel:15535578110' },
  { label: '籍贯', value: '山西长治' },
  { label: '学历', value: '硕士研究生（UNSW）' },
];

const infoCards = [
  { label: '姓名', value: '马君羽' },
  { label: '目标岗位', value: '技术型关卡设计实习生' },
  { label: '毕业时间', value: '预计 2026 年 01 月 29 日' },
  { label: '技术标签', value: 'C++ / UE5 / 蓝图 / React / 数据分析' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState({ open: false, src: '', type: 'image', title: '' });
  const [gameIndex, setGameIndex] = useState(() => Math.floor(games.length / 2));

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  const skillLevels = useMemo(
    () => skills.map((skill) => ({ ...skill, width: `${skill.value}%` })),
    []
  );

  return (
    <div className="text-slate-900 bg-transparent">
      <header className="fixed inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 mt-3 glass shadow-lg">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-emerald-400 shadow-md" />
            <div>
              <p className="text-sm text-slate-500">技术型关卡设计</p>
              <p className="text-lg font-semibold text-slate-900">马君羽</p>
            </div>
          </div>
          <nav className="hidden items-center gap-4 text-sm font-medium text-slate-700 md:flex">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleScroll(item.href)}
                className="rounded-lg px-3 py-2 transition hover:text-indigo-600 hover:bg-indigo-50"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleScroll('#contact')}
              className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 text-white shadow hover:shadow-lg transition"
            >
              联系我
            </button>
          </nav>
          <button
            className="md:hidden rounded-lg p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="切换导航菜单"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="mx-4 mt-2 rounded-2xl bg-white shadow-lg md:hidden">
            <div className="flex flex-col divide-y divide-slate-100">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleScroll(item.href)}
                  className="px-4 py-3 text-left text-slate-700 hover:bg-indigo-50"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleScroll('#contact')}
                className="px-4 py-3 text-left font-semibold text-indigo-600 hover:bg-indigo-50"
              >
                联系我
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="pt-28 md:pt-32">
        <section
          id="home"
          className="relative isolate overflow-hidden px-4 pb-20 pt-16 md:pt-24"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-emerald-50" />
          <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:items-center">
            <div className="flex-1 space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-indigo-600 shadow ring-1 ring-indigo-100">
                专注技术型关卡 · UE / C++ / 数据驱动
              </p>
              <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                你好，我是<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500"> 马君羽</span>
              </h1>
              <p className="text-lg text-slate-600 md:text-xl">
                UNSW 信息技术硕毕业，擅长用程序化思维打磨关卡节奏与玩家体验。
                喜欢把战斗逻辑、AI 行为和数据可视化结合起来，让每一次迭代都能被量化、可追踪。
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => handleScroll('#contact')}
                  className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  联系我
                </button>
                <button
                  onClick={() => handleScroll('#portfolio')}
                  className="rounded-full border border-slate-300 px-6 py-3 text-slate-800 transition hover:border-indigo-300 hover:text-indigo-600 hover:-translate-y-0.5"
                >
                  查看作品
                </button>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="glass rounded-xl p-4 shadow-sm ring-1 ring-white/60"
                  >
                    <p className="text-xs uppercase tracking-wide text-slate-500">{item.label}</p>
                    <p className="mt-2 text-2xl font-semibold text-slate-900">{item.value}</p>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="relative mx-auto max-w-sm">
                <div className="absolute inset-0 -z-10 blur-3xl bg-indigo-200/50 rounded-full" />
                <div className="overflow-hidden rounded-3xl border border-white/70 bg-white/80 shadow-xl shadow-indigo-200">
                  <img
                    src="/images/profile.jpg"
                    alt="马君羽"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br from-emerald-400 via-cyan-400 to-indigo-500 opacity-60 blur-2xl" />
                <div className="absolute -right-10 -bottom-10 h-24 w-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-50 blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="px-4 py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr,0.8fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">关于我</h2>
              <p className="text-base leading-7 text-slate-600">
                我在 UNSW 攻读信息技术硕士，专注于游戏开发、计算机视觉与机器学习。
                在课程与团队项目中，我习惯用数据与工具驱动迭代——把武器参数、AI 行为、关卡节奏转成可调的配置，快速验证「好玩」的具体指标。
              </p>
              <p className="text-base leading-7 text-slate-600">
                独立完成 FPS Demo《光蚀》，从 C++ 核心逻辑到蓝图动画状态机再到美术替换，都以可复用模块为目标。
                同时在 CNS 教育平台项目中，用 React 与 Strapi 交付可视化交互，确保内容对不同文化背景的用户友好。
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {infoCards.map((card) => (
                  <div key={card.label} className="glass rounded-xl p-4 shadow-sm">
                    <p className="text-sm text-indigo-600">{card.label}</p>
                    <p className="mt-1 text-base font-semibold text-slate-900">{card.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass h-fit space-y-4 rounded-2xl p-6 shadow-lg">
              <p className="text-sm font-semibold text-indigo-600">联系 / 快速响应</p>
              <div className="grid gap-3 text-sm text-slate-700">
                {contacts.map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-lg bg-white/70 px-4 py-3">
                    <span className="font-medium text-slate-600">{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-indigo-600 hover:text-indigo-700"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-slate-900">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-3 text-sm text-white shadow-md">
              作为应届生，正在积极寻找实习或全职机会，期待能和您聊聊技术实现、系统设计或前端交互，向您多多学习。
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="bg-white/70 px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-3xl font-bold text-slate-900">经历</h2>
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                项目 · 教育 · 交付
              </span>
            </div>
            <div className="relative space-y-8 before:absolute before:left-[10px] before:top-2 before:h-full before:w-0.5 before:bg-indigo-100 md:before:left-1/2 md:before:-translate-x-1/2">
              {experiences.map((exp, idx) => (
                <div
                  key={exp.title}
                  className={`relative md:w-1/2 ${idx % 2 === 0 ? 'md:ml-auto md:pl-10' : 'md:pr-10'}`}
                >
                  <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-white bg-indigo-500 shadow md:left-auto md:right-[-22px]" />
                  <div className="glass rounded-2xl p-6 shadow-lg">
                    <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                      {exp.date}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900">{exp.title}</h3>
                    <p className="text-sm text-slate-500">{exp.subtitle}</p>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                      {exp.bullets.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="games" className="bg-white/70 px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">游戏体验</h2>
                <p className="text-sm text-slate-600">常玩与深度体验的游戏，支撑我对节奏与手感的理解</p>
              </div>
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">玩家视角 · 体验拆解</span>
            </div>
            <div className="relative">
              <div className="absolute -left-4 top-1/2 z-20 -translate-y-1/2">
                <button
                  onClick={() => setGameIndex((idx) => (idx - 1 + games.length) % games.length)}
                  className="rounded-full bg-white/90 p-3 shadow-lg ring-1 ring-slate-200 hover:-translate-x-0.5 hover:bg-white transition"
                  aria-label="上一组游戏"
                >
                  <svg className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
              <div className="absolute -right-4 top-1/2 z-20 -translate-y-1/2">
                <button
                  onClick={() => setGameIndex((idx) => (idx + 1) % games.length)}
                  className="rounded-full bg-white/90 p-3 shadow-lg ring-1 ring-slate-200 hover:translate-x-0.5 hover:bg-white transition"
                  aria-label="下一组游戏"
                >
                  <svg className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="relative h-[480px] overflow-hidden py-8">
                {games.map((game, idx) => {
                  const delta = (idx - gameIndex + games.length) % games.length;
                  const position = delta === 0 ? 'center' : delta === 1 ? 'right' : delta === games.length - 1 ? 'left' : 'hidden';
                  if (position === 'hidden') return null;

                  const rotate = position === 'center' ? 0 : position === 'right' ? 6 : -6;
                  const scale = position === 'center' ? 1.08 : 0.92;
                  const translateX = position === 'center' ? 0 : position === 'right' ? 210 : -210;
                  const zIndex = position === 'center' ? 30 : 20;
                  const opacity = position === 'center' ? 1 : 0.88;

                  return (
                    <button
                      type="button"
                      onClick={() => setGameIndex(idx)}
                      key={`${game.title}-${idx}`}
                      className="group absolute left-1/2 top-4 h-[420px] w-[320px] -translate-x-1/2 overflow-hidden rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-2xl transition duration-300 focus:outline-none"
                      style={{
                        transform: `translate(calc(-50% + ${translateX}px), 0) rotate(${rotate}deg) scale(${scale})`,
                        zIndex,
                        opacity,
                        cursor: position === 'center' ? 'default' : 'pointer',
                      }}
                    >
                      <div className="absolute inset-0 overflow-hidden rounded-3xl">
                        <div
                          className="absolute inset-0 rounded-3xl bg-cover bg-center transition duration-500 group-hover:scale-105"
                          style={{
                            backgroundImage: `url(${game.image || '/images/game-placeholder.jpg'})`,
                          }}
                        />
                        <div
                          className="absolute inset-0 rounded-3xl bg-gradient-to-b from-black/75 via-black/55 to-black/25 opacity-85 transition duration-300 group-hover:opacity-0"
                        />
                      </div>
                      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 blur-2xl opacity-80" />
                      <div className="relative flex items-center justify-between gap-3 text-white">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-200">游玩记录</p>
                          <h3 className="mt-1 text-xl font-semibold text-white">{game.title}</h3>
                        </div>
                        <span className="rounded-full bg-white/20 px-3 py-1 text-[12px] font-semibold text-white shadow">
                          {game.hours}
                        </span>
                      </div>
                      <div className="relative mt-3 inline-flex rounded-full bg-white/15 px-3 py-1 text-[12px] font-semibold text-white backdrop-blur">
                        {game.type}
                      </div>
                      <p className="relative mt-3 text-[15px] font-medium leading-7 text-white drop-shadow-md">
                        {game.takeaways}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl space-y-10">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <h2 className="text-3xl font-bold text-slate-900">技能树</h2>
              
            </div>
            <div className="grid gap-8 lg:grid-cols-[1.3fr,0.7fr]">
              <div className="space-y-5">
                {skills.map((skill, idx) => {
                  const bubbleStyles = [
                    'bg-gradient-to-r from-indigo-500 to-cyan-400 text-white rotate-[-2deg] shadow-xl',
                    'glass border border-indigo-100 text-slate-800 shadow-lg',
                    'bg-gradient-to-r from-purple-500 via-pink-500 to-amber-400 text-white rotate-1 shadow-xl',
                    'bg-white text-slate-900 shadow-md border border-slate-200',
                    'bg-gradient-to-r from-emerald-400 to-teal-500 text-white rotate-[-1deg] shadow-xl',
                    'glass border border-purple-100 text-slate-800 shadow-lg',
                  ];
                  const sizeStyles = [
                    'rounded-[28px] px-5 py-4',
                    'rounded-[32px] px-6 py-5',
                    'rounded-[24px] px-5 py-3',
                    'rounded-[36px] px-7 py-5',
                  ];
                  const shape = sizeStyles[idx % sizeStyles.length];
                  const color = bubbleStyles[idx % bubbleStyles.length];
                  const align = idx % 2 === 0 ? 'justify-start' : 'justify-end';
                  const isGradient = color.includes('gradient');

                  return (
                    <div
                      key={skill.name}
                      className={`flex items-start gap-3 ${align} transition-transform hover:-translate-y-1`}
                    >
                      <div
                        className={`max-w-[88%] ${shape} ${color}`}
                        style={{
                          borderRadius: idx % 3 === 0 ? '40px 28px 32px 36px' : undefined,
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-xs font-semibold text-white shadow-sm">
                            {idx + 1}
                          </span>
                          <p className="text-base font-semibold">{skill.name}</p>
                        </div>
                        <p className={`${isGradient ? 'text-white/85' : 'text-slate-600'} mt-2 text-sm leading-6`}>
                          {skill.value >= 85
                            ? '项目里反复使用，能拆解需求、封装模块并带迭代方案。'
                            : '有交付经验，能独立推进并快速补强相关知识点。'}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="glass rounded-2xl p-6 shadow-lg">
                <p className="text-lg font-semibold text-indigo-600">其他技能</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {otherSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-lg font-medium text-indigo-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="bg-white/70 px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-slate-900">作品集</h2>
              <p className="text-sm text-slate-600">更关注可玩性验证与落地交付</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white/90 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-60" />
                  </div>
                  <div className="space-y-3 p-5">
                    <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                    <p className="text-sm leading-6 text-slate-600">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-semibold text-indigo-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target={project.link.startsWith('#') ? '_self' : '_blank'}
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 transition hover:gap-2"
                    >
                      查看详情
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl space-y-10">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-slate-900">图库与视频</h2>
              <p className="text-sm text-slate-600">即点即看，沉浸式体验</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {mediaItems.map((item) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white/80 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                >
                  {item.type === 'video' ? (
                    <div className="relative">
                      <video
                        controls
                        poster={item.poster}
                        className="h-52 w-full object-cover"
                      >
                        <source src={item.src} type="video/mp4" />
                        您的浏览器不支持视频播放。
                      </video>
                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900/50 to-transparent" />
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setLightbox({ open: true, src: item.src, type: 'image', title: item.title })}
                      className="relative block h-52 w-full overflow-hidden"
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 transition group-hover:opacity-100" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
                        <span className="rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-slate-900 shadow">
                          点击放大
                        </span>
                      </div>
                    </button>
                  )}
                  <div className="space-y-2 p-4">
                    <p className="text-sm font-semibold text-indigo-600">{item.type === 'video' ? '视频' : '图片'}</p>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white/70 px-4 py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr,1fr]">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">联系我</h2>
              <p className="text-slate-600">
                想讨论关卡节奏、武器系统、AI 行为，或前端交互？发我邮件或微信式留言，
                我会在 24 小时内回复。
              </p>
              <div className="grid gap-3 text-sm">
                {contacts.map((item) => (
                  <div key={item.label} className="flex items-center gap-2 rounded-xl bg-indigo-50/80 px-4 py-3 text-indigo-800">
                    <span className="font-semibold">{item.label}</span>
                    <span className="text-slate-700">·</span>
                    {item.href ? (
                      <a href={item.href} className="underline decoration-indigo-300 underline-offset-4 hover:decoration-indigo-500">
                        {item.value}
                      </a>
                    ) : (
                      <span>{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl p-6 shadow-xl">
              <h3 className="text-lg font-semibold text-slate-900">留言给我</h3>
              <form
                className="mt-4 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('感谢你的信息！我会尽快回复。');
                  e.target.reset();
                }}
              >
                <label className="block space-y-2 text-sm">
                  <span className="text-slate-700">您的姓名</span>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-lg border border-slate-200 bg-white/90 px-3 py-2 outline-none transition focus:border-indigo-400 focus:ring focus:ring-indigo-100"
                  />
                </label>
                <label className="block space-y-2 text-sm">
                  <span className="text-slate-700">您的邮箱</span>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-slate-200 bg-white/90 px-3 py-2 outline-none transition focus:border-indigo-400 focus:ring focus:ring-indigo-100"
                  />
                </label>
                <label className="block space-y-2 text-sm">
                  <span className="text-slate-700">想聊的话题</span>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    className="w-full rounded-lg border border-slate-200 bg-white/90 px-3 py-2 outline-none transition focus:border-indigo-400 focus:ring focus:ring-indigo-100"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-3 text-white font-semibold shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  发送消息
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-4 pb-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 rounded-2xl bg-white px-6 py-6 text-slate-900 shadow-lg md:flex-row"> {/* 修改了bg-white 和 text-slate-900 */}
          <p className="text-sm">&copy; 2024 马君羽 · 保留所有权利</p>
          <div className="flex items-center gap-3 text-xs text-slate-600"> {/* 修改了text-slate-600 */}
            <span className="rounded-full bg-slate-200 px-3 py-1 text-slate-800">UE / C++ / React</span> {/* 修改了bg-slate-200 和 text-slate-800 */}
            <span className="rounded-full bg-slate-200 px-3 py-1 text-slate-800">关卡设计</span>
            <span className="rounded-full bg-slate-200 px-3 py-1 text-slate-800">数据化迭代</span>
          </div>
        </div>
      </footer>

      {lightbox.open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
          onClick={() => setLightbox({ open: false, src: '', type: 'image', title: '' })}
        >
          <div
            className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-slate-600 shadow hover:bg-white"
              onClick={() => setLightbox({ open: false, src: '', type: 'image', title: '' })}
              aria-label="关闭"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
            {lightbox.type === 'image' ? (
              <img src={lightbox.src} alt={lightbox.title} className="h-full w-full max-h-[90vh] object-contain" />
            ) : (
              <video src={lightbox.src} controls className="h-full w-full max-h-[90vh] object-contain" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

