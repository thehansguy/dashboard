-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 21, 2021 at 10:07 AM
-- Server version: 5.6.41-84.1
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bizexpan_portal`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `username`) VALUES
(1, 'Simpliexpand', 'admin@simpliexpand.com', NULL, '$2y$10$wyFRhbQI6B.pEPNZjnAXGuCaPOHQPcOiPef/d5HAPCbzLLJZj6Hxq', NULL, '2020-12-28 02:33:07', '2020-12-28 02:33:07', 'simpliexpand'),
(6, 'Nana Gyasi', 'nanagyasi@simpliexpand.com', NULL, '$2y$10$UN/oXvt82PBwF0y3HLjr9O.G1vOoxbXNawvCWs32UcoF8.tv//H7.', NULL, '2021-01-14 20:27:10', '2021-01-14 20:27:10', 'jay'),
(7, 'Tracy', 'tracyoppong@simpliexpand.com', NULL, '$2y$10$xSkBGiwtxUuW.TKnu9q4ruHcbcXmoC3UsuFxwmV3UeUkugCdp9rQG', NULL, '2021-01-14 20:29:35', '2021-01-14 20:29:35', 'tracy'),
(8, 'Hans Eric ML', 'hans@simpliexpand.com', NULL, '$2y$10$PxPhpCB7zDYPKxkqgkzHvudjYydU0yL2M7SxjrZ/zppFx9XYVKbvi', '3lStcCWOBmdezLIJj7XoEITnzxnRjXxhOsMjw12Whq88hoiItq9B0lnhCJ1N', '2021-01-16 02:51:51', '2021-01-16 02:51:51', 'hans');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
