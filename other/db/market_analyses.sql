-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 22, 2021 at 05:36 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portal`
--

-- --------------------------------------------------------

--
-- Table structure for table `market_analyses`
--

CREATE TABLE `market_analyses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `accounts_reached` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `interaction` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_followers` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `likes` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `competitor_accounts_reached` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `competitor_interaction` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `competitor_total_followers` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `competiter_likes` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `market_size_chart` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `market_analyses`
--

INSERT INTO `market_analyses` (`id`, `user_id`, `accounts_reached`, `interaction`, `total_followers`, `likes`, `competitor_accounts_reached`, `competitor_interaction`, `competitor_total_followers`, `competiter_likes`, `market_size_chart`, `created_at`, `updated_at`) VALUES
(1, 1, '2', '3', '4', '5', '6', '7', '8', '9', 'market chart 1', '2021-01-22 09:50:41', '2021-01-22 09:50:41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `market_analyses`
--
ALTER TABLE `market_analyses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `market_analyses_user_id_foreign` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `market_analyses`
--
ALTER TABLE `market_analyses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `market_analyses`
--
ALTER TABLE `market_analyses`
  ADD CONSTRAINT `market_analyses_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
