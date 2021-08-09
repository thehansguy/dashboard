-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 03, 2021 at 11:08 AM
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
-- Table structure for table `audiences`
--

CREATE TABLE `audiences` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `accounts_reached` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_followers` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content_interaction` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `likes` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `facebook_page_likes` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `instagram_followers` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `instagram_reach` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `impressions` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `new_audience` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_audience` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `top_locations_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `age_range_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pie_chart_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `histogram_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `top_locations_image_path` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `age_range_image_path` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender_image_path` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `pie_chart_image_path` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `histogram_image_path` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `audiences`
--

INSERT INTO `audiences` (`id`, `user_id`, `accounts_reached`, `total_followers`, `content_interaction`, `likes`, `facebook_page_likes`, `instagram_followers`, `instagram_reach`, `impressions`, `new_audience`, `total_audience`, `top_locations_image`, `age_range_image`, `gender_image`, `pie_chart_image`, `histogram_image`, `created_at`, `updated_at`, `top_locations_image_path`, `age_range_image_path`, `gender_image_path`, `pie_chart_image_path`, `histogram_image_path`) VALUES
(1, 1, '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '1611936834.bespoke  final logo black.PNG', '25', 'Female', 'pie url', 'histo url', '2021-01-21 15:58:58', '2021-01-21 15:58:58', './files/images/audience/top_locations/', '', '', '', ''),
(2, 1, '10', '9', '8', '7', '6', '5', '4', '3', '2', '1', 'Top location2', 'Age Range 2', 'Males and Females', 'Pie Chart 2', 'Histogram 2', '2021-01-26 15:52:19', '2021-01-26 15:52:19', '', '', '', '', ''),
(3, 1, 'acc reached', 'total followers', 'conetnt interraction', 'likes', 'facebook', 'instagram followers', 'reach', 'impressions', 'audience', 'audence', 'hilary mock up.jpg', 'age rangew', 'gendier impage', 'pie chart', 'histogram', '2021-01-29 10:23:53', '2021-01-29 10:23:53', 'public/files/FfecESRjziPfrqcYfc8YqbDva0ercXHLwMJ3kl7i.jpg', 'age rangew', 'gendier impage', 'pie chart', 'histogram'),
(4, 1, 'acc reached', 'total followers', 'conetnt interraction', 'likes', 'facebook', 'instagram followers', 'reach', 'impressions', 'audience', 'audence', 'hilary mock up.jpg', 'age rangew', 'gendier impage', 'pie chart', 'histogram', '2021-01-29 10:24:05', '2021-01-29 10:24:05', 'public/files/9kvJKINc3cMixjQwuKlzVtXRlINZsq2JOk88eMut.jpg', 'age rangew', 'gendier impage', 'pie chart', 'histogram'),
(5, 1, 'acc reached', 'total followers', 'conetnt interraction', 'likes', 'facebook', 'instagram followers', 'reach', 'impressions', 'audience', 'audence', 'labadi.png', 'age rangew', 'gendier impage', 'pie chart', 'histogram', '2021-01-29 10:26:15', '2021-01-29 10:26:15', 'public/files/oGacutbek7lRux26OYvRS0BppHerZuAXzpYv4yVe.png', 'age rangew', 'gendier impage', 'pie chart', 'histogram'),
(6, 1, 'acc reached', 'total followers', 'conetnt interraction', 'likes', 'facebook', 'instagram followers', 'reach', 'impressions', 'audience', 'audence', 'labone.png', 'age rangew', 'gendier impage', 'pie chart', 'histogram', '2021-01-29 10:30:27', '2021-01-29 10:30:27', 'public/files/C0CGpLXVoHulD1hb5NwdQKuIp3Z1hdsyK2cycP7W.png', 'age rangew', 'gendier impage', 'pie chart', 'histogram'),
(7, 1, 'acc reached', 'total followers', 'conetnt interraction', 'likes', 'facebook', 'instagram followers', 'reach', 'impressions', 'audience', 'audence', 'esther mock up.jpg', 'age rangew', 'gendier impage', 'pie chart', 'histogram', '2021-01-29 10:50:21', '2021-01-29 10:50:21', 'public/files/rwsSO0sU5GrowqD77YOxd9r6l5tQE03iZR4FNhv6.jpg', 'age rangew', 'gendier impage', 'pie chart', 'histogram'),
(8, 1, 'acc reached', 'total followers', 'conetnt interraction', 'likes', 'facebook', 'instagram followers', 'reach', 'impressions', 'audience', 'audence', 'WhatsApp Image 2020-08-20 at 09.50.04 (1).jpeg', 'age rangew', 'gendier impage', 'pie chart', 'histogram', '2021-01-29 10:56:59', '2021-01-29 10:56:59', 'public/files/PAlDfvb6UPcHuI8UR4MD9vEGcUEmoqkbWuYzFeqT.jpg', 'age rangew', 'gendier impage', 'pie chart', 'histogram'),
(9, 1, 'acc reached', 'total followers', 'conetnt interraction', 'likes', 'facebook', 'instagram followers', 'reach', 'impressions', 'audience', 'audence', '1611923476.png', 'age rangew', 'gendier impage', 'pie chart', 'histogram', '2021-01-29 12:31:16', '2021-01-29 12:31:16', 'public/files/zQoRQfuwop1uraAPj2cWgdolL7YeVIS1c4ulMefu.png', 'age rangew', 'gendier impage', 'pie chart', 'histogram'),
(10, 1, 'acc reached', 'total followers', 'conetnt interraction', 'likes', 'facebook', 'instagram followers', 'reach', 'impressions', 'audience', 'audence', '1611923967.png', 'age rangew', 'gendier impage', 'pie chart', 'histogram', '2021-01-29 12:39:27', '2021-01-29 12:39:27', 'public/files/sopUFYEHdXaDkHr85t4vrQWDvljFqsM9nokD7AKR.png', 'age rangew', 'gendier impage', 'pie chart', 'histogram'),
(11, 1, 'acc reached', 'total followers', 'conetnt interraction', 'likes', 'facebook', 'instagram followers', 'reach', 'impressions', 'audience', 'audence', '1611924042.png', 'age rangew', 'gendier impage', 'pie chart', 'histogram', '2021-01-29 12:40:42', '2021-01-29 12:40:42', 'path', 'age rangew', 'gendier impage', 'pie chart', 'histogram'),
(12, 1, 'acc reached', 'total followers', 'conetnt interraction', 'likes', 'facebook', 'instagram followers', 'reach', 'impressions', 'audience', 'audence', 'airport study.png', 'age rangew', 'gendier impage', 'pie chart', 'histogram', '2021-01-29 12:42:56', '2021-01-29 12:42:56', 'public/files\\php6128.tmp', 'age rangew', 'gendier impage', 'pie chart', 'histogram'),
(13, 1, 'acc reached', 'total followers', 'conetnt interraction', 'likes', 'facebook', 'instagram followers', 'reach', 'impressions', 'audience', 'audence', 'Ofankor.png', 'age rangew', 'gendier impage', 'pie chart', 'histogram', '2021-01-29 12:47:22', '2021-01-29 12:47:22', 'public/files/XIBId4W3z2dVH8mxqxXjWqKLNsDVSKzsmPM3ETo9.png', 'age rangew', 'gendier impage', 'pie chart', 'histogram'),
(14, 1, 'acc reached', 'total followers', 'conetnt interraction', 'likes', 'facebook', 'instagram followers', 'reach', 'impressions', 'audience', 'audence', 'airport study 2.png', 'age rangew', 'gendier impage', 'pie chart', 'histogram', '2021-01-29 12:48:21', '2021-01-29 12:48:21', 'public/files/Ibq6kqwWtxleVOeH0dEjqsu3uwJRTUGlhhyYh04a.png', 'age rangew', 'gendier impage', 'pie chart', 'histogram'),
(15, 1, 'acc reached', 'total followers', 'conetnt interraction', 'likes', 'facebook', 'instagram followers', 'reach', 'impressions', 'audience', 'audence', 'bespoke_new.jpg', 'age rangew', 'gendier impage', 'pie chart', 'histogram', '2021-01-29 13:02:38', '2021-01-29 13:02:38', 'public/files/tO6WDxFn5Mc95HEJ4MPX1Yq8p8r6tZbu9ZGtIQ8E.jpg', 'age rangew', 'gendier impage', 'pie chart', 'histogram'),
(16, 1, 'sdfds', 'sdf', 'sdfds', 'sdfsdf', 'sdfsd', 'sdfs', 'sdfsd', 'sdfs', 'dsfs', 'dsffsdf', '1611936403.bespoke  final logo black.PNG', '1611936403.DP Avatar.jpg', '1611936403.bespoke  final logo black.PNG', '1611936403.DP Avatar.jpg', '1611936403.bespoke  final logo black.PNG', '2021-01-29 16:06:43', '2021-01-29 16:06:43', 'C:\\Users\\user\\Documents\\GitHub\\portal\\public\\files/images/audience/top_locations/1611936403.bespoke  final logo black.PNG', 'C:\\Users\\user\\Documents\\GitHub\\portal\\public\\files/images/audience/age_range/1611936403.DP Avatar.jpg', 'C:\\Users\\user\\Documents\\GitHub\\portal\\public\\files/images/audience/gender1611936403.bespoke  final logo black.PNG', 'C:\\Users\\user\\Documents\\GitHub\\portal\\public\\files/images/audience/pie_chart/1611936403.DP Avatar.jpg', 'C:\\Users\\user\\Documents\\GitHub\\portal\\public\\files/images/audience/histogram/1611936403.bespoke  final logo black.PNG'),
(17, 1, 'sdfds', 'sdf', 'sdfds', 'sdfsdf', 'sdfsd', 'sdfs', 'sdfsd', 'sdfs', 'dsfs', 'dsffsdf', '1611936756.bespoke  final logo black.PNG', '1611936756.DP Avatar.jpg', '1611936756.bespoke  final logo black.PNG', '1611936756.DP Avatar.jpg', '1611936756.bespoke  final logo black.PNG', '2021-01-29 16:12:36', '2021-01-29 16:12:36', 'files/images/audience/top_locations/1611936756.bespoke  final logo black.PNG', 'files/images/audience/age_range/1611936756.DP Avatar.jpg', 'files/images/audience/gender/1611936756.bespoke  final logo black.PNG', 'files/images/audience/pie_chart/1611936756.DP Avatar.jpg', 'files/images/audience/histogram/1611936756.bespoke  final logo black.PNG'),
(18, 1, 'sdfds', 'sdf', 'sdfds', 'sdfsdf', 'sdfsd', 'sdfs', 'sdfsd', 'sdfs', 'dsfs', 'dsffsdf', '1611936834.bespoke  final logo black.PNG', '1611936834.DP Avatar.jpg', '1611936834.bespoke  final logo black.PNG', '1611936834.DP Avatar.jpg', '1611936834.bespoke  final logo black.PNG', '2021-01-29 16:13:54', '2021-01-29 16:13:54', './files/images/audience/top_locations/', 'files/images/audience/age_range/', 'files/images/audience/gender', 'files/images/audience/pie_chart/', 'files/images/audience/histogram/'),
(19, 1, 'sdfds', 'sdf', 'sdfds', 'sdfsdf', 'sdfsd', 'sdfs', 'sdfsd', 'sdfs', 'dsfs', 'dsffsdf', '1611938287.bespoke  final logo black.PNG', '1611938287.DP Avatar.jpg', '1611938287.bespoke  final logo black.PNG', '1611938287.DP Avatar.jpg', '1611938287.bespoke  final logo black.PNG', '2021-01-29 16:38:07', '2021-01-29 16:38:07', './files/images/audience/top_locations/', './files/images/audience/age_range/', './files/images/audience/gender', './files/images/audience/pie_chart/', './files/images/audience/histogram/'),
(20, 5, '1M', '1.5M', '240K', '350K', '45K', '32K', '25.3K', '2K', '1B', '2.5B', '1612173101_top-locations.jpg', '1612173101_age-range1.png', '1612173101_gender1.jpg', '1612173101_pie-chart.png', '1612173101_histogram2.png', '2021-02-01 09:51:41', '2021-02-01 09:51:41', 'files/images/audience/top_locations/', 'files/images/audience/age_range/', 'files/images/audience/gender/', 'files/images/audience/pie_chart/', 'files/images/audience/histogram/'),
(21, 7, '1000', '1065', '300', '200', '2', '1065', '1000', '1500', '0', '1065', '1612212625_1612205099_gender2.png', '1612212625_age-range1.png', '1612212625_gender2.png', '1612212625_gender_pie_chart.jpg', '1612212625_1612205099_histogram1.png', '2021-02-01 20:50:25', '2021-02-01 20:50:25', 'files/images/audience/top_locations/', 'files/images/audience/age_range/', 'files/images/audience/gender/', 'files/images/audience/pie_chart/', 'files/images/audience/histogram/');

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `blog_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `blog_image_path` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `user_id`, `blog_image`, `created_at`, `updated_at`, `blog_image_path`) VALUES
(1, 1, 'image', '2021-01-25 15:56:50', NULL, ''),
(2, 1, 'Blog Image 2', '2021-01-26 15:53:32', '2021-01-26 15:53:32', ''),
(3, 5, '1612204754_age-range2.png', '2021-02-01 18:39:14', '2021-02-01 18:39:14', 'files/images/blog/'),
(4, 7, '1612213253_startup_spotlight.png', '2021-02-01 21:00:53', '2021-02-01 21:00:53', 'files/images/blog/');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

