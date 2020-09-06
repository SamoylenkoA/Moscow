-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Сен 06 2020 г., 14:19
-- Версия сервера: 8.0.12
-- Версия PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `job`
--

-- --------------------------------------------------------

--
-- Структура таблицы `test`
--

CREATE TABLE `test` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `quantity` int(11) NOT NULL,
  `distance` int(11) NOT NULL,
  `date` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `test`
--

INSERT INTO `test` (`id`, `name`, `quantity`, `distance`, `date`) VALUES
(1, 'Москва', 100, 1500, '2020-09-04 22:06:19'),
(2, 'Новосибирск', 600, 2000, '2020-09-05 11:35:55'),
(4, 'Алматы', 800, 7000, '2020-09-05 11:36:34'),
(5, 'Лондон', 100, 9000, '2020-09-05 11:36:55'),
(6, 'Минск', 500, 2000, '2020-09-05 17:13:22'),
(7, 'Астана', 90000, 20, '2020-09-05 17:38:25'),
(8, 'Париж', 80000, 6000, '2020-09-06 06:45:54'),
(9, 'Москва', 50, 3000, '2020-09-06 08:49:57');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `test`
--
ALTER TABLE `test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
