-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 26, 2021 at 10:19 AM
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
(1, 2, '1000', '1150', '500', '450', '1200', '2300', '300', '600', '17', '3000', '1612357011_404.jpg', '1612357011_404.jpg', '1612357011_404.jpg', '1612357011_404.jpg', '1612357011_404.jpg', '2021-02-03 18:56:51', '2021-02-03 18:56:51', 'files/images/audience/top_locations/', 'files/images/audience/age_range/', 'files/images/audience/gender/', 'files/images/audience/pie_chart/', 'files/images/audience/histogram/'),
(2, 4, '8,316', '424', '486', '400', '11', '424', '8,318', '17,110', '74', '435', '1612361503_Screenshot_20210203-123928_Instagram.png', '1612361503_gg.png', '1612361503_uy.png', '1612361503_uy.png', '1612361503_20210203_140751.jpg', '2021-02-03 20:11:43', '2021-02-03 20:11:43', 'files/images/audience/top_locations/', 'files/images/audience/age_range/', 'files/images/audience/gender/', 'files/images/audience/pie_chart/', 'files/images/audience/histogram/'),
(3, 5, '202', '118', '104', '92', 'N/A', '118', '202', '944', '44', '118', 'jan_bespoke_top_location.jpg', 'jan_bespoke_age_range.jpg', 'jan_bespoke_gender.jpg', 'jan_bespoke_gender.jpg', 'jan_bespoke_histogram.jpg', '2021-02-04 14:53:42', '2021-02-04 14:53:42', 'files/images/audience/top_locations/', 'files/images/audience/age_range/', 'files/images/audience/gender/', 'files/images/audience/pie_chart/', 'files/images/audience/histogram/'),
(4, 6, '26.6K', '638', '597', '597', '143', '638', '26.2K', '47.5K', '114', '781', 'jan_kent_top_locations.jpg', 'jan_kent_age_range.jpg', 'jan_kent_gender.jpg', 'jan_kent_gender.jpg', '1612436246_20210204_105114.jpg', '2021-02-04 16:57:26', '2021-02-04 16:57:26', 'files/images/audience/top_locations/', 'files/images/audience/age_range/', 'files/images/audience/gender/', 'files/images/audience/pie_chart/', 'files/images/audience/histogram/'),
(5, 7, '529', '1069', '227', '221', '13', '1069', '529', '1266', '-', '1082', '1612780693_ttrade locations.jpg', '1612780693_ttrade age range.jpg', '1612780693_Ttrade gender pic.jpg', '1612780693_Ttrade gender pic.jpg', '1612780693_ttrade histogram.jpg', '2021-02-08 16:38:13', '2021-02-08 16:38:13', 'files/images/audience/top_locations/', 'files/images/audience/age_range/', 'files/images/audience/gender/', 'files/images/audience/pie_chart/', 'files/images/audience/histogram/');

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
(1, 4, '1612450231_Startup Spotlight p (1).png', '2021-02-04 20:50:31', '2021-02-04 20:50:31', 'files/images/blog/'),
(2, 6, '1612450363_Startup Spotlight p (1).png', '2021-02-04 20:52:43', '2021-02-04 20:52:43', 'files/images/blog/'),
(3, 5, '1612450505_Startup Spotlight p (1).png', '2021-02-04 20:55:05', '2021-02-04 20:55:05', 'files/images/blog/'),
(4, 7, '1612778260_Startup Spotlight p (1) (1).png', '2021-02-08 15:57:40', '2021-02-08 15:57:40', 'files/images/blog/');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
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
(1, 6, 'date_issued', 'February Invoice for Kent\'s Cup.pdf', '2021-02-04 17:48:49', '2021-02-04 17:48:49', 'files/downloads/payments/invoices/'),
(2, 4, 'date_issued', 'Aspire_February Invoice.pdf', '2021-02-04 17:49:45', '2021-02-04 17:49:45', 'files/downloads/payments/invoices/'),
(3, 5, 'date_issued', 'February Social Media Managemnt Invoice for Bespoke Properties.pdf', '2021-02-08 20:18:18', '2021-02-08 20:18:18', 'files/downloads/payments/invoices/');

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
(1, 4, '8,316', '486', '424', '400', '-', '-', '-', '-', '1612362638_qW (1) (1).png', '2021-02-03 20:30:38', '2021-02-03 20:30:38', 'files/images/market_analysis/market_size_chart/'),
(2, 5, '202', '104', '118', '92', '-', '-', '-', '-', 'jan_bespoke_market_share.png', '2021-02-04 15:22:20', '2021-02-04 15:22:20', 'files/images/market_analysis/market_size_chart/'),
(3, 6, '26.6K', '597', '638', '567', '-', '-', '-', '-', 'jan_kent_ market_size.png', '2021-02-04 17:18:16', '2021-02-04 17:18:16', 'files/images/market_analysis/market_size_chart/'),
(4, 7, '529', '227', '1069', '221', '-', '-', '-', '-', '1612861098_January market share t-trade.png', '2021-02-09 14:58:18', '2021-02-09 14:58:18', 'files/images/market_analysis/market_size_chart/');

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
(1, 4, '1612450554_design package (1) (1).png', '2021-02-04 20:55:54', '2021-02-04 20:55:54', 'files/images/our_latest_package/'),
(2, 5, '1612450579_design package (1) (1).png', '2021-02-04 20:56:19', '2021-02-04 20:56:19', 'files/images/our_latest_package/'),
(3, 6, '1612450614_design package (1) (1).png', '2021-02-04 20:56:54', '2021-02-04 20:56:54', 'files/images/our_latest_package/'),
(4, 7, '1612778322_design package (1) (1) (1)-min.png', '2021-02-08 15:58:42', '2021-02-08 15:58:42', 'files/images/our_latest_package/');

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
(1, 6, 'Not Paid', '2021-02-04 17:48:28', '2021-02-04 17:48:28'),
(2, 4, 'Not Paid', '2021-02-04 17:49:20', '2021-02-04 17:49:20'),
(3, 5, 'Not Paid', '2021-02-08 20:14:12', '2021-02-08 20:14:12'),
(4, 5, 'Paid', '2021-02-10 20:01:08', '2021-02-10 20:01:08'),
(5, 4, 'Paid', '2021-02-19 16:54:58', '2021-02-19 16:54:58');

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
(1, 4, '', 'Unavailable.pdf', '2021-02-04 21:15:10', '2021-02-04 21:15:10', 'files/downloads/payments/receipts/'),
(2, 5, '', 'Unavailable.pdf', '2021-02-04 21:15:45', '2021-02-04 21:15:45', 'files/downloads/payments/receipts/'),
(3, 6, '', 'Unavailable.pdf', '2021-02-04 21:16:08', '2021-02-04 21:16:08', 'files/downloads/payments/receipts/'),
(4, 5, '', 'February Bespoke Properties Ghana Receipt for Wireframe Approval.pdf', '2021-02-10 20:07:51', '2021-02-10 20:07:51', 'files/downloads/payments/receipts/'),
(5, 5, '', 'February Bespoke Properties Ghana Receipt for Website Maintenance.pdf', '2021-02-10 20:15:42', '2021-02-10 20:15:42', 'files/downloads/payments/receipts/'),
(6, 5, '', 'February Bespoke Properties Ghana Receipt for Social Media.pdf\r\n', '2021-02-10 20:16:31', '2021-02-10 20:16:31', 'files/downloads/payments/receipts/'),
(7, 4, '', 'February Receipt for Aspire Destinations.pdf', '2021-02-19 17:02:26', '2021-02-19 17:02:26', 'files/downloads/payments/receipts/');

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
(1, 4, 'January', 'January_Report for Aspire Destination.pdf', '1612368848_Screenshot_20210203-152917_Instagram.jpg', '1612368848_aspire.png', '1612368848_qW (1) (1).png', '2021-02-03 22:14:08', '2021-02-03 22:14:08', 'files/downloads/reports/market_reports/', 'files/downloads/reports/monthly_reoprts/', 'files/images/reports/post_boosting_insights_chart/', 'files/images/reports/ideal_customer/'),
(2, 6, 'January', 'January_Report for Kent\'s Cup.pdf', 'jan_kent_post_boosting.jpg', 'jan_kent_ideal_customer.png', 'January Market Report For Kent\'s Cup.pdf', '2021-02-04 17:47:55', '2021-02-04 17:47:55', 'files/downloads/reports/market_reports/', 'files/downloads/reports/monthly_reoprts/', 'files/images/reports/post_boosting_insights_chart/', 'files/images/reports/ideal_customer/'),
(3, 5, 'January', 'January Report for Bespoke Properties.pdf', 'jan_bespoke_post_boosting.jpg', 'jan_bespoke_ideal_customer.png', 'January Market Report for Bespoke Properties.pdf', '2021-02-08 23:07:03', '2021-02-08 23:07:03', 'files/downloads/reports/market_reports/', 'files/downloads/reports/monthly_reoprts/', 'files/images/reports/post_boosting_insights_chart/', 'files/images/reports/ideal_customer/');

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
(1, 4, '#aspiredestinationsgh #travel #travelagent #vacation #mondaytravel #ghana', '-', '-', '#aspiredestinationsgh #travelblogger #traveling #travelphotography #traveltheworld #wanderlus', '#aspiredestinationsgh #traveladdict #tour #travelagentlife #trip #accravibes', '2021-02-04 18:28:33', '2021-02-04 18:28:33'),
(2, 5, '#realestate #realtor #realestateagent #home #property #bpghana', '#dreamhome #luxury #interiordesign #newhome #luxuryrealestate #bpghana', '#luxuryhomes #realestateinvesting #realestatelife #realty #business #bpghana', '#entrepreneur #broker #homesforsale #justlisted #accra #bpghana', '#construction #homedecor #listing #invest #investing #bpghana', '2021-02-04 20:20:39', '2021-02-04 20:20:39'),
(3, 6, '#coffee #coffeetime #coffeelover #cafe #coffeeshop #kentscup', '-', '-', '#coffee #coffeetime #coffeelover #cafe #coffeeshop #kentscup', '#coffeeart #life #homemade #coffeeoftheday #foodblogger #kentscup', '2021-02-04 20:23:24', '2021-02-04 20:23:24'),
(4, 7, '#drink #cocktails #beer #bar #alcohol #wine #drinkup', '-', '-', '#mixology #fridaycocktail #ghanacocktail #tgif #food #whiskey', '#cocktail #bartender #party #liquor #drinkstagram #saturdayvibes', '2021-02-08 15:51:14', '2021-02-08 15:51:14');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(155) COLLATE utf8mb4_unicode_ci NOT NULL,
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
(2, 'Hans', 'hans@simpliexpand.com', NULL, '$2y$10$3a8OmZNvi2Bk/S543d4/VOB1i.aB4IRu1F3IOEmYyEwyIhcOSSik6', NULL, '2021-02-03 17:54:23', '2021-02-03 17:54:23', 'hans@simpliexpand.com', 'hans_dp.jpg', 'files/images/users/dp/'),
(3, 'Nana Gyasi', 'nanagyasi@simpliexpand.com', NULL, '$2y$10$BJCS4n5eZ0lq2y/suX791uAA5Mo6uRiyag3I1DZO2XgGRUawyQJUS', NULL, '2021-02-03 18:17:11', '2021-02-03 18:17:11', 'Nans', '1612354631_NanaSE.png', 'files/images/users/dp/'),
(4, 'Aspire Destinations', 'kafuikwesi74@gmail.com', NULL, '$2y$10$dAWi4WcQ/V/qp4p2Fzurp.cUII4wFC9VXwIhuYcBl5JEIl/Cfv2ye', NULL, '2021-02-03 18:18:50', '2021-02-03 18:18:50', 'aspire', 'aspire_logo.png', 'files/images/users/dp/'),
(5, 'Bespoke Properties Ghana', 'n.nuno@bespokepropertiesghana.com', NULL, '$2y$10$WNGUg3W4u7u77TXAUsTk5OwK4MmVPykktEFmx4O7Gts1qvN0TPcLq', NULL, '2021-02-04 14:35:37', '2021-02-04 14:35:37', 'bespoke', 'bespoke_logo.png', 'files/images/users/dp/'),
(6, 'Kent\'s Cup', 'upcentsmith41@gmail.com', NULL, '$2y$10$uP0./Z9eGkoQFyeEREQUSuYniIjE8iLPHVcp1QxHRCpjgH9cHTmr.', NULL, '2021-02-04 16:31:35', '2021-02-04 16:31:35', 'kents', 'kent_cup_logo.png', 'files/images/users/dp/'),
(7, 'T-Trade Limited', 'ttradegh1@gmail.com', NULL, '$2y$10$OhDpdGzI6X.IiPkoOwkZhOLWhCkHecKLhJa4STALzBrY0o4fLWCiW', NULL, '2021-02-08 15:31:39', '2021-02-08 15:31:39', 't.tradegh', '1612776699_t trade 2 (1).png', 'files/images/users/dp/');

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
(1, 4, '1612369425_qW (1) (1).png', '2021-02-03 22:23:45', '2021-02-03 22:23:45', 'files/images/website_overview/'),
(2, 6, '1612447903_AS (1) (1) (1) (1).png', '2021-02-04 20:11:43', '2021-02-04 20:11:43', 'files/images/website_overview/'),
(3, 5, 'jan_bespoke_website_overview.png', '2021-02-04 21:09:15', '2021-02-04 21:09:15', 'files/images/website_overview/'),
(4, 7, '1612777949_AS (1) (1) (1) (1).png', '2021-02-08 15:52:29', '2021-02-08 15:52:29', 'files/images/website_overview/'),
(5, 7, '1612778155_AS (1) (1) (1) (1).png', '2021-02-08 15:55:55', '2021-02-08 15:55:55', 'files/images/website_overview/');

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
  ADD UNIQUE KEY `uuid` (`uuid`);

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
  ADD KEY `password_resets_email_index` (`email`(191));

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `payments_user_id_foreign` (`user_id`);

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
  ADD UNIQUE KEY `email` (`email`);

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `receipts`
--
ALTER TABLE `receipts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `reports`
--
ALTER TABLE `reports`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