CREATE TABLE `invoices` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `date_issued` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `invoice_download_file` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `invoice_download_file_path` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `invoices`
--

INSERT INTO `invoices` (`id`, `user_id`, `date_issued`, `invoice_download_file`, `created_at`, `updated_at`, `invoice_download_file_path`) VALUES
(1, 1, 'today', 'invoice.pdf', '2021-01-27 11:50:10', '2021-01-27 11:50:10', ''),
(2, 5, 'date_issued', '1612204381_age-range1.png', '2021-02-01 18:33:01', '2021-02-01 18:33:01', 'files/downloads/payments/invoices/'),
(3, 7, 'date_issued', '1612213382_christina-wocintechchat-com-eZ8g_7Sh0J0-unsplash.jpg', '2021-02-01 21:03:02', '2021-02-01 21:03:02', 'files/downloads/payments/invoices/');

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
  `market_size_chart_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `market_size_chart_image_path` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `market_analyses`
--

INSERT INTO `market_analyses` (`id`, `user_id`, `accounts_reached`, `interaction`, `total_followers`, `likes`, `competitor_accounts_reached`, `competitor_interaction`, `competitor_total_followers`, `competiter_likes`, `market_size_chart_image`, `created_at`, `updated_at`, `market_size_chart_image_path`) VALUES
(1, 1, '2', '3', '4', '5', '6', '7', '8', '9', 'market chart 1', '2021-01-22 09:50:41', '2021-01-22 09:50:41', ''),
(2, 1, '45', '250', '1M', '45K', '278', '327', '35K', '2K', 'Market Chart 1', '2021-01-27 12:06:49', '2021-01-27 12:06:49', ''),
(3, 5, '2K', '4K', '8K', '10K', '15K', '20K', '14K', '30K', '1612201174_market_size1.png', '2021-02-01 17:39:34', '2021-02-01 17:39:34', 'files/images/market_analysis/market_size_chart/');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(11, '2021_01_19_134224_drop_audience_table', 4),
(12, '2021_01_19_141257_create_audience_table', 5),
(13, '2021_01_20_154313_drop_audience_table', 6),
(14, '2021_01_20_154524_drop_audience_table', 7),
(20, '2014_10_12_000000_create_users_table', 8),
(21, '2014_10_12_100000_create_password_resets_table', 8),
(22, '2019_08_19_000000_create_failed_jobs_table', 8),
(23, '2020_12_26_191528_add_username_to_users_table', 8),
(24, '2020_12_30_121822_create_posts_table', 8),
(25, '2021_01_04_112056_create_audiences_table', 8),
(26, '2021_01_04_113010_create_market_analyses_table', 8),
(27, '2021_01_04_113026_create_payments_table', 8),
(28, '2021_01_04_113051_create_reports_table', 8),
(29, '2021_01_20_154606_drop_audience_table', 8),
(30, '2021_01_21_102838_drop_market_analysis_table', 9),
(31, '2021_01_21_103030_create_market_analysis_table', 10),
(32, '2021_01_21_104014_drop_reports_table', 11),
(33, '2021_01_21_113942_create_reports_table', 11),
(34, '2021_01_21_114814_drop_payments_table', 11),
(35, '2021_01_21_114849_create_payments_table', 11),
(36, '2021_01_21_121530_create_blog_table', 12),
(37, '2021_01_21_121607_create_trends_table', 12),
(38, '2021_01_21_121650_create_website_overview_table', 12),
(39, '2021_01_21_121726_create_our_latest_package_table', 12),
(40, '2021_01_21_153046_drop_audience_table', 13),
(41, '2021_01_21_154406_drop_audiences_table', 14),
(42, '2021_01_21_154459_create_audiences_table', 14),
(43, '2021_01_22_094732_drop_market_analysis_table_to_create_market_analyses_table', 15),
(44, '2021_01_22_094938_create_market_analyses_table', 15),
(45, '2021_01_24_201829_rename_blog_table_to_blogs', 16),
(46, '2021_01_25_112303_rename_website_overview_table_to_website_overviews', 17),
(47, '2021_01_25_115020_rename_website_overview_table_to_website_overviews_1', 18),
(48, '2021_01_25_165202_rename_our_latest_package_table_to_our__latest__packages', 19),
(49, '2021_01_26_110652_create_invoices_table', 20),
(50, '2021_01_26_110736_create_receipts_table', 20),
(51, '2021_01_28_104321_rename_some_audience_table_columns', 21),
(52, '2021_01_28_122514_add_path_columns_to_audience_table', 22),
(53, '2021_01_31_192725_add_dp_image_columns_to_users_table', 23),
(54, '2021_02_01_110552_rename_some_market_analysis_table_columns', 24),
(55, '2021_02_01_110752_rename_some_report_table_columns', 24),
(56, '2021_02_01_110813_rename_some_invoice_table_columns', 24),
(57, '2021_02_01_110914_rename_some_receipt_table_columns', 24),
(58, '2021_02_01_113603_add_path_columns_to_market_analysis_table', 24),
(59, '2021_02_01_113652_add_path_columns_to_report_table', 24),
(60, '2021_02_01_113713_add_path_columns_to_invoice_table', 24),
(61, '2021_02_01_113735_add_path_columns_to_receipt_table', 24),
(62, '2021_02_01_115216_add_path_columns_to_website__overviews_table', 24),
(63, '2021_02_01_115231_add_path_columns_to_our__latest__packages_table', 24),
(64, '2021_02_01_115251_add_path_columns_to_blogs_table', 24),
(65, '2021_02_01_134115_add_ideal_customer_image_path_column_to_report_table', 25);

-- --------------------------------------------------------

--
-- Table structure for table `our__latest__packages`
--

CREATE TABLE `our__latest__packages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `our_latest_package_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `our_latest_package_image_path` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `our__latest__packages`
--

INSERT INTO `our__latest__packages` (`id`, `user_id`, `our_latest_package_image`, `created_at`, `updated_at`, `our_latest_package_image_path`) VALUES
(1, 1, 'image', '2021-01-25 15:57:37', NULL, ''),
(2, 1, 'Our Latest Packge 1', '2021-01-27 13:31:00', '2021-01-27 13:31:00', ''),
(3, 5, '1612204907_age-range3.png', '2021-02-01 18:41:47', '2021-02-01 18:41:47', 'files/images/our_latest_package/'),
(4, 7, '1612213230_our_latest_package.png', '2021-02-01 21:00:30', '2021-02-01 21:00:30', 'files/images/our_latest_package/');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `payment_status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `user_id`, `payment_status`, `created_at`, `updated_at`) VALUES
(1, 1, 'Paid', '2021-01-22 10:11:43', '2021-01-22 10:11:43'),
(2, 1, 'not_paid', '2021-01-27 11:52:42', '2021-01-27 11:52:42'),
(3, 1, 'not_paid', '2021-01-27 11:55:19', '2021-01-27 11:55:19'),
(4, 1, 'Paid', '2021-01-29 17:11:58', '2021-01-29 17:11:58'),
(5, 5, 'Paid!!! Momo mona mo bl3!!!', '2021-02-01 19:11:42', '2021-02-01 19:11:42'),
(6, 5, 'Paid', '2021-02-01 20:36:58', '2021-02-01 20:36:58'),
(7, 5, 'Paid', '2021-02-01 20:38:00', '2021-02-01 20:38:00'),
(8, 7, 'Not Paid', '2021-02-01 21:03:50', '2021-02-01 21:03:50');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `body` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `receipts`
--

