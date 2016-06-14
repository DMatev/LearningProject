USE [master]
GO
IF db_id('LearningProject.Core') IS NOT NULL
	BEGIN
		EXEC msdb.dbo.sp_delete_database_backuphistory @database_name = N'LearningProject.Core'
		EXEC('ALTER DATABASE [LearningProject.Core] SET SINGLE_USER WITH ROLLBACK IMMEDIATE ');
		EXEC('DROP DATABASE [LearningProject.Core]');
	END;
CREATE DATABASE [LearningProject.Core]
GO
USE [LearningProject.Core]
GO
EXEC('CREATE SCHEMA CodeCore;');
EXEC('CREATE SCHEMA Core;');