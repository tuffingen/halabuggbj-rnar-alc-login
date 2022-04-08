/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP TABLE IF EXISTS `meeps`;
CREATE TABLE `meeps` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `body` varchar(140) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `meeps` (`id`, `body`, `updated_at`, `created_at`, `user_id`) VALUES
(16, 'asdlkajdashd', '2022-03-31 16:53:55', '2022-03-31 16:53:55', 0);
INSERT INTO `meeps` (`id`, `body`, `updated_at`, `created_at`, `user_id`) VALUES
(17, 'ömWDJW', '2022-03-31 16:53:57', '2022-03-31 16:53:57', 0);
INSERT INTO `meeps` (`id`, `body`, `updated_at`, `created_at`, `user_id`) VALUES
(18, 'ösdmasnlf', '2022-03-31 16:53:59', '2022-03-31 16:53:59', 0);
INSERT INTO `meeps` (`id`, `body`, `updated_at`, `created_at`, `user_id`) VALUES
(19, 'hello guys', '2022-04-04 09:35:38', '2022-04-04 09:35:38', 0),
(20, 'All my meeps. Gone', '2022-04-04 09:36:02', '2022-04-04 09:36:02', 0),
(21, 'nooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo', '2022-04-04 09:37:23', '2022-04-04 09:37:23', 0),
(22, 'I am hungry your meep', '2022-04-04 10:08:11', '2022-04-04 10:08:11', 0),
(23, 'what', '2022-04-04 10:08:15', '2022-04-04 10:08:15', 0),
(24, 'Gone', '2022-04-04 10:08:18', '2022-04-04 10:08:18', 0),
(26, 'hello', '2022-04-04 10:23:01', '2022-04-04 10:23:01', 0),
(27, 'hello', '2022-04-04 10:34:31', '2022-04-04 10:34:31', 0),
(28, 'hkgg', '2022-04-04 10:37:41', '2022-04-04 10:37:41', 0),
(33, 'hello', '2022-04-04 11:12:35', '2022-04-04 11:12:35', 0),
(34, 'hello', '2022-04-04 11:15:03', '2022-04-04 11:15:03', 0),
(35, 'eee', '2022-04-04 11:15:16', '2022-04-04 11:15:16', 0),
(36, 'mepepmpm', '2022-04-04 11:15:31', '2022-04-04 11:15:31', 0),
(37, 'aaaaaaaaa', '2022-04-05 08:40:37', '2022-04-05 08:40:37', 0),
(38, 'hello', '2022-04-08 09:16:22', '2022-04-08 09:16:22', 2),
(39, 'hello', '2022-04-08 09:35:38', '2022-04-08 09:35:38', 4);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;