CREATE TABLE `receipts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `date_issued` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `receipt_download_file` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `receipt_download_file_path` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `receipts`
--

INSERT INTO `receipts` (`id`, `user_id`, `date_issued`, `receipt_download_file`, `created_at`, `updated_at`, `receipt_download_file_path`) VALUES
(1, 1, 'today', 'receipt.pdf', '2021-01-27 11:52:07', '2021-01-27 11:52:07', ''),
(2, 5, '', '1612206632_gender3.jpg', '2021-02-01 19:10:32', '2021-02-01 19:10:32', 'files/downloads/payments/receipts'),
(3, 7, '', '1612213398_lauren-mancke-aOC7TSLb1o8-unsplash.jpg', '2021-02-01 21:03:18', '2021-02-01 21:03:18', 'files/downloads/payments/receipts');

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

CREATE TABLE `reports` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `month` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `monthly_report_download_file` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_boosting_insights_chart_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ideal_customer_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `market_report_download_file` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `market_report_download_file_path` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `monthly_report_download_file_path` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_boosting_insights_chart_image_path` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `ideal_customer_image_path` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reports`
--

INSERT INTO `reports` (`id`, `user_id`, `month`, `monthly_report_download_file`, `post_boosting_insights_chart_image`, `ideal_customer_image`, `market_report_download_file`, `created_at`, `updated_at`, `market_report_download_file_path`, `monthly_report_download_file_path`, `post_boosting_insights_chart_image_path`, `ideal_customer_image_path`) VALUES
(1, 1, '2', 'month report 1', 'chart 1', 'customer image 1', 'market report 1', '2021-01-22 10:04:14', '2021-01-22 10:04:14', '', '', '', ''),
(2, 1, 'January', 'monthly_report.pdf', 'post boosting chart1', 'ideal customer chart 1', 'market_report.pdf', '2021-01-27 14:01:03', '2021-01-27 14:01:03', '', '', '', ''),
(3, 5, 'Jan', '1612205099_histogram1.png', '1612205099_market_size1.png', '1612205099_age-range2.png', '1612205099_gender2.png', '2021-02-01 18:44:59', '2021-02-01 18:44:59', 'files/downloads/reports/market_reports/', 'files/downloads/reports/monthly_reoprts/', 'files/images/reports/post_boosting_insights_chart/', 'files/images/reports/ideal_customer/'),
(4, 7, 'Jan', '1612213777_[Template] TEMPLATE.xlsx', '1612213777_gender2.png', '1612213777_ideal_customer_2.png', '1612213777_[Template] TEMPLATE.pdf', '2021-02-01 21:09:37', '2021-02-01 21:09:37', 'files/downloads/reports/market_reports/', 'files/downloads/reports/monthly_reoprts/', 'files/images/reports/post_boosting_insights_chart/', 'files/images/reports/ideal_customer/');

-- --------------------------------------------------------

--
-- Table structure for table `trends`
--

CREATE TABLE `trends` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `monday` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tuesday` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thursday` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `friday` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `saturday` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `trends`
--

INSERT INTO `trends` (`id`, `user_id`, `monday`, `tuesday`, `thursday`, `friday`, `saturday`, `created_at`, `updated_at`) VALUES
(1, 1, '#realestateghana #bpghana #homesghana #realtorghana #refferals', '#luxuryhomesghana #realestateghana #bpghana #luxurylawn #businesshomes #realty', '#realtors #homeforsales #realestateluxury #mortgageghana #realestateghana #bpghana', '#homeinvestor #realestatebroker #fridaytrends #ghhommes #realestateghana #bpghana', '#realestateagenttips #realestatelife #realestateghana #bpghana #saturdaybusiness', '2021-01-25 15:58:03', NULL),
(2, 1, '#mondays', '#tuesdays', '#thursdays', '#fridays', '#saturdays', '2021-01-28 11:05:45', '2021-01-28 11:05:45'),
(3, 5, '#mon', '#tue', '#wed', '#thurs', '#fri', '2021-02-01 18:38:43', '2021-02-01 18:38:43'),
(4, 7, '#pictureoftheday #mondaydrink', '#tuesdatrivia', '#tbt #throwbackthursday', '#fridayfun #cocktailfriday', '#weekendvibes', '2021-02-01 20:58:41', '2021-02-01 20:58:41');

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
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_dp_image_name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_dp_image_path` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `username`, `user_dp_image_name`, `user_dp_image_path`) VALUES
(1, 'Hans Eric Mills Lamptey', 'hans@simpliexpand.com', NULL, '$2y$10$pTFqtP6V9GjIMxhQw5iZmO8xsJw613C6fVE6YGKGi3RxjaypYdEIS', NULL, '2021-01-21 11:37:33', '2021-01-21 11:37:33', 'hanseml', '', ''),
(3, 'Jay Hans', 'jayhans@simpliexpand.com', NULL, '$2y$10$XbJ72P1gIfFHSiccabBeZOxFgb.jS0zHMvKEtUCQigrs3XcZSSZWq', NULL, '2021-01-26 15:42:25', '2021-01-26 15:42:25', 'jay_hans', '', ''),
(5, 'Bespoke Properties Ghana', 'bespoke@simpliexpand.com', NULL, '$2y$10$LcCoL4g3uyYjzeBArNvQRenXIIjN/FKrVFs.lfaebjtrJ5zV4wXW6', NULL, '2021-02-01 09:32:03', '2021-02-01 09:32:03', 'bespoke_properties_ghana', '1612171923_final bespoke logo.png', 'files/images/users/dp/'),
(6, 'Kent Cup', 'kent@simpliexpand.com', NULL, '$2y$10$yp2Vz2BOT2PfWRLR2GiJHutYmJW37DpkXMERwNowdl0L.CgZTTOnW', NULL, '2021-02-01 19:48:17', '2021-02-01 19:48:17', 'kent_cup', '1612208897_kent.PNG', 'files/images/users/dp/'),
(7, 'T-Trade', 't_trade@simpliexpand.com', NULL, '$2y$10$6cXMznd/9kMnyaUcgE8gM.vKmDIMqv.B7XuIbJszu4XraHhIHzHc6', NULL, '2021-02-01 20:42:51', '2021-02-01 20:42:51', 't_trade', '1612212171_t trade 2.png', 'files/images/users/dp/');

