USE [master]
GO
IF db_id('LearningProject') IS NOT NULL
	BEGIN
		EXEC msdb.dbo.sp_delete_database_backuphistory @database_name = N'LearningProject'
		EXEC('ALTER DATABASE [LearningProject] SET SINGLE_USER WITH ROLLBACK IMMEDIATE ');
		EXEC('DROP DATABASE [LearningProject]');
	END;
CREATE DATABASE [LearningProject]
GO
USE [LearningProject]
GO
EXEC('CREATE SCHEMA CodeCore;');
EXEC('CREATE SCHEMA Core;');