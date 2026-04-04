# CLAUDE.md — lj-servis

## Проект
Лендинг для LJ Servis — сервис по ремонту электроники в Тренчине, Словакия.
Стек: Next.js 15+ App Router, TypeScript, чистый CSS, pnpm.

## Команды
pnpm dev          # запуск dev сервера
pnpm build        # production сборка
npx tsc --noEmit  # проверка типов — ОБЯЗАТЕЛЬНО перед коммитом

## ⛔ КРИТИЧНЫЕ ПРАВИЛА СТИЛИЗАЦИИ

**НЕ ИСПОЛЬЗОВАТЬ Tailwind CSS.**
Проект использует ЧИСТЫЙ CSS:
- Глобальный файл `src/app/globals.css` — ВСЕ стили, переменные, @keyframes
- В компонентах — `className="section-hero"`, классы описаны в globals.css
- CSS переменные (`var(--color-orange)`) — для всех цветов, размеров
- CSS `@keyframes` — для всех анимаций
- CSS `:hover`, `:focus`, `:active` — для интерактивности
- **НИКАКИХ** Tailwind утилит, CSS Modules, styled-components, inline styles
- **НИКАКИХ** Framer Motion, icon библиотек (lucide, heroicons)
- Inline SVG для иконок

## TypeScript
- Строгая типизация, никаких `any`
- Все типы — только в `src/lib/types.ts`

## Данные
- Все данные (тексты, услуги, FAQ, цены) — только в `src/lib/constants.ts`
- Никакого хардкода текстов в компонентах

## Компоненты
- Server Components по умолчанию
- `'use client'` ТОЛЬКО для Header (scroll), ContactSection (form state)
- CSS `:hover` вместо onMouseEnter/onMouseLeave в Server Components

## Рабочий процесс
1. Перед кодом — прочитать нужные файлы
2. `npx tsc --noEmit` перед каждым коммитом
3. Коммит сразу после каждого изменения кода
4. Язык сайта — словацкий. Отвечай на русском.

## Brain
- `save_session_summary` после каждого бага/фикса
- Формат: root cause → fix → lesson learned