-- --------------------------------------------------------

--
-- Table structure for table `website__overviews`
--

CREATE TABLE `website__overviews` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `website_overview_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `website_overview_image_path` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `website__overviews`
--

INSERT INTO `website__overviews` (`id`, `user_id`, `website_overview_image`, `created_at`, `updated_at`, `website_overview_image_path`) VALUES
(1, 1, 'image', '2021-01-25 16:00:06', NULL, ''),
(2, 1, 'website overview image', '2021-01-27 14:35:05', '2021-01-27 14:35:05', ''),
(3, 5, 'qW.png', '2021-02-01 18:37:54', '2021-02-01 18:37:54', 'files/images/website_overview/'),
(4, 7, 'qW.png', '2021-02-01 21:06:37', '2021-02-01 21:06:37', 'files/images/website_overview/');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `audiences`
--
ALTER TABLE `audiences`
  ADD PRIMARY KEY (`id`),
  ADD KEY `audiences_user_id_foreign` (`user_id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blog_user_id_foreign` (`user_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `invoices_user_id_foreign` (`user_id`);

--
-- Indexes for table `market_analyses`
--
ALTER TABLE `market_analyses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `market_analyses_user_id_foreign` (`user_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `our__latest__packages`
--
ALTER TABLE `our__latest__packages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `our_latest_package_user_id_foreign` (`user_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `payments_user_id_foreign` (`user_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `posts_user_id_foreign` (`user_id`);

--
-- Indexes for table `receipts`
--
ALTER TABLE `receipts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `receipts_user_id_foreign` (`user_id`);

--
-- Indexes for table `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reports_user_id_foreign` (`user_id`);

--
-- Indexes for table `trends`
--
ALTER TABLE `trends`
  ADD PRIMARY KEY (`id`),
  ADD KEY `trends_user_id_foreign` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `website__overviews`
--
ALTER TABLE `website__overviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `website_overview_user_id_foreign` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `audiences`
--
ALTER TABLE `audiences`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `market_analyses`
--
ALTER TABLE `market_analyses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `our__latest__packages`
--
ALTER TABLE `our__latest__packages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `receipts`
--
ALTER TABLE `receipts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `reports`
--
ALTER TABLE `reports`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `trends`
--
ALTER TABLE `trends`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `website__overviews`
--
ALTER TABLE `website__overviews`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `audiences`
--
ALTER TABLE `audiences`
  ADD CONSTRAINT `audiences_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `blogs`
--
ALTER TABLE `blogs`
  ADD CONSTRAINT `blog_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `invoices`
--
ALTER TABLE `invoices`
  ADD CONSTRAINT `invoices_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `market_analyses`
--
ALTER TABLE `market_analyses`
  ADD CONSTRAINT `market_analyses_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `our__latest__packages`
--
ALTER TABLE `our__latest__packages`
  ADD CONSTRAINT `our_latest_package_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `receipts`
--
ALTER TABLE `receipts`
  ADD CONSTRAINT `receipts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `reports`
--
ALTER TABLE `reports`
  ADD CONSTRAINT `reports_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `trends`
--
ALTER TABLE `trends`
  ADD CONSTRAINT `trends_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `website__overviews`
--
ALTER TABLE `website__overviews`
  ADD CONSTRAINT `website_overview_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
